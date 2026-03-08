"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-xl">
          Megokruto
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-200">
          <Link href="/about">About</Link>
          <Link href="/services">Portfolio</Link>

          <Link href="/contact">Contact</Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 p-4 border-t">
          <Link href="/work" onClick={() => setOpen(false)}>
            Work
          </Link>

          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
