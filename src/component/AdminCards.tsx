interface KpiCardProps {
  label: string;
  value: string;
  delta?: string;
  down?: boolean;
}

export function KpiCard({ label, value, delta, down }: KpiCardProps) {
  return (
    <div className="bg-white border border-line rounded-card px-5 py-[18px]">
      <div className="font-mono text-[10.5px] uppercase tracking-wide text-textMute">{label}</div>
      <div className="text-[25px] font-bold mt-2 font-mono">{value}</div>
      {delta && (
        <div className={`text-[11.5px] mt-1.5 font-semibold ${down ? "text-clay" : "text-tealLight"}`}>
          {delta}
        </div>
      )}
    </div>
  );
}

interface CardProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <div className={`bg-white border border-line rounded-card px-6 py-[22px] ${className}`}>
      <h3 className="font-display text-[17px] mb-4">{title}</h3>
      {children}
    </div>
  );
}
