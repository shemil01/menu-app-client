'use client'
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileNav from "./shared/MobileNav";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
      <header className="flex justify-between items-center p-6 bg-gray-900">
        <div className="flex items-center space-x-2">
          <span className="text-blue-400 text-2xl font-bold">DEEP NET</span>
          <span className="text-gray-400">SOFT</span>
        </div>
        <nav className="hidden md:block space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white">HOME</Link>
          <Link href="/menu" className="text-blue-400">MENU</Link>
          <Link href="/" className="text-gray-300 hover:text-white">MAKE A RESERVATION</Link>
          <Link href="/" className="text-gray-300 hover:text-white">CONTACT US</Link>
        </nav>

        <div className="md:hidden flex items-center">
          {menuOpen ? (
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
        <MobileNav setMenuOpen={setMenuOpen} menuOpen={menuOpen} />

      </header>
    );
  }
  