"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#experiences", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#tech-stack", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed z-50 bg-transparent top-0 right-0 left-0" id="navbar">
      <div
        className={`flex transition-all duration-300 bg-[#111111]/90 w-full max-w-2xl border-white/10 border rounded-full mt-4 mx-auto py-2 pr-2 pl-5 shadow-2xl shadow-black/50 backdrop-blur-xl items-center justify-between ${scrolled ? "border-white/15" : "border-white/10"}`}
      >


        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-neutral-400 hover:text-white transition-colors p-2"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="4" y1="8" x2="20" y2="8" /><line x1="4" y1="16" x2="20" y2="16" /></>
            )}
          </svg>
        </button>

        {/* CTA Button */}
        <a href="#contact" className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white rounded-full hover:bg-neutral-200 transition-all duration-300 group shadow-lg shadow-white/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
          </span>
          <span className="text-sm font-bold text-neutral-950">Available</span>
        </a>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl bg-[#111111]/95 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
          <div className="flex flex-col gap-3 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5">
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 mt-2 px-4 py-2.5 bg-white rounded-full text-neutral-950 font-bold text-sm justify-center">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
              </span>
              Available
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}