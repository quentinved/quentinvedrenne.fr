interface Props {
  label: string;
}

export default function SkillPill({ label }: Props) {
  return (
    <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-surface/10 border border-surface/10 text-text-secondary">
      {label}
    </span>
  );
}
