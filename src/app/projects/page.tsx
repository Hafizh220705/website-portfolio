import Link from "next/link";

const allProjects = [
  {
    title: "Decision Support System — Game Launch Strategy Optimization",
    description: "End-to-end analytics system using K-Means clustering, association rule mining, and regression analysis to generate data-driven market strategy recommendations via an interactive dashboard.",
    tags: ["ML", "Analytics", "Dashboard"],
    gradient: "from-[#1e1b4b] via-[#0f1016] to-[#020202]",
    accent: "violet",
  },
  {
    title: "Food Price Forecasting for Market Trend Analysis",
    description: "Multivariate forecasting pipeline on 443K+ food price records across 34 provinces using XGBoost and lag-based feature engineering. Achieved MAPE of 0.054.",
    tags: ["Forecasting", "XGBoost", "Python"],
    gradient: "from-[#022c22] via-[#05110d] to-[#020202]",
    accent: "emerald",
  },
  {
    title: 'Public Sentiment Analysis — "Whoosh" Corruption Issue',
    description: "Analyzed 900+ scraped YouTube comments using NLP. Compared fine-tuned IndoBERT and TF-IDF models, achieving 65.66% accuracy and 0.4527 Macro-F1 score.",
    tags: ["NLP", "IndoBERT", "Sentiment"],
    gradient: "from-[#1a1033] via-[#0f0d18] to-[#020202]",
    accent: "fuchsia",
  },
  {
    title: "Student Well-Being Clustering (Unsupervised Learning)",
    description: "Clustering pipeline using K-Means, Hierarchical Clustering, and DBSCAN to segment student well-being profiles and support data-driven intervention strategies.",
    tags: ["Clustering", "Scikit-learn", "EDA"],
    gradient: "from-[#0c1a2e] via-[#080f1a] to-[#020202]",
    accent: "blue",
  },
  {
    title: "[ADD_PROJECT_5_TITLE]",
    description: "[ADD_PROJECT_5_DESC]",
    tags: ["TAGS"],
    gradient: "from-[#1a1a0f] via-[#12120a] to-[#020202]",
    accent: "violet",
  },
  {
    title: "[ADD_PROJECT_6_TITLE]",
    description: "[ADD_PROJECT_6_DESC]",
    tags: ["TAGS"],
    gradient: "from-[#0f1a1a] via-[#0a1212] to-[#020202]",
    accent: "emerald",
  },
  {
    title: "Project 7",
    description: "Project description placeholder — replace with your actual project details.",
    tags: ["Tag1", "Tag2"],
    gradient: "from-[#1a0f1a] via-[#120a12] to-[#020202]",
    accent: "fuchsia",
  },
  {
    title: "Project 8",
    description: "Project description placeholder — replace with your actual project details.",
    tags: ["Tag1", "Tag2"],
    gradient: "from-[#0f0f1a] via-[#0a0a12] to-[#020202]",
    accent: "blue",
  },
];

const accentDot: Record<string, string> = {
  violet: "bg-violet-500",
  emerald: "bg-emerald-500",
  fuchsia: "bg-fuchsia-500",
  blue: "bg-blue-500",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen relative z-10">
      <div className="mx-auto max-w-5xl px-6 pt-32 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">All Projects</h1>
            <p className="mt-2 text-neutral-400 text-sm">Every project I&apos;ve built and shipped.</p>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-700 text-neutral-300 rounded-full font-semibold text-sm hover:border-neutral-500 hover:text-white transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
            Back
          </Link>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, idx) => (
            <div key={idx} className="group hover:border-white/10 transition-all duration-300 bg-[#121212] border-white/5 border rounded-[28px] p-2 relative shadow-2xl">
              <div className={`relative aspect-[16/10] w-full bg-gradient-to-br ${project.gradient} rounded-[20px] overflow-hidden flex items-center justify-center`}>
                <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-${project.accent}-500/10 via-transparent to-transparent opacity-40`} />
                <div className={`w-10 h-10 rounded-full ${accentDot[project.accent]} shadow-lg opacity-60`} />
              </div>
              <div className="px-3 pt-4 pb-3 flex flex-col gap-3">
                <h3 className="text-sm font-medium text-white tracking-tight leading-snug line-clamp-2">{project.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex gap-1.5 flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-bold tracking-wider text-neutral-400 bg-white/[0.06] border border-white/[0.05] px-2 py-1 rounded uppercase">{tag}</span>
                  ))}
                </div>
                <a href="https://github.com/Hafizh220705" target="_blank" rel="noopener noreferrer" className="group/btn flex items-center justify-center gap-2 w-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/10 text-neutral-300 hover:text-white transition-all px-3 py-2 rounded-xl text-xs font-medium">
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
