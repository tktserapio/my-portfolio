"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex items-center justify-between">
      {/* Left side */}
      <div>
        <Link href="/" className="text-xl font-bold">
          Tyrone Serapio
        </Link>
      </div>

      {/* Right side */}
      <div className="flex space-x-6">
        <Link href="#hero" className="hover:text-blue-600">
          About
        </Link>
        <Link href="#publications" className="hover:text-blue-600">
          Research
        </Link>
        <Link href="#projects" className="hover:text-blue-600">
          Projects
        </Link>
      </div>
    </nav>
  );
}
