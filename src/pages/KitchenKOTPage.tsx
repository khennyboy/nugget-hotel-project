import KeyTag from "../component/KeyTag";
import { kotSent, kotPreparing, kotReady } from "../mock/data";

type Ticket = { orderId: string; table: string; items: string[]; time: string };

function TicketColumn({
  label,
  tickets,
  variant,
  borderColor,
}: {
  label: string;
  tickets: Ticket[];
  variant: "pending" | "reserved_kot" | "approved";
  borderColor?: string;
}) {
  const badgeVariant = variant === "reserved_kot" ? "reserved" : variant;
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-wide text-textMute mb-3 flex justify-between">
        <span>{label}</span>
        <span>{tickets.length}</span>
      </div>
      {tickets.map((ticket) => (
        <div
          key={ticket.orderId}
          className="bg-white border rounded-[10px] p-3.5 mb-3"
          style={{ borderColor: borderColor ?? "#DDD3BB" }}
        >
          <div className="flex justify-between font-mono text-xs font-semibold mb-2.5">
            <span>{ticket.table}</span>
            <KeyTag variant={badgeVariant as any}>{label.toLowerCase()}</KeyTag>
          </div>
          {ticket.items.map((item) => (
            <div key={item} className="text-[13px] py-1">{item}</div>
          ))}
          <div className="font-mono text-[11px] text-clay mt-2">{ticket.time}</div>
        </div>
      ))}
    </div>
  );
}

export default function KitchenKOTPage() {
  // Poll GET /restaurant-orders?status=sent_to_kitchen every 3-5s (TRD §7)
  // to refresh these three arrays instead of the static mock import.
  const openCount = kotSent.length + kotPreparing.length + kotReady.length;

  return (
    <div className="min-h-screen bg-sand px-8 py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="font-display text-[25px] font-semibold">Kitchen order tickets</div>
          <div className="text-[12.5px] text-textMute mt-1">Birnin Kebbi · live · refreshing every 4s</div>
        </div>
        <KeyTag variant="vip">{openCount} open tickets</KeyTag>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
        <TicketColumn label="Sent" tickets={kotSent} variant="pending" />
        <TicketColumn label="Preparing" tickets={kotPreparing} variant="reserved_kot" borderColor="#C8A15A" />
        <TicketColumn label="Ready to serve" tickets={kotReady} variant="approved" borderColor="#5DAF8E" />
      </div>
    </div>
  );
}
