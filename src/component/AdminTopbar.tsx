interface AdminTopbarProps {
  title: string;
  subtitle: string;
  rightSlot?: React.ReactNode;
}

export default function AdminTopbar({ title, subtitle, rightSlot }: AdminTopbarProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <div className="font-display text-[25px] font-semibold">{title}</div>
        <div className="text-[12.5px] text-textMute mt-1">{subtitle}</div>
      </div>
      {rightSlot}
    </div>
  );
}
