import { Link } from "react-router-dom";

interface GuestFooterProps {
  rightText?: string;
}

export default function GuestFooter({
  rightText = "Birnin Kebbi · Lagos (opening) · Kaduna (opening)",
}: GuestFooterProps) {
  return (
    <footer className="px-4 md:px-8 py-20 bg-ink text-sand text-[12.5px]">
      <div className="grid grid-cols-2  gap-2 mb-8 *:justify-self-start">
        <Link
          to="/"
          className="text-[#C9CBDA] hover:text-white transition-colors"
        >
          Home
        </Link>

        <Link
          to="/rooms"
          className="text-[#C9CBDA] hover:text-white transition-colors"
        >
          Rooms
        </Link>

        <Link
          to="/menu"
          className="text-[#C9CBDA] hover:text-white transition-colors"
        >
          Restaurant
        </Link>

        <Link
          to="/tours"
          className="text-[#C9CBDA] hover:text-white transition-colors"
        >
          Tours
        </Link>

        <a
          href="#"
          className="text-[#C9CBDA] hover:text-white transition-colors"
        >
          Gallery
        </a>

        <a
          href="#"
          className="text-[#C9CBDA] hover:text-white transition-colors"
        >
          Contact
        </a>

        <Link
          to="/book"
          className="bg-brass text-[#241704] px-5 py-2.5 rounded-md text-[13px] font-semibold hover:bg-brassLight transition-colors"
        >
          Book now
        </Link>
      </div>

      {/* Copyright and locations */}
      <div className="border-t border-[#4A5278] pt-5 text-center">
        <div>
          © {new Date().getFullYear()} Nugget Continental Hotel &amp; Tours
        </div>

        <div className="mt-1">{rightText}</div>
      </div>
    </footer>
  );
}
