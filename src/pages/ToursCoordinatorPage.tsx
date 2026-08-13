import { Button } from "@chakra-ui/react";
import AdminSidebar from "../component/AdminSidebar";
import AdminTopbar from "../component/AdminTopbar";
import { Card } from "../component/AdminCards";
import KeyTag from "../component/KeyTag";
import FormDialog from "../components/ui/booking-form-dialog";
import { tourDepartures, nextDeparture } from "../mock/data";

const navItems = [
  { label: "Departures", active: true },
  { label: "Packages" },
  { label: "Guides & vehicles" },
];

export default function ToursCoordinatorPage() {
  return (
    <div className="flex min-h-screen bg-sand">
      <AdminSidebar navItems={navItems} role="Tours coordinator" name="Ibrahim Nasir" branch="Birnin Kebbi" />
      <div className="flex-1 px-9 py-7 min-w-0">
        <AdminTopbar
          title="Upcoming departures"
          subtitle="Next 7 days"
          rightSlot={
            <FormDialog
              trigger={
                <Button className="!bg-brass !text-[#241704] !rounded-md !text-[13px] !font-semibold !px-4.5 !py-2.5 hover:!bg-brassLight">
                  + New departure
                </Button>
              }
              title="Schedule a new departure"
              fields={[
                { label: "Tour package", placeholder: "Select a package" },
                { label: "Date & time", placeholder: "e.g. 16 Aug, 8:00am" },
                { label: "Guide", placeholder: "Assign a guide" },
                { label: "Vehicle", placeholder: "Assign a vehicle" },
              ]}
              submitLabel="Schedule departure"
              onSubmit={() => console.log("TODO: POST /tour-departures")}
            />
          }
        />

        <Card title={nextDeparture.title} className="mb-4.5">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr className="font-mono text-[10.5px] uppercase tracking-wide text-textMute">
                <th className="text-left pb-2.5 border-b border-line font-medium">Guide</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Vehicle</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Manifest</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Capacity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">{nextDeparture.guide}</td>
                <td className="py-3">{nextDeparture.vehicle}</td>
                <td className="py-3">{nextDeparture.manifest}</td>
                <td className="py-3">{nextDeparture.capacity}</td>
              </tr>
            </tbody>
          </table>
        </Card>

        <Card title="All departures this week">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr className="font-mono text-[10.5px] uppercase tracking-wide text-textMute">
                <th className="text-left pb-2.5 border-b border-line font-medium">Package</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Date</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Guide</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Vehicle</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {tourDepartures.map((d) => (
                <tr key={d.pkg}>
                  <td className="py-3 border-b border-[#EFE8D8]">{d.pkg}</td>
                  <td className="py-3 border-b border-[#EFE8D8]">{d.date}</td>
                  <td className="py-3 border-b border-[#EFE8D8]">{d.guide}</td>
                  <td className="py-3 border-b border-[#EFE8D8]">{d.vehicle}</td>
                  <td className="py-3 border-b border-[#EFE8D8]"><KeyTag variant={d.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
