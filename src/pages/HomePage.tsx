import GuestNav from "../component/GuestNav";
import GuestFooter from "../component/GuestFooter";
import { roomTypes } from "../mock/data";

export default function HomePage() {
  const featured = roomTypes.slice(0, 3);

  return (
    <div className="bg-paper">
      <GuestNav />
      <div className="min-h-dvh grid gap-6 content-center  bg-linear-to-b from-ink to-ink2 text-sand pb-32 px-3 ">
        <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-brassLight ">
          Birnin Kebbi · est. hospitality
        </div>
        <h1 className="font-display text-3xl  leading-[1.06] font-semibold max-w-180 ">
          Rest well, eat well,{" "}
          <em className="italic text-brassLight">see more</em> of Kebbi.
        </h1>
        <p className="text-[16.5px] text-[#C4C6D8] max-w-120 leading-relaxed ">
          Rooms, an in-house restaurant, and guided tours — one booking, one
          continental standard, across every Nugget branch.
        </p>
        <div className="flex gap-3.5">
          <button className="bg-brass text-[#241704] px-4 py-3.5 rounded-md font-semibold text-sm hover:bg-brassLight transition-colors">
            Check availability
          </button>
          <button className="bg-transparent text-sand border border-[#4A5278] px-4 py-3.5 rounded-md font-semibold text-sm hover:border-brassLight transition-colors">
            View tour packages
          </button>
        </div>
      </div>

      <div className="px-3 py-10">
        <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-brass mb-3.5">
          Accommodation
        </div>
        <h2 className="font-display text-xl font-semibold max-w-140 mb-8">
          Rooms built for a long journey and a short one.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((room) => (
            <div
              key={room.id}
              className="bg-white border border-line rounded-card  hover:shadow-lg transition-shadow"
            >
              <div className="h-45 bg-linear-to-br from-[#2C3454] to-ink relative">
                <img
                  src="/nugget-room-400w.webp"
                  srcSet="
                        /nugget-room-400w.webp 400w,
                        /nugget-room-800w.webp 800w,
                        /nugget-room-1200w.webp 1200w
                      "
                  sizes="(min-width: 768px) 33vw, 100vw"
                  alt="Nugget Continental room"
                  className="w-full h-45 object-cover"
                />
              </div>
              <div className="px-5.5 pt-5 pb-6">
                <h3 className="font-display text-xl mb-1.5">{room.name}</h3>
                <p className="text-[13px] text-textMute mb-4 leading-relaxed">
                  {room.desc}
                </p>
                <div className="flex justify-between items-center border-t border-line pt-3.5">
                  <div className="font-mono text-base font-semibold">
                    ₦{room.price.toLocaleString()}
                    <small className="font-body text-[11px] text-textMute font-normal">
                      {" "}
                      /night
                    </small>
                  </div>
                  <a
                    href="/book"
                    className="text-[12.5px] font-semibold text-clay"
                  >
                    Book →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GuestFooter />
    </div>
  );
}
