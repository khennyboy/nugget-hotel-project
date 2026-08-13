import GuestNav from "../component/GuestNav";
import GuestFooter from "../component/GuestFooter";
import { tourPackages } from "../mock/data";

export default function ToursPage() {
  return (
    <div className="bg-paper">
      <GuestNav />
      <div className="px-14 pt-16 pb-24">
        <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-brass mb-3.5">
          Tours &amp; packages
        </div>
        <h2 className="font-display text-[36px] font-semibold max-w-[560px] mb-12">
          See Kebbi, guided — book alongside your stay or on its own.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tourPackages.map((tour) => (
            <div key={tour.id} className="grid grid-cols-[180px_1fr] gap-5 bg-white border border-line rounded-card p-4 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-teal to-[#16332D] rounded-[10px]" />
              <div>
                <h4 className="font-display text-[17px] mb-1.5">{tour.name}</h4>
                <p className="text-[12.5px] text-textMute mb-3 leading-relaxed">{tour.desc}</p>
                <div className="flex gap-3.5 font-mono text-[11px] text-textMute">
                  <span>{tour.duration}</span>
                  <span>{tour.group}</span>
                  <span>{tour.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GuestFooter rightText="Guides and vehicles confirmed at booking" />
    </div>
  );
}
