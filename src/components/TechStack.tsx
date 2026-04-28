"use client";

import { useEffect, useRef, useState } from "react";

const categories = [
  {
    title: "Data Analysis",
    icon: "solar:chart-bold",
    color: "fuchsia",
    items: [
      { name: "EDA", icon: "solar:chart-square-bold" },
      { name: "Hypothesis Testing", icon: "solar:test-tube-bold" },
      { name: "Statistical Analysis", icon: "solar:graph-up-bold" },
      { name: "Trend Analysis", icon: "solar:chart-2-bold" },
    ],
  },
  {
    title: "Programming & Tools",
    icon: "solar:code-square-bold",
    color: "blue",
    items: [
      { name: "Python (Pandas, NumPy)", icon: "logos:python" },
      { name: "SQL (Advanced)", icon: "devicon:azuresqldatabase" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "Jupyter / Colab", icon: "logos:jupyter" },
    ],
  },
  {
    title: "Machine Learning",
    icon: "solar:cpu-bolt-bold",
    color: "pink",
    items: [
      { name: "Scikit-learn", icon: "simple-icons:scikitlearn" },
      { name: "XGBoost", icon: "solar:cpu-bold" },
      { name: "NLP (IndoBERT, TF-IDF)", icon: "solar:text-bold" },
      { name: "Clustering (K-Means, DBSCAN)", icon: "solar:atom-bold" },
    ],
  },
  {
    title: "Visualization & BI",
    icon: "solar:graph-bold",
    color: "emerald",
    items: [
      { name: "Power BI", icon: "logos:microsoft-power-bi" },
      { name: "Matplotlib / Seaborn", icon: "solar:chart-square-bold" },
      { name: "Streamlit", icon: "logos:streamlit" },
      { name: "Microsoft Excel", icon: "vscode-icons:file-type-excel" },
    ],
  },
];

const cm: Record<string, { ib: string; ib2: string; it: string; hb: string; d: string }> = {
  fuchsia: { ib: "bg-fuchsia-500/10", ib2: "border-fuchsia-500/20", it: "text-fuchsia-400", hb: "hover:border-fuchsia-500/30", d: "bg-fuchsia-500" },
  blue: { ib: "bg-blue-500/10", ib2: "border-blue-500/20", it: "text-blue-400", hb: "hover:border-blue-500/30", d: "bg-blue-500" },
  pink: { ib: "bg-pink-500/10", ib2: "border-pink-500/20", it: "text-pink-400", hb: "hover:border-pink-500/30", d: "bg-pink-500" },
  emerald: { ib: "bg-emerald-500/10", ib2: "border-emerald-500/20", it: "text-emerald-400", hb: "hover:border-emerald-500/30", d: "bg-emerald-500" },
};

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section className="mb-32 relative" id="tech-stack" ref={sectionRef}>
      <div className="flex flex-col mb-10">
        <h2 className="text-xl font-semibold text-neutral-100 tracking-tight flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-fuchsia-400" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
          Technical Skills
        </h2>
        <p className="text-neutral-500 mt-2 text-sm ml-7">Tools and technologies I use to turn data into decisions.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, idx) => {
          const c = cm[cat.color] || cm.fuchsia;
          return (
            <div
              key={cat.title}
              className={`group p-6 rounded-2xl border border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/40 ${c.hb} transition-all duration-700`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(60px)",
                transitionDelay: `${idx * 150}ms`,
              }}
            >
              <div className={`w-10 h-10 rounded-lg ${c.ib} flex items-center justify-center ${c.it} mb-4 border ${c.ib2}`}>
                {/* @ts-expect-error iconify web component */}
                <iconify-icon icon={cat.icon} width="20" />
              </div>
              <h3 className="text-neutral-200 font-medium mb-4">{cat.title}</h3>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-2.5 text-sm text-neutral-400">
                    {/* @ts-expect-error iconify web component */}
                    <iconify-icon icon={item.icon} width="16" height="16" class="flex-shrink-0 opacity-70" />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
