export default function ExperienceSection() {
  const experiences = [
    {
      title: "Freelance Data Analyst",
      company: "Self-Employed (Remote)",
      period: "Jan 2026 — Present",
      description: "Executed end-to-end analytics workflows for 10+ projects on datasets exceeding 100K+ records. Performed statistical hypothesis testing, built complex SQL queries, and created Power BI dashboards for data storytelling and business insights.",
      color: "violet",
    },
    {
      title: "Back End Developer",
      company: "ElevatEd Indonesia (Remote Internship)",
      period: "Aug 2025 — Dec 2025",
      description: "Developed and maintained backend services for an AI-powered learning platform. Built and optimized RESTful APIs, integrated Supabase for authentication and database management, and collaborated with cross-functional teams for smooth backend–frontend integration.",
      color: "emerald",
    },
    {
      title: "Data Scientist Intern",
      company: "PIPP, Universitas Padjadjaran",
      period: "Sep 2025 — Dec 2025",
      description: "Analyzed 1,000+ EEG signal segments using preprocessing and feature extraction. Developed and evaluated 5+ ML models (SVM, XGBoost) with LOSO/LOVO validation, improving model performance by 15–30%.",
      color: "blue",
    },
    {
      title: "Laboratory Teaching Assistant",
      company: "Universitas Padjadjaran",
      period: "Feb 2025 — Dec 2025",
      description: "Facilitated lab sessions for 100+ students in Database Systems, Web Programming, and OOP. Evaluated 250+ assignments and mentored students in SQL, database integration, and problem-solving.",
      color: "fuchsia",
    },
    {
      title: "Data Scientist (Project-Based)",
      company: "ID/X Partners (Remote)",
      period: "Jan 2025 — Feb 2025",
      description: "Analyzed 466K+ financial loan records using EDA and preprocessing to identify borrower risk patterns. Evaluated 6 predictive models (XGBoost, Random Forest) for credit risk assessment.",
      color: "violet",
    },
    {
      title: "IT Developer",
      company: "Unpad Luhung (On-site, Jatinangor)",
      period: "Jul 2025 — Dec 2025",
      description: "Contributed to IT development initiatives at Universitas Padjadjaran's innovation unit, supporting digital systems and technology solutions.",
      color: "emerald",
    },
  ];

  const colorMap: Record<string, { dot: string; text: string; glow: string }> = {
    violet: { dot: "group-hover:bg-violet-500", text: "group-hover:text-violet-300", glow: "group-hover:shadow-[0_0_0_4px_rgba(139,92,246,0.2)]" },
    emerald: { dot: "group-hover:bg-emerald-500", text: "group-hover:text-emerald-300", glow: "group-hover:shadow-[0_0_0_4px_rgba(16,185,129,0.2)]" },
    blue: { dot: "group-hover:bg-blue-500", text: "group-hover:text-blue-300", glow: "group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" },
    fuchsia: { dot: "group-hover:bg-fuchsia-500", text: "group-hover:text-fuchsia-300", glow: "group-hover:shadow-[0_0_0_4px_rgba(217,70,239,0.2)]" },
  };

  return (
    <section className="mb-32 relative p-8 md:p-12 rounded-[32px] border border-white/5 bg-neutral-900/20 backdrop-blur-md overflow-hidden shadow-2xl" id="experiences">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <h2 className="relative flex items-center gap-3 text-xl font-medium text-neutral-100 tracking-tight mb-10">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
          {/* @ts-expect-error iconify web component */}
          <iconify-icon icon="solar:suitcase-linear" width="16" height="16" />
        </div>
        Work Experience
      </h2>

      <div className="relative pl-8 border-l border-neutral-800 space-y-12 ml-3">
        {experiences.map((exp) => {
          const colors = colorMap[exp.color] || colorMap.violet;
          return (
            <div key={exp.title + exp.period} className="relative group">
              <div className={`absolute -left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-neutral-950 bg-neutral-800 ${colors.dot} transition-all duration-300 shadow-[0_0_0_4px_rgba(23,23,23,1)] z-10 ${colors.glow}`} />
              <div className="flex flex-col sm:flex-row sm:items-center mb-2 justify-between gap-2">
                <h3 className={`text-base font-medium text-neutral-200 ${colors.text} transition-colors`}>{exp.title}</h3>
                <span className="text-xs text-neutral-500 font-mono bg-neutral-950/50 px-2 py-1 rounded border border-neutral-800/50 whitespace-nowrap">{exp.period}</span>
              </div>
              <div className="text-sm text-neutral-400 mb-3 font-medium">{exp.company}</div>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl group-hover:text-neutral-400 transition-colors">{exp.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}