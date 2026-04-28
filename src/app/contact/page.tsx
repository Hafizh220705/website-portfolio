import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <h1 className="text-4xl font-semibold text-neutral-100 text-center">Contact Me</h1>
        <p className="mt-3 text-center text-neutral-400">
          Feel free to fill out the form below to get in touch or just say hello at{" "}
          <a className="underline text-neutral-200" href="mailto:hello@johndoe.com">
            hello@johndoe.com
          </a>
        </p>

        <form className="mt-10 space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 placeholder:text-neutral-600 outline-none focus:border-violet-500/50 transition-colors"
          />
          <textarea
            placeholder="Enter your message"
            rows={8}
            className="w-full rounded-2xl border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 placeholder:text-neutral-600 outline-none focus:border-violet-500/50 transition-colors"
          />
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-neutral-950 hover:bg-neutral-200 transition-all shadow-lg shadow-white/10"
          >
            Submit ↗
          </button>
        </form>

        <div className="mt-8">
          <Link href="/" className="text-violet-400 hover:text-violet-300 transition-colors text-sm">
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}