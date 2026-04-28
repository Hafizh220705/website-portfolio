"use client";

import { useEffect, useRef, useState } from "react";

const categories = [
  {
    title: "Data Analysis & Analytics",
    icon: "solar:chart-bold",
    color: "fuchsia",
    items: [
      { name: "Exploratory Data Analysis (EDA)", icon: "solar:chart-square-bold" },
      { name: "Statistical Hypothesis Testing", icon: "solar:test-tube-bold" },
      { name: "Quantitative Analysis", icon: "solar:graph-up-bold" },
      { name: "Trend & Pattern Analysis", icon: "solar:chart-2-bold" },
      { name: "Data Cleaning & Preprocessing", icon: "solar:filter-bold" },
      { name: "Data Validation & Transformation", icon: "solar:check-circle-bold" },
      { name: "Data-Driven Decision Making", icon: "solar:lightbulb-bolt-bold" },
      { name: "Business Insights & Reporting", icon: "solar:document-bold" },
      { name: "KPI & Performance Analysis", icon: "solar:target-bold" },
      { name: "Customer Segmentation Analysis", icon: "solar:users-group-rounded-bold" },
    ],
  },
  {
    title: "Programming & Databases",
    icon: "solar:code-square-bold",
    color: "blue",
    items: [
      { name: "Python (Pandas, NumPy)", icon: "logos:python" },
      { name: "SQL (Joins, Subqueries, Window Functions)", icon: "devicon:azuresqldatabase" },
      { name: "Jupyter Notebook / Google Colab", icon: "logos:jupyter" },
      { name: "Git & GitHub", icon: "logos:git-icon" },
      { name: "REST API Integration", icon: "solar:code-bold" },
      { name: "Supabase", icon: "logos:supabase-icon" },
      { name: "Next.js API Routes", icon: "logos:nextjs-icon" },
    ],
  },
  {
    title: "Machine Learning & AI",
    icon: "solar:cpu-bolt-bold",
    color: "pink",
    items: [
      { name: "Scikit-learn", icon: "simple-icons:scikitlearn" },
      { name: "XGBoost", icon: "simple-icons:xgboost" },
      { name: "Supervised Learning", icon: "solar:graph-up-bold" },
      { name: "Unsupervised Learning", icon: "solar:atom-bold" },
      { name: "Classification & Regression", icon: "solar:sort-vertical-bold" },
      { name: "Clustering (K-Means, DBSCAN, Hierarchical)", icon: "solar:chart-2-bold" },
      { name: "Time-Series Forecasting", icon: "solar:graph-bold" },
      { name: "Feature Engineering", icon: "solar:settings-bold" },
      { name: "Predictive Modeling", icon: "solar:cpu-bold" },
      { name: "NLP (IndoBERT, TF-IDF)", icon: "solar:text-bold" },
      { name: "Model Evaluation (LOSO, LOVO)", icon: "solar:check-square-bold" },
    ],
  },
  {
    title: "Visualization & BI",
    icon: "solar:graph-bold",
    color: "emerald",
    items: [
      { name: "Power BI", icon: "logos:microsoft-power-bi" },
      { name: "Microsoft Excel", icon: "vscode-icons:file-type-excel" },
      { name: "Matplotlib", icon: "solar:chart-square-bold" },
      { name: "Seaborn", icon: "solar:chart-2-bold" },
      { name: "Streamlit", icon: "logos:streamlit" },
      { name: "Dashboard Development", icon: "solar:widget-bold" },
      { name: "Data Storytelling", icon: "solar:book-bold" },
      { name: "Business Intelligence Reporting", icon: "solar:document-bold" },
      { name: "Interactive Data Visualization", icon: "solar:monitor-bold" },
    ],
  },
  {
    title: "Software & Backend Dev",
    icon: "solar:server-bold",
    color: "amber",
    items: [
      { name: "Backend Development", icon: "solar:server-square-bold" },
      { name: "RESTful API Development", icon: "solar:code-bold" },
      { name: "Auth & Role-Based Access Control", icon: "solar:lock-bold" },
      { name: "Database Management", icon: "solar:database-bold" },
      { name: "Server-Side Optimization", icon: "solar:rocket-bold" },
      { name: "System Integration", icon: "solar:link-bold" },
      { name: "Technical Problem Solving", icon: "solar:lightbulb-bold" },
    ],
  },
];

const cm: Record<string, { ib: string; ib2: string; it: string; hb: string; d: string }> = {
  fuchsia: { ib: "bg-fuchsia-500/10", ib2: "border-fuchsia-500/20", it: "text-fuchsia-400", hb: "hover:border-fuchsia-500/30", d: "bg-fuchsia-500" },
  blue: { ib: "bg-blue-500/10", ib2: "border-blue-500/20", it: "text-blue-400", hb: "hover:border-blue-500/30", d: "bg-blue-500" },
  pink: { ib: "bg-pink-500/10", ib2: "border-pink-500/20", it: "text-pink-400", hb: "hover:border-pink-500/30", d: "bg-pink-500" },
  emerald: { ib: "bg-emerald-500/10", ib2: "border-emerald-500/20", it: "text-emerald-400", hb: "hover:border-emerald-500/30", d: "bg-emerald-500" },
  amber: { ib: "bg-amber-500/10", ib2: "border-amber-500/20", it: "text-amber-400", hb: "hover:border-amber-500/30", d: "bg-amber-500" },
};

const COLLAPSED_COUNT = 5;

function SkillCard({ cat, idx, visible }: { cat: typeof categories[number]; idx: number; visible: boolean }) {
  const c = cm[cat.color] || cm.fuchsia;
  const [expanded, setExpanded] = useState(false);
  const showToggle = cat.items.length > COLLAPSED_COUNT;
  const displayItems = expanded ? cat.items : cat.items.slice(0, COLLAPSED_COUNT);
  const hiddenCount = cat.items.length - COLLAPSED_COUNT;

  return (
    <div
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
      <ul className="space-y-2">
        {displayItems.map((item) => (
          <li key={item.name} className="flex items-center gap-2.5 text-sm text-neutral-400">
            {/* @ts-expect-error iconify web component */}
            <iconify-icon icon={item.icon} width="15" height="15" class="flex-shrink-0 opacity-70" />
            <span className="leading-snug">{item.name}</span>
          </li>
        ))}
      </ul>
      {showToggle && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors flex items-center gap-1 cursor-pointer"
        >
          {expanded ? (
            <>
              Show less
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
            </>
          ) : (
            <>
              +{hiddenCount} more
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {categories.map((cat, idx) => (
          <div key={cat.title} className={`w-full ${idx >= 3 ? "md:col-span-1" : ""}`}>
            <SkillCard cat={cat} idx={idx} visible={visible} />
          </div>
        ))}
      </div>
    </section>
  );
}
