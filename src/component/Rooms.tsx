import { rooms, roomTypes } from "@/mock/data";

const Rooms = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12 mb-10">
      {rooms.map((room) => (
        <div
          key={room.number}
          className="overflow-hidden bg-white border border-line rounded-card  hover:shadow-lg transition-shadow"
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
            <h3 className="font-display text-xl mb-1.5">
              {roomTypes.find((each) => each.id == room.roomTypeId)?.name}
            </h3>
            <p className="text-[13px] text-textMute mb-4 leading-relaxed">
              {roomTypes.find((each) => each.id == room.roomTypeId)?.desc}
            </p>
            <div className="flex justify-between items-center border-t border-line pt-3.5">
              <div className="font-mono text-base font-semibold">
                ₦{" "}
                {roomTypes
                  .find((each) => each.id == room.roomTypeId)
                  .price?.toLocaleString()}
                <small className="font-body text-[11px] text-textMute font-normal">
                  {" "}
                  /night
                </small>
              </div>
              <a href="/book" className="text-[12.5px] font-semibold text-clay">
                Book →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
