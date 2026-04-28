import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 pt-32 pb-20">
        <h1 className="text-4xl font-semibold text-neutral-100">Blog</h1>
        <p className="mt-3 text-neutral-400">Notes, progress, and learnings.</p>
        <div className="mt-8 rounded-3xl border border-neutral-800 bg-neutral-900/25 p-6">
          <p className="text-neutral-500">Coming soon...</p>
        </div>
        <div className="mt-6">
          <Link href="/" className="text-violet-400 hover:text-violet-300 transition-colors text-sm">
            ← Back to portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}