export default function StatsRow() {
  const stats = [
    { label: "GPA", value: "3.78 / 4.00" },
    { label: "Projects Completed", value: "10+" },
    { label: "Records Analyzed", value: "443K+" },
    { label: "Certifications", value: "7" },
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 border-y bg-neutral-950/30 border-neutral-800/50 mb-24 py-8 relative backdrop-blur-sm gap-x-4 gap-y-4">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-900/50 to-transparent pointer-events-none" />
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`relative flex flex-col gap-1 px-4 border-l border-neutral-800/50 ${i === 0 ? "border-l-0" : ""}`}
        >
          <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">{stat.label}</span>
          <span className="text-2xl font-semibold text-neutral-100 tracking-tight">{stat.value}</span>
        </div>
      ))}
    </section>
  );
}
