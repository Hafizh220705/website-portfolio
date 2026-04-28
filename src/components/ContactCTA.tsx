export default function ContactCTA() {
  return (
    <section id="contact" className="relative rounded-[40px] border border-neutral-800/50 p-1 md:p-1.5 bg-gradient-to-b from-neutral-800/50 to-neutral-950 overflow-hidden group hover:border-violet-500/30 transition-all duration-500 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      <div className="relative bg-[#0A0A0A] rounded-[36px] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
        <div className="relative z-10 px-8 py-16 md:p-20 flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <div className="mb-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 text-sm font-medium shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="animate-fade-up delay-100 text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6 max-w-2xl mx-auto leading-[1.1]">
            Ready to turn your data into{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 animate-gradient-text font-bold bg-[length:200%_auto]">decisions</span>?
          </h2>

          {/* Subtitle */}
          <p className="animate-fade-up delay-200 text-neutral-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
            Let&apos;s discuss your data challenges and build analytical solutions that drive real impact.
          </p>

          {/* Buttons */}
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="mailto:hafizhfadhl22@gmail.com" className="group/btn w-full sm:w-auto relative flex items-center justify-center gap-3 bg-white text-neutral-950 px-8 py-4 rounded-2xl text-base font-bold hover:bg-neutral-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] hover:-translate-y-1 active:scale-95 duration-300">
              {/* @ts-expect-error iconify web component */}
              <iconify-icon icon="solar:letter-linear" width="24" class="group-hover/btn:rotate-12 transition-transform duration-300" />
              <span>Email Me</span>
            </a>
            <a href="https://wa.me/6282290764213" target="_blank" rel="noopener noreferrer" className="group/btn w-full sm:w-auto flex items-center justify-center gap-3 bg-neutral-800/50 border border-neutral-700 text-neutral-200 px-8 py-4 rounded-2xl text-base font-semibold hover:bg-neutral-800 hover:text-white hover:border-neutral-500 transition-all hover:-translate-y-1 active:scale-95 backdrop-blur-md duration-300">
              <span>WhatsApp Me</span>
              {/* @ts-expect-error iconify web component */}
              <iconify-icon icon="solar:phone-linear" width="24" class="group-hover/btn:-rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-violet-500/20 blur-[100px] pointer-events-none rounded-full mix-blend-screen" />
      </div>
    </section>
  );
}