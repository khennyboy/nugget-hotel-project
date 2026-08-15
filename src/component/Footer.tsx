import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

interface GuestFooterProps {
  rightText?: string;
}

export default function Footer({
  rightText = "Birnin Kebbi · Lagos (opening) · Kaduna (opening)",
}: GuestFooterProps) {
  return (
    <footer className="px-4 md:px-8 pt-16 pb-8 bg-ink text-sand text-[12.5px]">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="font-display text-xl font-semibold text-white mb-2">
            Nugget Continental
          </div>

          <p className="text-[#9EA2BE] leading-relaxed max-w-70 mb-5">
            Rooms, an in-house restaurant, and guided tours — one continental
            standard, across every Nugget branch.
          </p>

          <div className="flex gap-3.5">
            <a
              href="#"
              aria-label="Instagram"
              className="text-[#C9CBDA] hover:text-brassLight transition-colors"
            >
              <FiInstagram size={17} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="text-[#C9CBDA] hover:text-brassLight transition-colors"
            >
              <FiFacebook size={17} />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="text-[#C9CBDA] hover:text-brassLight transition-colors"
            >
              <FiTwitter size={17} />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-brassLight mb-4">
            Explore
          </div>

          <div className="flex flex-col gap-3 *:justify-self-start">
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
          </div>
        </div>

        {/* Company */}
        <div>
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-brassLight mb-4">
            Company
          </div>

          <div className="flex flex-col gap-3 *:justify-self-start">
            <a
              href="#"
              className="text-[#C9CBDA] hover:text-white transition-colors"
            >
              About us
            </a>

            <a
              href="#"
              className="text-[#C9CBDA] hover:text-white transition-colors"
            >
              Careers
            </a>

            <a
              href="#"
              className="text-[#C9CBDA] hover:text-white transition-colors"
            >
              Contact
            </a>

            <a
              href="#"
              className="text-[#C9CBDA] hover:text-white transition-colors"
            >
              Privacy policy
            </a>

            <a
              href="#"
              className="text-[#C9CBDA] hover:text-white transition-colors"
            >
              Terms of service
            </a>
          </div>
        </div>

        {/* Get in touch */}
        <div>
          <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-brassLight mb-4">
            Get in touch
          </div>

          <div className="flex flex-col gap-3 text-[#C9CBDA]">
            <div className="flex items-start gap-2.5">
              <FiMapPin size={15} className="text-brassLight mt-0.5 shrink-0" />
              <span>Birnin Kebbi, Kebbi State, Nigeria</span>
            </div>

            <a
              href="tel:+2340000000000"
              className="flex items-center gap-2.5 hover:text-white transition-colors"
            >
              <FiPhone size={15} className="text-brassLight shrink-0" />
              <span>+234 000 000 0000</span>
            </a>

            <a
              href="mailto:stay@nuggetcontinental.com"
              className="flex items-center gap-2.5 hover:text-white transition-colors"
            >
              <FiMail size={15} className="text-brassLight shrink-0" />
              <span>stay@nuggetcontinental.com</span>
            </a>
          </div>

          <Link
            to="/book"
            className="inline-block mt-5 bg-brass text-[#241704] px-5 py-2.5 rounded-md text-[13px] font-semibold hover:bg-brassLight transition-colors"
          >
            Book now
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#4A5278] pt-5 flex flex-col md:flex-row md:justify-between gap-2 text-[#9EA2BE] text-center md:text-left">
        <div>
          © {new Date().getFullYear()} Nugget Continental Hotel &amp; Tours
        </div>

        <div>{rightText}</div>
      </div>
    </footer>
  );
}
