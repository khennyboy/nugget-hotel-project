
export type TagVariant =
  | "free"
  | "occupied"
  | "reserved"
  | "needs_cleaning"
  | "vip"
  | "pending"
  | "approved"
  | "rejected"
  | "confirmed"
  | "needs_guide";

const VARIANT_CLASSES: Record<TagVariant, string> = {
  free: "bg-[#DCEAE3] text-[#1F5C46]",
  occupied: "bg-[#F3DCC9] text-[#8A4A1B]",
  reserved: "bg-[#DDE3F3] text-[#2E3E7A]",
  needs_cleaning: "bg-[#EDE4CE] text-[#7A5B1F]",
  vip: "bg-[#2D2216] text-[#E6BE73]",
  pending: "bg-[#F0E3C9] text-[#8A651A]",
  approved: "bg-[#DCEAE3] text-[#1F5C46]",
  rejected: "bg-[#F3D6D0] text-[#8A2E1B]",
  confirmed: "bg-[#DCEAE3] text-[#1F5C46]",
  needs_guide: "bg-[#F0E3C9] text-[#8A651A]",
};

const LABELS: Record<TagVariant, string> = {
  free: "free",
  occupied: "occupied",
  reserved: "reserved",
  needs_cleaning: "needs cleaning",
  vip: "VIP",
  pending: "pending",
  approved: "approved",
  rejected: "rejected",
  confirmed: "confirmed",
  needs_guide: "needs guide",
};

interface KeyTagProps {
  variant: TagVariant;
  children?: React.ReactNode;
  className?: string;
}

/**
 * The "key-tag" badge — signature status pill (echoes a physical
 * hotel room-key fob). Used for room status, table status, order/KOT
 * status, and expense approval status everywhere in the app.
 * Pass children to override the default label text.
 */
export default function KeyTag({ variant, children, className = "" }: KeyTagProps) {
  return (
    <span
      className={`relative inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-wide
        py-[5px] pl-4 pr-3 rounded-r-full leading-none ${VARIANT_CLASSES[variant]} ${className}`}
    >
      <span className="absolute -left-px top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full bg-paper border border-black/10" />
      {children ?? LABELS[variant]}
    </span>
  );
}
