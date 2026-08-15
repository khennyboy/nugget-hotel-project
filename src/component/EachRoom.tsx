import { useParams, Link } from "react-router-dom";
import { rooms, roomTypes } from "@/mock/data";
import { Helmet } from "react-helmet-async";

const statusLabel: Record<string, string> = {
  free: "Available",
  occupied: "Occupied",
  reserved: "Reserved",
  needs_cleaning: "Needs cleaning",
};

const EachRoom = () => {
  const { number } = useParams<{ number: string }>();


  const room = rooms.find((r) => String(r.number) === number);

  const roomType = room
    ? roomTypes.find((rt) => rt.id === room.roomTypeId)
    : undefined;

  if (!room || !roomType) {
    return (
      <div className="px-4 md:px-12 py-16 text-center">
        <h2 className="font-display text-2xl mb-2">Room not found</h2>
        <p className="text-textMute mb-6">
          We couldn&apos;t find a room with number &ldquo;{number}&rdquo;.
        </p>
        <Link to="/" className="text-clay font-semibold">
          ← Back to all rooms
        </Link>
      </div>
    );
  }

  return (
     <>
         <Helmet>
            <title>Room {number} | Nugget Continental Hotel</title>
            <meta name="description" content={`Details and booking for Room ${number ?? "this room"} at Nugget Continental Hotel.`} />
          </Helmet>
             <div className="px-4 md:px-12 mb-10">
          <Link to="/" className="text-[13px] text-textMute hover:text-clay">
            ← Back to rooms
          </Link>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-64 md:h-full rounded-card overflow-hidden bg-linear-to-br from-[#2C3454] to-ink">
              <img
                loading="lazy"
                src="/nugget-room-800w.webp"
                srcSet="
                  /nugget-room-400w.webp 400w,
                  /nugget-room-800w.webp 800w,
                  /nugget-room-1200w.webp 1200w
                "
                sizes="(min-width: 768px) 50vw, 100vw"
                alt="Nugget Continental room"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <h1 className="font-display text-2xl">{roomType.name}</h1>
                <span className="text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full border border-line text-textMute">
                  {statusLabel[room.status]}
                </span>
              </div>
              <p className="text-[13px] text-textMute mb-1">
                Room {room.number} · Sleeps {roomType.sleeps}
              </p>
              <p className="text-sm text-textMute leading-relaxed mb-6">
                {roomType.desc}
              </p>
              <div className="font-mono text-2xl font-semibold mb-6">
                ₦ {roomType.price?.toLocaleString()}
                <small className="font-body text-[12px] text-textMute font-normal">
                  {" "}
                  /night
                </small>
              </div>
              <Link
                to={`/book?room=${room.number}`}
                className="inline-block px-6 py-3 rounded-card bg-clay text-white text-sm font-semibold hover:bg-opacity-90 transition-all"
              >
                Book this room →
              </Link>
            </div>
          </div>
             </div>
     </>
  );
};

export default EachRoom;
