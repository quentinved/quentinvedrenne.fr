export default function WhisperArchitecture() {
  return (
    <>
      <p>
        You&apos;ve probably pasted a password in Slack, Teams, or Discord
        before. And then thought: <em>this is probably not great.</em> And
        then did it anyway, because everything else feels like too much
        effort.
      </p>
      <p>
        That&apos;s the workflow problem{' '}
        <a href="https://github.com/quentinved/Whisper">Whisper</a> exists to
        fix. But it&apos;s not the reason I built it.
      </p>

      <h2>The previous attempt</h2>
      <p>
        In 2022 I built Sharepassword — Next.js + Node + Chakra UI, with a
        browser extension. It worked. It was also, technically, the opposite
        of zero-knowledge: the server held the encryption key. If the
        database leaked, every secret leaked.
      </p>
      <p>That gap is what pushed me to do it again, properly.</p>

      <h2>What I actually wanted to learn</h2>
      <p>I had four things on my list, and Whisper happened to touch all of them:</p>
      <ol>
        <li>
          <strong>The Rust web stack</strong> — Axum + Askama + sqlx.
          Server-rendered HTML, no SPA, no Node.
        </li>
        <li>
          <strong>A real CLI in Rust</strong> — not a hello-world; something
          I&apos;d actually want to install.
        </li>
        <li>
          <strong>Distributing a Rust binary on npm</strong> —{' '}
          <code>curl | sh</code> is fine, but <code>npm i -g</code> is
          universal.
        </li>
        <li>
          <strong>How open source actually works</strong> — running a project
          end-to-end: license, contributing guide, security policy, release
          hygiene, the community side. I&apos;m planning to do more open
          source, so I treated this as a deliberate first run at the rest of
          it.
        </li>
      </ol>
      <p>
        Bundling them into one project meant the parts had to fit together.
        The architecture had to keep them honest.
      </p>

      <h2>Hexagonal architecture, in actual code</h2>
      <p>The Cargo workspace splits the way the constraints split:</p>
      <pre>
        <code>{`whisper/
├── services-core/                       # pure domain — no async, no I/O
│   ├── entities/
│   ├── values_object/
│   ├── contracts/repositories/          # storage traits
│   ├── services/secret_encryption.rs    # encryption trait
│   └── commands/                        # use cases, one per file
├── adapters/
│   ├── postgresql-adapter/              # SharedSecretRepository impl
│   └── aes-gcm-crypto/                  # SecretEncryption impl
└── applications/
    ├── axum/server/                     # HTTP, Askama templates, routes
    ├── cli/                             # clap, dialoguer, HTTP client
    └── discord/                         # bot`}</code>
      </pre>
      <p>
        The domain depends on traits, never implementations. Two of them
        carry most of the weight:
      </p>
      <pre>
        <code>{`pub trait SecretEncryption {
    fn encrypt_secret(&self, secret: &str) -> Result<SecretEncrypted>;
    fn decrypt_secret(&self, encrypted_secret: SecretEncrypted) -> Result<String>;
}

pub trait SharedSecretRepository {
    fn save(&self, secret: SharedSecret)
        -> impl Future<Output = Result<SecretId>> + Send;
    fn get_by_id(&self, id: &SecretId)
        -> impl Future<Output = Result<Option<SharedSecret>>> + Send;
    fn delete_by_id(&self, id: &SecretId)
        -> impl Future<Output = Result<()>> + Send;
    // ...
}`}</code>
      </pre>
      <p>
        Use cases compose them generically. Notice that the signature
        doesn&apos;t mention Postgres or AES anywhere:
      </p>
      <pre>
        <code>{`pub async fn handle(
    &self,
    secret_encryption: &impl SecretEncryption,
    shared_secret_repository: &impl SharedSecretRepository,
) -> Result<Option<(String, bool)>, GetSecretByIdError> { ... }`}</code>
      </pre>
      <p>The two payoffs that justified the upfront discipline:</p>
      <ul>
        <li>
          <strong>The Axum server doesn&apos;t know Postgres exists.</strong>{' '}
          Swap to SQLite — it&apos;s a new adapter crate. The use cases
          don&apos;t change.
        </li>
        <li>
          <strong>Domain logic is testable without a database.</strong> Mock
          implementations of <code>SharedSecretRepository</code> are 30
          lines. Every use case has unit tests that run in milliseconds.
        </li>
      </ul>

      <h2>The CLI</h2>
      <p>
        <code>clap</code> with derive macros for parsing,{' '}
        <code>dialoguer</code> for interactive prompts,{' '}
        <code>indicatif</code> for progress and spinners,{' '}
        <code>reqwest</code> for HTTP, <code>tempfile</code> for atomic
        writes. The subcommand list:
      </p>
      <pre>
        <code>{`init    import   push     pull       rotate
remove  status   invite   join       share
get     completions`}</code>
      </pre>
      <p>Two things I won&apos;t go back from:</p>
      <p>
        <strong>Type-driven UX.</strong> <code>clap</code>&apos;s derive
        macros let you encode the entire CLI interface in a struct. Mistypes
        fail at compile time, not when a user reports a confusing error.
        Coming from Node CLIs where I&apos;d hand-stitched yargs config —
        this is a quality-of-life jump.
      </p>
      <p>
        <strong>Single binary, 3.16–3.51 MB stripped depending on the
        target.</strong> Starts in milliseconds, holds no state in a daemon,
        uninstalls cleanly. Compare to anything that ships its own runtime.
      </p>

      <h2>Publishing a Rust binary on npm</h2>
      <p>
        This was the part I was least sure about going in. The pattern —
        popularised by <code>esbuild</code> and adopted by <code>swc</code>,{' '}
        <code>biome</code>, and others — is: one platform-specific package
        per architecture, plus a thin Node shim that picks the right one at
        install time.
      </p>
      <p>
        The base <code>whisper-secrets</code> package declares them as
        optional dependencies:
      </p>
      <pre>
        <code>{`"optionalDependencies": {
  "@whisper-secrets/linux-x64":    "0.2.0",
  "@whisper-secrets/linux-arm64":  "0.2.0",
  "@whisper-secrets/darwin-arm64": "0.2.0",
  "@whisper-secrets/win32-x64":    "0.2.0"
}`}</code>
      </pre>
      <p>
        Each platform package sets <code>os</code> and <code>cpu</code>{' '}
        fields in its own <code>package.json</code> — npm only installs the
        one that matches the user&apos;s machine. A ~50-line Node script in{' '}
        <code>bin/whisper-secrets</code> resolves the matched package and{' '}
        <code>execFileSync</code>s its binary.
      </p>
      <p>The release pipeline is one tag-triggered GitHub Actions workflow:</p>
      <pre>
        <code>{`push tag v0.2.0
   ├── test (fmt + clippy + unit + integration)
   ├── create draft GitHub release
   ├── matrix build (4 targets, cross for Linux ARM)
   │     each: build → strip → tar.gz + sha256
   │            → publish @whisper-secrets/<plat>
   └── publish whisper-secrets (base) + finalize release`}</code>
      </pre>
      <p>Two recommendations if you&apos;re doing this:</p>
      <p>
        <strong>OIDC Trusted Publishing.</strong> No <code>NPM_TOKEN</code>{' '}
        in the repo, no rotation. The workflow gets{' '}
        <code>id-token: write</code> permission, npm verifies the GitHub
        identity, you publish. One less long-lived secret to lose.
      </p>
      <p>
        <strong><code>--provenance</code>.</strong> Every release ships SLSA
        attestations linking the published binary back to the Action run and
        the source commit. Anyone can verify with{' '}
        <code>npm audit signatures</code>.
      </p>
      <p>
        Whether either matters for a tool downloaded a few hundred times a
        month is debatable. The supply-chain hygiene cost about an hour of
        YAML.
      </p>

      <h2>Open source as practice, not just license</h2>
      <p>
        The bar for calling something &quot;open source&quot; is low — push
        to GitHub, add an MIT license, done. The bar for it actually being
        usable by anyone else is much higher. Since I&apos;m planning to keep
        doing this, I treated Whisper as a deliberate first run at the rest:
      </p>
      <ul>
        <li>
          <code>CONTRIBUTING.md</code> with local setup, tests, and PR
          process
        </li>
        <li>
          <code>SECURITY.md</code> with a private disclosure path (no public
          issues for vulnerabilities)
        </li>
        <li>
          Code of conduct, issue and PR templates, a public Slack community,
          semver tags, signed releases
        </li>
      </ul>
      <p>
        Small things in isolation. Together they&apos;re the difference
        between &quot;code on the internet&quot; and &quot;a project someone
        else can contribute to.&quot; The next project starts with the
        scaffolding already done.
      </p>

      <h2>The point</h2>
      <p>
        Whisper started as a way to explore the Rust web stack, the Rust CLI
        story, the Rust-on-npm distribution story, and how to actually run
        an open-source project. It quickly became a solution to a recurring
        workflow problem — the{' '}
        <em>&quot;ugh I guess I&apos;ll just paste this in Slack&quot;</em>{' '}
        one. Both things are true. The first is why I finished it; the
        second is why I still use it.
      </p>

      <hr />

      <p>
        Source:{' '}
        <a href="https://github.com/quentinved/Whisper">github.com/quentinved/Whisper</a>.
        Try it:{' '}
        <a href="https://whisper.quentinvedrenne.com">whisper.quentinvedrenne.com</a>.
        CLI: <a href="https://www.npmjs.com/package/whisper-secrets">whisper-secrets</a>{' '}
        on npm.
      </p>
    </>
  );
}
