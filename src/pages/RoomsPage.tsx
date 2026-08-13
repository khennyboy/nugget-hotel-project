import GuestNav from "../component/GuestNav";
import GuestFooter from "../component/GuestFooter";
import { roomTypes } from "../mock/data";

export default function RoomsPage() {
  return (
    <div className="bg-paper">
      <GuestNav />
      <div className="px-14 pt-16 pb-24">
        <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-brass mb-3.5">
          Rooms &amp; pricing
        </div>
        <h2 className="font-display text-[36px] font-semibold max-w-[560px] mb-12">
          Every room, every rate, one page.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roomTypes.map((room) => (
            <div key={room.id} className="bg-white border border-line rounded-card overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-[180px] bg-gradient-to-br from-[#2C3454] to-ink relative">
                <span className="absolute top-3.5 left-3.5 bg-white/90 font-mono text-[10px] px-2.5 py-1 rounded-full">
                  Sleeps {room.sleeps} · {room.meta}
                </span>
              </div>
              <div className="px-[22px] pt-5 pb-6">
                <h3 className="font-display text-xl mb-1.5">{room.name}</h3>
                <p className="text-[13px] text-textMute mb-4 leading-relaxed">{room.desc}</p>
                <div className="flex justify-between items-center border-t border-line pt-3.5">
                  <div className="font-mono text-base font-semibold">
                    ₦{room.price.toLocaleString()}
                    <small className="font-body text-[11px] text-textMute font-normal"> /night</small>
                  </div>
                  <a
                    href="/book"
                    className={`text-[12.5px] font-semibold ${room.soldOut ? "text-textMute" : "text-clay"}`}
                  >
                    {room.soldOut ? "Waitlist →" : "Book →"}
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
