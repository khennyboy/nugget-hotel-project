import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Nav() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 md:px-8 shadow-[0_4px_10px_rgba(0,0,0,0.35)] py-3 bg-ink text-sand">
      <div className="flex grow items-center">
        <img
          src="/nugget-logo.webp"
          alt="nugget_company_logo"
          className="w-8 aspect-square object-contain"
        />

        <Link
          to="/"
          className="font-display font-semibold  tracking-tight leading-[1.1] "
        >
          Nugget{" "}
          <span className="text-brassLight">
            <br />
            Continental
          </span>
        </Link>
      </div>

      {/* Mobile menu button */}
      <HiBars3BottomLeft
        className="size-6 md:hidden cursor-pointer"
        onClick={() => setOpenNav(true)}
      />

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center justify-evenly gap-6 text-[13.5px] font-medium grow-2">
        <Link to="/rooms" className="text-[#C9CBDA] hover:text-white">
          Rooms
        </Link>

        <Link to="/menu" className="text-[#C9CBDA] hover:text-white">
          Restaurant
        </Link>

        <Link to="/tours" className="text-[#C9CBDA] hover:text-white">
          Tours
        </Link>

        <a href="#" className="text-[#C9CBDA] hover:text-white">
          Gallery
        </a>

        <a href="#" className="text-[#C9CBDA] hover:text-white">
          Contact
        </a>

        <Link
          to="/book"
          className="bg-brass text-[#241704] px-5 py-2.5 rounded-md text-[13px] font-semibold hover:bg-brassLight transition-colors"
        >
          Book now
        </Link>
      </div>
      {/* Mobile Nav */}
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.4,
              scale: {
                type: "spring",
                visualDuration: 0.2,
                bounce: 0.2,
              },
            }}
            className="fixed inset-0 bg-brass min-h-dvh z-40 overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4 pt-10 p-6 font-medium items-start">
              <Link to="/rooms" onClick={() => setOpenNav(false)}>
                Rooms
              </Link>

              <Link to="/menu" onClick={() => setOpenNav(false)}>
                Restaurant
              </Link>

              <Link to="/tours" onClick={() => setOpenNav(false)}>
                Tours
              </Link>

              <a href="#" onClick={() => setOpenNav(false)}>
                Gallery
              </a>

              <a href="#" onClick={() => setOpenNav(false)}>
                Contact
              </a>

              <Link
                to="/book"
                onClick={() => setOpenNav(false)}
                className="bg-primary-light text-brass px-6.5 py-3.5 rounded-md font-semibold text-sm  transition-colors"
              >
                Book now
              </Link>
            </div>

            <FaTimes
              className="size-8 absolute right-6 top-6 cursor-pointer"
              onClick={() => setOpenNav(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
