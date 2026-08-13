import GuestNav from "../component/GuestNav";
import GuestFooter from "../component/GuestFooter";
import { roomTypes } from "../mock/data";

export default function HomePage() {
  return (
    <div className="bg-paper">
      <GuestNav />
      <div className="min-h-dvh grid grid-cols-1 lg:grid-cols-2 gap-6 content-center bg-linear-to-b from-ink to-ink2 text-sand pb-32 px-4 md:px-12">
        <div>
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-brassLight">
            Birnin Kebbi · est. hospitality
          </div>
          <h1 className="font-display text-3xl md:text-4xl leading-[1.06] font-semibold max-w-180">
            Rest well, eat well,{" "}
            <em className="italic text-brassLight">see more</em> of Kebbi.
          </h1>
          <p className="text-[16.5px] text-[#C4C6D8] max-w-120 leading-relaxed">
            Rooms, an in-house restaurant, and guided tours — one booking, one
            continental standard, across every Nugget branch.
          </p>
          <div className="flex gap-3.5">
            <button className="bg-brass text-[#241704] px-4 py-3 rounded-md font-semibold text-sm hover:bg-brassLight transition-colors">
              Check availability
            </button>
            <button className="bg-transparent text-sand border border-[#4A5278] px-4 py-3 rounded-md font-semibold text-sm hover:border-brassLight transition-colors">
              View tour packages
            </button>
          </div>
        </div>

        {/* Overlapping rotated image stack — large screens only */}
        <div className="hidden lg:flex items-center justify-center relative h-100">
          <img
            loading="lazy"
            src="/nugget-homepage-400.webp"
            srcSet="
        /nugget-homepage-400.webp 400w,
        /nugget-homepage-800.webp 800w,
        /nugget-homepage-1000.webp 1000w
      "
            sizes="33vw"
            alt="Nugget Continental room"
            className="absolute w-64 h-80 object-cover rounded-xl shadow-2xl border-4 border-white -rotate-12 -translate-x-24 z-10"
          />
          <img
            loading="lazy"
            src="/nugget-homepage-2-400.webp"
            srcSet="
        /nugget-homepage-2-400.webp 400w,
        /nugget-homepage-2-800.webp 800w,
        /nugget-homepage-2-1200.webp 1200w
      "
            sizes="33vw"
            alt="Nugget Continental pool view"
            className="absolute w-64 h-80 object-cover rounded-xl shadow-2xl border-4 border-white rotate-3 z-20"
          />
          <img
            loading="lazy"
            src="/nugget-homepage-3-400.webp"
            srcSet="
        /nugget-homepage-3-400.webp 400w,
        /nugget-homepage-3-800.webp 800w,
        /nugget-homepage-3-1200.webp 1200w
      "
            sizes="33vw"
            alt="Nugget Continental exterior"
            className="absolute w-64 h-80 object-cover rounded-xl shadow-2xl border-4 border-white rotate-12 translate-x-24 z-30"
          />
        </div>
      </div>
      <div className="px-4 md:px-8 py-10">
        <div className="font-mono text-[11px] text-center tracking-[0.16em] uppercase text-brass mb-3.5">
          Accommodation
        </div>
        <h2 className="font-display text-xl font-semibold  mb-8 text-center text-balance">
          Rooms built for a long journey and a short one.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roomTypes.map((room) => (
            <div
              key={room.id}
              className="bg-white border border-line rounded-card  hover:shadow-lg transition-shadow"
            >
              <div className="h-45 bg-linear-to-br from-[#2C3454] to-ink relative">
                <img
                  loading="lazy"
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
