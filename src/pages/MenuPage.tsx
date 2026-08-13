import GuestNav from "../component/GuestNav";
import GuestFooter from "../component/GuestFooter";
import { menu } from "../mock/data";

export default function MenuPage() {
  const columns = [menu.slice(0, 2), menu.slice(2)];

  return (
    <div className="bg-paper">
      <GuestNav />
      <div className="bg-ink text-sand">
        <div className="px-14 pt-16 pb-24">
          <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-brassLight mb-3.5">
            Nugget Kitchen
          </div>
          <h2 className="font-display text-[36px] font-semibold max-w-[560px] mb-12 text-sand">
            A continental table, served three ways.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            {columns.map((column, colIdx) => (
              <div key={colIdx}>
                {column.map((section) => (
                  <div key={section.category}>
                    <div className="font-mono text-[11px] tracking-wide uppercase text-brassLight mt-5 pt-5.5 border-t border-[#333C5C] first:mt-0 first:pt-0 first:border-t-0 mb-4.5">
                      {section.category}
                    </div>
                    {section.items.map((item) => (
                      <div key={item.name} className="flex justify-between py-3 border-b border-dashed border-[#333C5C]">
                        <div>
                          <div className="text-[15px] font-medium">{item.name}</div>
                          <div className="text-[12.5px] text-[#9296B0] mt-0.5">{item.desc}</div>
                        </div>
                        <div className="font-mono text-sm text-brassLight whitespace-nowrap ml-5">{item.price}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <GuestFooter rightText="Dine-in · Room service · Takeaway" />
    </div>
  );
}
