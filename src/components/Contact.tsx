'use client';

import { useState, FormEvent } from 'react';
import Script from 'next/script';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import GlassCard from '@/components/GlassCard';

function GitHubIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

declare global {
  interface Window {
    hcaptcha?: { reset: () => void };
  }
}

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    // Capture the form reference NOW — React nulls e.currentTarget after the
    // synchronous handler returns, which would throw inside the post-await reset().
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Block submission if hCaptcha hasn't been solved (better UX than the server bounce).
    const captchaResponse = formData.get('h-captcha-response');
    if (!captchaResponse || captchaResponse.toString().trim() === '') {
      setStatus('error');
      setErrorMsg('Please confirm you are not a robot.');
      return;
    }

    setStatus('submitting');

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (accessKey) formData.append('access_key', accessKey);
    formData.append('subject', `[quentinvedrenne.com] ${formData.get('name') || 'New message'}`);
    formData.append('from_name', 'quentinvedrenne.com contact form');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
        // Reset hCaptcha widget so a second send needs a fresh challenge
        if (typeof window !== 'undefined' && window.hcaptcha) window.hcaptcha.reset();
      } else {
        setStatus('error');
        setErrorMsg(data.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again or reach me directly via LinkedIn.');
    }
  }

  return (
    <>
      {/* Web3Forms client script — auto-registers hCaptcha on .h-captcha[data-captcha="true"] */}
      <Script src="https://web3forms.com/client/script.js" strategy="lazyOnload" />

      <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto w-full">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Get in Touch
          </h2>
          <p className="text-text-secondary mt-4 text-lg text-center">
            Have a project in mind, an opportunity to discuss, or just want to chat?
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-12">
            <GlassCard className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="py-10 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/15 border border-blue-400/30 mb-4">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-300">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message sent</h3>
                    <p className="text-text-secondary">
                      Thanks for reaching out — I&apos;ll get back to you within a couple of days.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={onSubmit}
                    className="space-y-5"
                  >
                    {/* Honeypot — hidden from real users, bots fill it in */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                      aria-hidden="true"
                    />

                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Name" name="name" type="text" required placeholder="Your name" />
                      <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell me a bit about what you have in mind…"
                        className="w-full px-4 py-3 rounded-lg bg-surface/5 border border-surface/10 text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-blue-500/50 focus:bg-surface/[0.07] transition-colors resize-none"
                      />
                    </div>

                    {/* hCaptcha — Web3Forms manages the keys via data-captcha="true" */}
                    <div className="h-captcha" data-captcha="true" data-theme="dark" />

                    {status === 'error' && errorMsg && (
                      <p className="text-sm text-red-400/90">{errorMsg}</p>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cta text-cta-foreground font-medium hover:bg-cta/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                      >
                        {status === 'submitting' ? (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin">
                              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send message
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M5 12h14M13 5l7 7-7 7" />
                            </svg>
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-4 sm:justify-end">
                        <a
                          href="https://github.com/quentinved"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="text-text-secondary/50 hover:text-foreground transition-colors"
                        >
                          <GitHubIcon />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/quentin-vedrenne/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          className="text-text-secondary/50 hover:text-foreground transition-colors"
                        >
                          <LinkedInIcon />
                        </a>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </AnimatedSection>
      </div>
    </section>
    </>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-text-secondary mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-surface/5 border border-surface/10 text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-blue-500/50 focus:bg-surface/[0.07] transition-colors"
      />
    </div>
  );
}
