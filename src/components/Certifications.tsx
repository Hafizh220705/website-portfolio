"use client";

import { useRef, useState, useEffect } from "react";

const certifications = [
  { title: "Microsoft Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft / LinkedIn Learning", date: "Apr 2026", color: "violet", icon: "logos:microsoft-power-bi" },
  { title: "SQL Advanced Certificate", issuer: "HackerRank", date: "Feb 2026", color: "emerald", icon: "simple-icons:hackerrank" },
  { title: "Python For Data Science", issuer: "MySkill", date: "Jan 2026", color: "blue", icon: "logos:python" },
  { title: "Data Science Fundamental", issuer: "DQLab", date: "Jan 2024", color: "fuchsia", icon: "solar:database-bold" },
  { title: "Python Fundamental For Data Science", issuer: "DQLab", date: "Jan 2024", color: "violet", icon: "logos:python" },
  { title: "Alibaba Cloud Certificate", issuer: "Alibaba Cloud", date: "Mar 2024", color: "emerald", icon: "logos:alibaba-cloud" },
  { title: "Data Science Intermediate", issuer: "Coding Studio", date: "Jan 2023", color: "blue", icon: "solar:chart-bold" },
];

const dotColors: Record<string, string> = { violet: "bg-violet-500", emerald: "bg-emerald-500", blue: "bg-blue-500", fuchsia: "bg-fuchsia-500" };
const borderColors: Record<string, string> = { violet: "hover:border-violet-500/30", emerald: "hover:border-emerald-500/30", blue: "hover:border-blue-500/30", fuchsia: "hover:border-fuchsia-500/30" };

export default function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [visible, setVisible] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="mb-32 relative" id="certifications" ref={sectionRef}>
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-xl font-semibold text-neutral-100 tracking-tight flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
          Certifications
        </h2>
        <div className="flex items-center gap-2">
          <button onClick={() => scroll("left")} disabled={!canScrollLeft} className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900/50 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all" aria-label="Scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button onClick={() => scroll("right")} disabled={!canScrollRight} className="w-8 h-8 rounded-full border border-neutral-800 bg-neutral-900/50 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all" aria-label="Scroll right">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[300px] p-5 rounded-2xl border border-neutral-800 bg-neutral-900/20 backdrop-blur-sm ${borderColors[cert.color]} transition-all duration-700 group`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(60px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                {/* Platform Icon */}
                <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center mt-0.5">
                  {/* @ts-expect-error iconify web component */}
                  <iconify-icon icon={cert.icon} width="20" height="20" />
                </div>
                <h3 className="text-sm font-medium text-neutral-200 leading-snug group-hover:text-white transition-colors">{cert.title}</h3>
              </div>
              <div className="flex items-center justify-between ml-10">
                <span className="text-xs text-neutral-500">{cert.issuer}</span>
                <span className="text-[10px] font-mono text-neutral-600 bg-neutral-950/50 px-2 py-0.5 rounded border border-neutral-800/50">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
