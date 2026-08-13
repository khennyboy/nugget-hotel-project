import { Button } from "@chakra-ui/react";
import AdminSidebar from "../component/AdminSidebar";
import AdminTopbar from "../component/AdminTopbar";
import KeyTag, { type TagVariant } from "../component/KeyTag";
import ConfirmDialog from "../components/ui/confirm-dialog";
import { tables, activeOrder } from "../mock/data";

const navItems = [
  { label: "Tables", active: true },
  { label: "Orders" },
  { label: "Menu" },
  { label: "Inventory" },
];

export default function RestaurantPOSPage() {
  return (
    <div className="flex min-h-screen bg-sand">
      <AdminSidebar navItems={navItems} role="Restaurant staff" name="Yakubu Musa" branch="Birnin Kebbi · Dinner service" />
      <div className="flex-1 px-9 py-7 min-w-0">
        <AdminTopbar title="Tables — dinner service" subtitle="18 tables · 7 occupied" />

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {tables.map((table) => (
              <button
                key={table.number}
                className={`rounded-[10px] px-3.5 py-4 text-center border transition-colors ${
                  table.number === activeOrder.table
                    ? "border-[#C8A15A] bg-[#F3DCC9]"
                    : "border-line bg-white hover:border-brass"
                }`}
              >
                <div className="font-mono font-bold text-base">{table.number}</div>
                <div className="text-[11px] text-textMute mt-1">{table.capacity}</div>
                <KeyTag variant={table.status as TagVariant} className="mt-2" />
              </button>
            ))}
          </div>

          <div className="bg-white border border-line rounded-card p-5 flex flex-col">
            <h3 className="font-display text-[17px] mb-1">Table {activeOrder.table} · order #{activeOrder.id}</h3>
            <div className="text-[12.5px] text-textMute mb-3.5">Dine-in · {activeOrder.openedAt}</div>
            {activeOrder.items.map((item) => (
              <div key={item.name} className="flex justify-between items-center py-2.5 border-b border-[#EFE8D8] text-[13px]">
                <div>
                  <span className="font-mono bg-sand2 rounded-md px-2 py-0.5 text-xs mr-2.5">×{item.qty}</span>
                  {item.name}
                </div>
                <div>{item.price}</div>
              </div>
            ))}
            <div className="flex-1" />
            <div className="flex justify-between border-t border-line pt-3.5 font-mono text-[17px] font-semibold">
              <span>Order total</span>
              <span>{activeOrder.total}</span>
            </div>
            <ConfirmDialog
              trigger={
                <Button className="!bg-brass !text-[#241704] !rounded-md !font-semibold !text-sm !py-3 !mt-3 !w-full hover:!bg-brassLight">
                  Send to kitchen
                </Button>
              }
              title="Send this order to the kitchen?"
              description={`Table ${activeOrder.table}, ${activeOrder.items.length} item${activeOrder.items.length > 1 ? "s" : ""}, total ${activeOrder.total}. Once sent, the kitchen will start preparing it.`}
              confirmLabel="Send order"
              onConfirm={() => console.log("TODO: PATCH /restaurant-orders/:id/send-to-kitchen")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
