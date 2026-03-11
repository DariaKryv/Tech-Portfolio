"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed z-50 top-0 w-full bg-black/50">
      {/* Top Phone Bar */}
      <div className="bg-gray-500/10 backdrop-blur text-sm">
        <div className="max-w-6xl mx-auto flex justify-end items-center px-4 pt-3">
          <div className="flex items-center gap-2 text-gray-300">
            <Phone className="text-green-500" size={16} />
            <a href="tel:+31627586965" className="hover:text-white">
              +31 6 27 58 69 65
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-gray-500/10 backdrop-blur">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-green-500">
            MEGOKRUTO
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-gray-200">
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 py-6 border-t border-gray-600/30 bg-gray-500/10 backdrop-blur">
          <Link
            className=" hover:text-white"
            href="/about"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            className=" hover:text-white"
            href="/portfolio"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            className=" hover:text-white"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
