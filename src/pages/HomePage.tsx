import Rooms from "@/component/Rooms";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Nugget Continental Hotel & Tours</title>
        <meta
          name="description"
          content="Book comfortable rooms and tours at Nugget Continental Hotel."
        />
      </Helmet>
      <div className="min-h-dvh grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-linear-to-b from-ink to-ink2 bg-yellow-400 text-sand px-4 md:px-12">
        <div className="flex gap-3 items-center md:items-start flex-col">
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-brassLight">
            Birnin Kebbi · est. hospitality
          </div>
          <h1 className="font-display text-3xl md:text-4xl leading-[1.06] font-semibold max-w-180 text-balance text-center md:text-start">
            Rest well, eat well,{" "}
            <em className="italic text-brassLight">see more</em> of Kebbi.
          </h1>
          <p className="text-[16.5px] text-[#C4C6D8] max-w-120 leading-relaxed text-center md:text-start">
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
        <div className="hidden md:block justify-self-center relative w-80 h-80">
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
            className="absolute w-64 h-80 object-cover rounded-xl shadow-2xl border-4 border-white -rotate-12 -translate-x-5 z-10"
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
            className="absolute   w-64 h-80 object-cover rounded-xl shadow-2xl border-4 border-white rotate-3 z-20"
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
            className="absolute w-64 h-80 object-cover rounded-xl shadow-2xl border-4 border-white rotate-12 translate-x-5 z-30"
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
      </div>
      <Rooms />
    </div>
  );
}
