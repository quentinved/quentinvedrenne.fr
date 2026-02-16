interface Props {
  label: string;
}

export default function SkillPill({ label }: Props) {
  return (
    <span className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/10 border border-white/10 text-text-secondary">
      {label}
    </span>
  );
}
