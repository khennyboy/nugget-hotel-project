export interface NavItem {
  label: string;
  active?: boolean;
}

interface AdminSidebarProps {
  navItems: NavItem[];
  role: string;
  name: string;
  branch: string;
}

export default function AdminSidebar({ navItems, role, name, branch }: AdminSidebarProps) {
  return (
    <div className="w-[230px] shrink-0 bg-ink text-[#C7CBE0] px-4 py-6">
      <div className="font-display text-[17px] text-sand font-semibold pb-[22px] border-b border-[#2B3253] mb-[18px]">
        Nugget <span className="text-brassLight">Continental</span>
      </div>

      {navItems.map((item) => (
        <div
          key={item.label}
          className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium mb-0.5 transition-colors ${
            item.active ? "bg-[#262E4C] text-white" : "hover:bg-[#1F2740]/60 cursor-pointer"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${item.active ? "bg-brassLight" : "bg-[#4B5378]"}`}
          />
          {item.label}
        </div>
      ))}

      <div className="mt-5 p-3 bg-ink2 rounded-[10px]">
        <div className="font-mono text-[10px] text-brassLight uppercase tracking-wider">{role}</div>
        <div className="text-[13px] font-semibold text-white mt-1">{name}</div>
        <div className="text-[11.5px] text-[#8189A8]">{branch}</div>
      </div>
    </div>
  );
}
