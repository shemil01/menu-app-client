import Link from "next/link";
import React from "react";
import { FaTimes } from "react-icons/fa";


export interface MobileNavProps {
    setMenuOpen: (isOpen: boolean) => void;
    menuOpen: boolean;
  }
const MobileNav: React.FC<MobileNavProps> = ({ setMenuOpen, menuOpen }) => {
  return (
    <div
      className={`md:hidden fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col  transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute top-10 right-5 text-2xl text-white"
        onClick={() => setMenuOpen(false)}
      >
        <FaTimes />
      </button>
      <ul className="space-y-6 text-lg text-white px-10 pt-20">
        <li className="cursor-pointer">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link href={"/"}>Menu</Link>
        </li>
        <li className="cursor-pointer">MAKE A RESERVATION</li>

        <li className="cursor-pointer">CONTACT US</li>
      </ul>
    </div>
  );
};

export default MobileNav;
