export default function Education() {
  return (
    <section className="mb-32 relative p-8 md:p-12 rounded-[32px] border border-white/5 bg-neutral-900/20 backdrop-blur-md overflow-hidden shadow-2xl" id="education">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <h2 className="relative flex items-center gap-3 text-xl font-medium text-neutral-100 tracking-tight mb-10">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
        </div>
        Education
      </h2>

      <div className="relative pl-8 border-l border-neutral-800 space-y-12 ml-3">
        {/* Education 1: Universitas Padjadjaran */}
        <div className="relative group">
          <div className="absolute -left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-neutral-950 bg-neutral-800 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_0_4px_rgba(23,23,23,1)] z-10 group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div>
              <h3 className="text-base font-medium text-neutral-200 group-hover:text-blue-300 transition-colors">Universitas Padjadjaran</h3>
              <p className="text-sm text-neutral-400 mt-1">
                Bachelor of Computer Science · GPA 3.78/4.00
              </p>
            </div>
            <span className="text-xs font-mono text-neutral-500 bg-neutral-950/50 px-2 py-1 rounded border border-neutral-800/50 whitespace-nowrap">
              Aug 2023 — Present
            </span>
          </div>

          <p className="text-sm text-neutral-500 leading-relaxed mt-3 max-w-2xl group-hover:text-neutral-400 transition-colors">
            Focused on Data Analytics, Business Intelligence, Machine Learning, and software-driven problem solving through data and intelligent systems.
          </p>
        </div>

        {/* Education 2: Dibimbing.id */}
        <div className="relative group">
          <div className="absolute -left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-neutral-950 bg-neutral-800 group-hover:bg-violet-500 transition-all duration-300 shadow-[0_0_0_4px_rgba(23,23,23,1)] z-10 group-hover:shadow-[0_0_0_4px_rgba(139,92,246,0.2)]" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div>
              <h3 className="text-base font-medium text-neutral-200 group-hover:text-violet-300 transition-colors">
                Data Science & AI Machine Learning Bootcamp
              </h3>
              <p className="text-sm text-neutral-400 mt-1">Dibimbing.id</p>
            </div>
            <span className="text-xs font-mono text-neutral-500 bg-neutral-950/50 px-2 py-1 rounded border border-neutral-800/50 whitespace-nowrap">
              Mar 2026 — Present
            </span>
          </div>

          <p className="text-sm text-neutral-500 leading-relaxed mt-3 max-w-2xl group-hover:text-neutral-400 transition-colors">
            Hands-on experience in SQL, data analytics, statistical analysis, machine learning, and predictive modeling for data-driven and intelligent solutions.
          </p>
        </div>
      </div>
    </section>
  );
}