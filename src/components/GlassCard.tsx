interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = '' }: Props) {
  return (
    <div className={`bg-surface/5 backdrop-blur-md border border-surface/10 rounded-2xl ${className}`}>
      {children}
    </div>
  );
}
