import { Button } from "@chakra-ui/react";
import AdminSidebar from "../component/AdminSidebar";
import AdminTopbar from "../component/AdminTopbar";
import { Card } from "../component/AdminCards";
import KeyTag from "../component/KeyTag";
import ConfirmDialog from "../components/ui/confirm-dialog";
import { pnlSummary, pendingExpenses } from "../mock/data";

const navItems = [
  { label: "Profit & loss", active: true },
  { label: "Expenses" },
  { label: "Cash reports" },
  { label: "Invoices" },
];

export default function AccountantPage() {
  return (
    <div className="flex min-h-screen bg-sand">
      <AdminSidebar navItems={navItems} role="Accountant" name="Fatima Yusuf" branch="Birnin Kebbi" />
      <div className="flex-1 px-9 py-7 min-w-0">
        <AdminTopbar
          title={`Profit & loss — ${pnlSummary.period}`}
          subtitle="Birnin Kebbi branch"
          rightSlot={<button className="border border-line rounded-md text-[12.5px] font-semibold px-4 py-2.5 hover:bg-white transition-colors">Export PDF</button>}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card title="Revenue">
            {pnlSummary.revenue.map((row) => (
              <div key={row.label} className="flex justify-between text-[13.5px] py-2.5 border-b border-[#EFE8D8]">
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
            ))}
            <div className="flex justify-between pt-3.5 mt-1 border-t-2 border-ink font-mono text-[15px] font-bold">
              <span>Total revenue</span>
              <span>{pnlSummary.revenueTotal}</span>
            </div>
          </Card>

          <Card title="Expenses">
            {pnlSummary.expenses.map((row) => (
              <div key={row.label} className="flex justify-between text-[13.5px] py-2.5 border-b border-[#EFE8D8]">
                <span>{row.label}</span>
                <span className="text-clay">{row.value}</span>
              </div>
            ))}
            <div className="flex justify-between pt-3.5 mt-1 border-t-2 border-ink font-mono text-[15px] font-bold">
              <span>Total expenses</span>
              <span className="text-clay">{pnlSummary.expenseTotal}</span>
            </div>
          </Card>
        </div>

        <Card title="Pending expense approvals" className="mt-4.5">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr className="font-mono text-[10.5px] uppercase tracking-wide text-textMute">
                <th className="text-left pb-2.5 border-b border-line font-medium">Description</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Category</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Submitted by</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Amount</th>
                <th className="text-left pb-2.5 border-b border-line font-medium">Status</th>
                <th className="text-left pb-2.5 border-b border-line font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {pendingExpenses.map((row) => (
                <tr key={row.id}>
                  <td className="py-3 border-b border-[#EFE8D8]">{row.desc}</td>
                  <td className="py-3 border-b border-[#EFE8D8]">{row.category}</td>
                  <td className="py-3 border-b border-[#EFE8D8]">{row.by}</td>
                  <td className="py-3 border-b border-[#EFE8D8]">{row.amount}</td>
                  <td className="py-3 border-b border-[#EFE8D8]"><KeyTag variant={row.status} /></td>
                  <td className="py-3 border-b border-[#EFE8D8]">
                    {row.status === "pending" && (
                      <div className="flex gap-2 justify-end">
                        <ConfirmDialog
                          trigger={<Button size="xs" className="!border !border-line !rounded !text-[11px] !font-semibold !px-2.5 !py-1 !bg-white !text-textDark">Reject</Button>}
                          title="Reject this expense?"
                          description={`"${row.desc}" (${row.amount}) will be marked rejected and won't count toward this month's P&L.`}
                          confirmLabel="Reject"
                          variant="danger"
                          onConfirm={() => console.log(`TODO: PATCH /expenses/${row.id} { status: "rejected" }`)}
                        />
                        <ConfirmDialog
                          trigger={<Button size="xs" className="!bg-brass !text-[#241704] !rounded !text-[11px] !font-semibold !px-2.5 !py-1">Approve</Button>}
                          title="Approve this expense?"
                          description={`"${row.desc}" (${row.amount}) will be marked approved and counted in this month's expenses.`}
                          confirmLabel="Approve"
                          onConfirm={() => console.log(`TODO: PATCH /expenses/${row.id} { status: "approved" }`)}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
