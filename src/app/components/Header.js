import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-primary fixed w-full border-b shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <div className="w-14 h-14 relative">
          <Image
             src="/fabric.avif"
             alt="Amrita Global Enterprises Logo"
              fetchPriority="high"
             loading="eager"
             priority={true} 
             sizes="56px"
             width={400}
             height={600}
             className="w-full h-full object-contain"
             />
          </div>

          <div className="leading-tight text-center sm:text-left">
            <h1 className="font-extrabold text-lg text-gray-800">Amrita Global Enterprises</h1>
          </div>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden flex flex-col relative">
          <input id="nav-toggle" type="checkbox" className="peer hidden" />
          <label htmlFor="nav-toggle" className="cursor-pointer block" aria-label="Toggle menu">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          {/* Mobile Full-Width Dropdown Menu */}
          <div className="peer-checked:flex hidden absolute top-12 right-2 min-w-[250px] w-fit flex-col gap-4 px-6 py-6 bg-white border border-gray-200 text-gray-700 font-medium shadow-xl rounded-md z-40">
            <nav className="flex flex-col gap-4">
              <a href="#about" className="hover:text-teal-700 transition">About</a>
              <a href="#product" className="hover:text-teal-700 transition">Product</a>
              <a href="#contact" className="hover:text-teal-700 transition">Contact</a>
            </nav>

            <hr className="border-t border-gray-200 my-2" />

            <a
              href="/brochure.pdf"
              download
              className="inline-flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-full max-w-[200px] font-semibold hover:bg-teal-600 transition"
            >
              <span>📄</span> PDF
            </a>

            <div className="flex items-center gap-3 text-sm mt-2">
              <div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center text-white">📞</div>
              <div>
                <p className="text-gray-500 leading-none">Support</p>
                <p className="font-bold text-gray-800 leading-none">+91-9913140434</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between">
          <nav className="hidden sm:flex gap-6 text-gray-700 font-medium">
            <a href="#about" className="hover:text-teal-700 transition">About</a>
            <a href="#product" className="hover:text-teal-700 transition">Product</a>
            <a href="#contact" className="hover:text-teal-700 transition">Contact</a>
          </nav>
        </div>

        {/* PDF + Support Desktop */}
        <div className="hidden md:flex items-center justify-center gap-10">
          <a
            href="/brochure.pdf"
            download
            className="inline-block bg-teal-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-teal-600 transition"
          >
            📄 PDF
          </a>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center text-white text-base">📞</div>
            <div>
              <p className="text-gray-500">Support</p>
              <p className="font-bold text-gray-800">+91-9913140434</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
