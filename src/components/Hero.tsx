"use client";

import { useEffect, useMemo, useState } from "react";

export default function Hero() {
  // const roles = useMemo(
  //   () => ["Data Scientist", "Data Analyst", "ML Engineer", "BI Developer"],
  //   []
  // );

  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // useEffect(() => {
  //   const fullText = roles[roleIndex];
  //   const typingSpeed = isDeleting ? 35 : 55;
  //   const pauseAfterTyped = 1400;

  //   const timer = setTimeout(() => {
  //     if (!isDeleting) {
  //       const next = fullText.slice(0, typed.length + 1);
  //       setTyped(next);
  //       if (next === fullText) {
  //         setTimeout(() => setIsDeleting(true), pauseAfterTyped);
  //       }
  //     } else {
  //       const next = fullText.slice(0, typed.length - 1);
  //       setTyped(next);
  //       if (next === "") {
  //         setIsDeleting(false);
  //         setRoleIndex((i) => (i + 1) % roles.length);
  //       }
  //     }
  //   }, typingSpeed);

  //   return () => clearTimeout(timer);
  // }, [typed, isDeleting, roleIndex, roles]);

  return (
    <section className="min-h-[80vh] flex items-center mb-8 relative" id="hero">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        {/* Left: Text */}
        <div className="flex-1 max-w-2xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-400 font-medium mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600" />
            </span>
            Available for new opportunities
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6">
            I Transform Data into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Actionable Insights
            </span>{" "}
            that Drive Smarter Business Decisions.
          </h1>

          {/* Typing Subtitle */}
          {/* <div className="text-lg text-neutral-400 mb-3 h-8 flex items-center">
            <span className="text-neutral-500 mr-2">→</span>
            <span className="text-violet-300/80 font-medium">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] bg-violet-400/60 animate-pulse" />
          </div> */}

          {/* Description */}
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            Computer Science student at Universitas Padjadjaran specializing in Data Scientist and Data Analytics — transforming complex data into actionable insights and smarter business decisions.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-950 rounded-full font-semibold text-sm hover:bg-neutral-200 transition-all duration-300 shadow-lg shadow-white/10"
            >
              View Portfolio
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <a
              href="https://drive.google.com/file/d/1JVfNreqjd4LQPe2W0Lbo2MT8z1VHYQT-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full font-semibold text-sm hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg shadow-violet-500/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
              Download CV
            </a>
            <a
              href="https://wa.me/6282290764213"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 text-neutral-300 rounded-full font-semibold text-sm hover:border-neutral-500 hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              WhatsApp Me
            </a>
          </div>
        </div>

        {/* Right: Profile Card */}
        <div className="relative flex-shrink-0">
          <div className="relative w-[280px] rounded-[24px] overflow-hidden border border-white/10 bg-neutral-900/60 backdrop-blur-sm shadow-2xl shadow-violet-500/10 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Hafizh Fadhl Muhammad"
              className="w-full rounded-[16px] object-cover aspect-[3/4]"
            />
            <div className="mt-3 px-1">
              <p className="text-white font-semibold text-sm">Hafizh Fadhl Muhammad</p>
              <p className="text-neutral-400 text-xs flex items-center gap-1.5 mt-0.5">
                <span className="text-sm leading-none">📍</span> Bandung, Indonesia
              </p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}