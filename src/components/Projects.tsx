const projects = [
  {
    title: "Decision Support System — Game Launch Strategy",
    description: "End-to-end analytics system using K-Means clustering, association rule mining, and regression analysis to generate data-driven market strategy recommendations via an interactive dashboard.",
    tags: ["ML", "Analytics", "Dashboard"],
    gradient: "from-[#1e1b4b] via-[#0f1016] to-[#020202]",
    accent: "violet",
    visual: "chart",
  },
  {
    title: "Food Price Forecasting for Market Trend Analysis",
    description: "Multivariate forecasting pipeline on 443K+ food price records across 34 provinces using XGBoost and lag-based feature engineering. Achieved MAPE of 0.054.",
    tags: ["Forecasting", "XGBoost", "Python"],
    gradient: "from-[#022c22] via-[#05110d] to-[#020202]",
    accent: "emerald",
    visual: "trend",
  },
  {
    title: 'Public Sentiment Analysis — "Whoosh" Corruption Issue',
    description: "Analyzed 900+ scraped YouTube comments using NLP. Compared fine-tuned IndoBERT and TF-IDF models, achieving 65.66% accuracy and 0.4527 Macro-F1 score.",
    tags: ["NLP", "IndoBERT", "Sentiment"],
    gradient: "from-[#1a1033] via-[#0f0d18] to-[#020202]",
    accent: "fuchsia",
    visual: "nlp",
  },
  {
    title: "Student Well-Being Clustering (Unsupervised Learning)",
    description: "Clustering pipeline using K-Means, Hierarchical Clustering, and DBSCAN to segment student well-being profiles and support data-driven intervention strategies.",
    tags: ["Clustering", "Scikit-learn", "EDA"],
    gradient: "from-[#0c1a2e] via-[#080f1a] to-[#020202]",
    accent: "blue",
    visual: "cluster",
  },
];

function ProjectVisual({ type, accent }: { type: string; accent: string }) {
  const accentColors: Record<string, string> = {
    violet: "bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.4)]",
    emerald: "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    fuchsia: "bg-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.4)]",
    blue: "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]",
  };

  const radialMap: Record<string, string> = {
    violet: "from-violet-500/10",
    emerald: "from-emerald-500/10",
    fuchsia: "from-fuchsia-500/10",
    blue: "from-blue-500/10",
  };

  if (type === "trend") {
    return (
      <>
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] ${radialMap[accent]} via-transparent to-transparent opacity-50`} />
        <div className="relative flex items-end gap-2 h-32">
          {[40, 55, 35, 65, 50, 80, 70, 90].map((h, i) => (
            <div key={i} className={`w-5 rounded-t-sm ${accentColors[accent]?.split(" ")[0]} opacity-${20 + i * 10}`} style={{ height: `${h}%`, opacity: 0.3 + i * 0.08 }} />
          ))}
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 200 100" fill="none" preserveAspectRatio="none">
            <path d="M0 80 Q40 60 80 50 T160 30 T200 20" stroke="rgba(16,185,129,0.5)" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </>
    );
  }

  if (type === "nlp") {
    return (
      <>
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${radialMap[accent]} via-transparent to-transparent opacity-50`} />
        <div className="relative flex flex-wrap gap-2 justify-center items-center">
          {["Positif", "Negatif", "Netral", "NLP", "BERT"].map((w, i) => (
            <span key={i} className={`px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 ${i < 2 ? "bg-white/[0.06] text-fuchsia-300" : "bg-white/[0.03] text-neutral-400"}`}>
              {w}
            </span>
          ))}
        </div>
      </>
    );
  }

  if (type === "cluster") {
    return (
      <>
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] ${radialMap[accent]} via-transparent to-transparent opacity-50`} />
        <div className="relative flex items-center justify-center">
          <div className="relative w-36 h-36">
            {[
              { x: 20, y: 15, s: 6, o: 0.8 }, { x: 30, y: 25, s: 5, o: 0.6 }, { x: 15, y: 35, s: 4, o: 0.7 },
              { x: 70, y: 60, s: 7, o: 0.8 }, { x: 80, y: 70, s: 5, o: 0.6 }, { x: 65, y: 75, s: 4, o: 0.5 },
              { x: 50, y: 20, s: 5, o: 0.4 }, { x: 85, y: 25, s: 6, o: 0.7 }, { x: 90, y: 35, s: 4, o: 0.5 },
            ].map((dot, i) => (
              <div key={i} className={`absolute rounded-full ${i < 3 ? "bg-blue-400" : i < 6 ? "bg-blue-600" : "bg-blue-300"}`} style={{ left: `${dot.x}%`, top: `${dot.y}%`, width: dot.s, height: dot.s, opacity: dot.o }} />
            ))}
          </div>
        </div>
      </>
    );
  }

  // Default chart
  return (
    <>
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] ${radialMap[accent]} via-transparent to-transparent opacity-50`} />
      <div className="relative w-3/4 h-3/4 bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/[0.05] p-6 flex flex-col gap-5 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
        <div className={`w-12 h-12 rounded-full ${accentColors[accent]}`} />
        <div className="space-y-3 mt-2">
          <div className="h-2.5 w-1/2 bg-white/10 rounded-full" />
          <div className="h-2.5 w-1/3 bg-white/10 rounded-full" />
        </div>
      </div>
    </>
  );
}

export default function Projects() {
  const tagColors: Record<string, string> = {
    violet: "text-violet-300",
    emerald: "text-emerald-300",
    fuchsia: "text-fuchsia-300",
    blue: "text-blue-300",
  };

  return (
    <section className="mb-32" id="projects">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-xl font-semibold text-neutral-100 tracking-tight flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
          Selected Projects
        </h2>
        <a href="/projects" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors flex items-center gap-1.5 group">
          More Projects
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-0.5 transition-transform" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="group hover:border-white/10 transition-all duration-300 bg-[#121212] border-white/5 border rounded-[32px] p-2.5 relative shadow-2xl">
            <div className={`relative aspect-[16/11] w-full bg-gradient-to-br ${project.gradient} rounded-[24px] overflow-hidden flex items-center justify-center`}>
              <ProjectVisual type={project.visual} accent={project.accent} />
            </div>
            <div className="px-3 pt-5 pb-3 flex flex-col gap-4">
              <div className="flex items-start justify-between w-full gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-white mb-1.5 tracking-tight leading-snug">{project.title}</h3>
                  <p className="text-sm text-neutral-500 font-medium leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold tracking-wider text-neutral-400 bg-white/[0.06] border border-white/[0.05] px-2.5 py-1.5 rounded-md uppercase">{tag}</span>
                  ))}
                </div>
              </div>
              <a href="https://github.com/Hafizh220705" target="_blank" rel="noopener noreferrer" className="group/btn flex items-center justify-center gap-2 w-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/10 text-neutral-300 hover:text-white transition-all px-4 py-2.5 rounded-xl text-sm font-medium">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
