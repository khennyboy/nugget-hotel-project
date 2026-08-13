import { Button } from "@chakra-ui/react";
import AdminSidebar from "../component/AdminSidebar";
import AdminTopbar from "../component/AdminTopbar";
import { Card } from "../component/AdminCards";
import KeyTag, { type TagVariant } from "../component/KeyTag";
import ConfirmDialog from "../components/ui/confirm-dialog";
import FormDialog from "../components/ui/booking-form-dialog";
import { rooms, roomTypes, activeFolio } from "../mock/data";

const navItems = [
  { label: "Room status", active: true },
  { label: "Bookings" },
  { label: "Check-in / out" },
  { label: "Guest folios" },
  { label: "My shift" },
];

const roomTypeName = (id: string) => roomTypes.find((rt) => rt.id === id)?.name ?? "";

export default function FrontDeskPage() {
  return (
    <div className="flex min-h-screen bg-sand">
      <AdminSidebar navItems={navItems} role="Front desk" name="Amina Bello" branch="Birnin Kebbi · Shift open" />
      <div className="flex-1 px-9 py-7 min-w-0">
        <AdminTopbar
          title="Room status board"
          subtitle="Birnin Kebbi · 42 rooms"
          rightSlot={
            <FormDialog
              trigger={
                <Button className="!bg-brass !text-[#241704] !rounded-md !text-[13px] !font-semibold !px-4.5 !py-2.5 hover:!bg-brassLight">
                  + New booking
                </Button>
              }
              title="New booking"
              fields={[
                { label: "Guest name", placeholder: "Full name" },
                { label: "Phone number", placeholder: "+234 ..." },
                { label: "Room", placeholder: "Select a room" },
                { label: "Check in — Check out", placeholder: "14 Aug — 17 Aug 2026" },
              ]}
              submitLabel="Create booking"
              onSubmit={() => console.log("TODO: POST /bookings")}
            />
          }
        />

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5 mb-6">
          {rooms.map((room) => (
            <div key={room.number} className="border border-line rounded-[10px] p-3 bg-white">
              <div className="font-mono font-semibold text-sm mb-1">{room.number}</div>
              <div className="text-[10px] text-textMute mb-2">{roomTypeName(room.roomTypeId)}</div>
              <KeyTag variant={room.status as TagVariant} />
            </div>
          ))}
        </div>

        <Card
          title={
            <span className="flex items-center gap-2">
              Room {activeFolio.room} · folio — {activeFolio.guest.name}
              {activeFolio.guest.vip && <KeyTag variant="vip" />}
            </span>
          }
        >
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr className="font-mono text-[10.5px] uppercase tracking-wide text-textMute">
                <th className="text-left pb-2.5 border-b border-line font-medium">Item</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Date</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {activeFolio.lineItems.map((row) => (
                <tr key={row.label}>
                  <td className="py-3 border-b border-[#EFE8D8]">{row.label}</td>
                  <td className="py-3 border-b border-[#EFE8D8]">{row.date}</td>
                  <td className="py-3 border-b border-[#EFE8D8]">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end gap-2.5 mt-4">
            <button className="border border-line rounded-md text-[12.5px] font-semibold px-4 py-2.5 hover:bg-sand transition-colors">
              Room transfer
            </button>
            <ConfirmDialog
              trigger={
                <Button className="!bg-brass !text-[#241704] !rounded-md !text-[12.5px] !font-semibold !px-4.5 !py-2.5 hover:!bg-brassLight">
                  Check out &amp; settle
                </Button>
              }
              title="Check out this guest?"
              description={`This closes ${activeFolio.guest.name}'s folio for room ${activeFolio.room} and marks the room as needing cleaning. This can't be undone from here.`}
              confirmLabel="Check out"
              onConfirm={() => console.log("TODO: PATCH /bookings/:id/check-out")}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
