import AdminSidebar from "../component/AdminSidebar";
import AdminTopbar from "../component/AdminTopbar";
import { KpiCard, Card } from "../component/AdminCards";
import KeyTag from "../component/KeyTag";
import { companyKpis, branchPerformance, pendingExpenses } from "../mock/data";

const navItems = [
  { label: "Overview", active: true },
  { label: "Branches" },
  { label: "Reservations" },
  { label: "Restaurant" },
  { label: "Tours" },
  { label: "Finance & P&L" },
  { label: "Staff" },
  { label: "Settings" },
];

export default function SuperAdminDashboard() {
  const approvals = pendingExpenses.filter((e) => e.status === "pending");

  return (
    <div className="flex min-h-screen bg-sand">
      <AdminSidebar navItems={navItems} role="Super admin" name="Yusuf Abdullah" branch="All branches" />
      <div className="flex-1 px-9 py-7 min-w-0">
        <AdminTopbar
          title="Company overview"
          subtitle="All branches · today, 9 Aug 2026"
          rightSlot={
            <input className="border border-line rounded-lg px-3.5 py-2.5 text-xs bg-white w-56" placeholder="Search bookings, guests, staff..." />
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6.5">
          {companyKpis.map((kpi) => (
            <KpiCard key={kpi.label} {...kpi} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4.5">
          <Card title="Branch performance">
            <table className="w-full text-[13px] border-collapse">
              <thead>
                <tr className="font-mono text-[10.5px] uppercase tracking-wide text-textMute">
                  <th className="text-left pb-2.5 border-b border-line font-medium">Branch</th>
                  <th className="text-left pb-2.5 border-b border-line font-medium">Occupancy</th>
                  <th className="text-left pb-2.5 border-b border-line font-medium">Revenue</th>
                  <th className="text-left pb-2.5 border-b border-line font-medium">Restaurant</th>
                  <th className="text-left pb-2.5 border-b border-line font-medium">P&amp;L</th>
                </tr>
              </thead>
              <tbody>
                {branchPerformance.map((b) => (
                  <tr key={b.name}>
                    <td className="py-3 border-b border-[#EFE8D8]">{b.name}</td>
                    <td className="py-3 border-b border-[#EFE8D8]">{b.occupancy}</td>
                    <td className="py-3 border-b border-[#EFE8D8]">{b.revenue}</td>
                    <td className="py-3 border-b border-[#EFE8D8]">{b.restaurant}</td>
                    <td className={`py-3 border-b border-[#EFE8D8] ${b.pl.startsWith("+") ? "text-tealLight font-semibold" : ""}`}>
                      {b.pl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Card title="Needs approval">
            <table className="w-full text-[13px] border-collapse">
              <thead>
                <tr className="font-mono text-[10.5px] uppercase tracking-wide text-textMute">
                  <th className="text-left pb-2.5 border-b border-line font-medium">Item</th>
                  <th className="text-left pb-2.5 border-b border-line font-medium">Branch</th>
                  <th className="text-left pb-2.5 border-b border-line font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {approvals.map((a) => (
                  <tr key={a.id}>
                    <td className="py-3 border-b border-[#EFE8D8]">{a.desc}</td>
                    <td className="py-3 border-b border-[#EFE8D8]">Birnin Kebbi</td>
                    <td className="py-3 border-b border-[#EFE8D8]"><KeyTag variant="pending" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
}
