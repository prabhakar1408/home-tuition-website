import Link from "next/link";

const dashboardMetrics = [
  { label: "Active Learners", value: "42", note: "Across Classes 1 – 12" },
  { label: "Weekly Sessions", value: "68", note: "Noon + evening slots" },
  { label: "Subjects Covered", value: "11", note: "Math, Science, English & more" },
];

const dashboardNotes = [
  {
    title: "Today’s Focus",
    detail: "Reinforce fractions for Classes 5 & 6, conduct Algebra drill for Class 9 batch.",
  },
  {
    title: "Parent Updates",
    detail: "Share worksheet feedback with Grade 4 parents and exam strategy with Class 12 PCM group.",
  },
  {
    title: "Upcoming",
    detail: "Mock test for Classes 10 on Friday noon slot; arrange extra reading lab for Class 2.",
  },
];

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.2),_transparent_60%)] blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-16 pt-16 lg:px-10 lg:pt-20">
        <header className="space-y-4 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
            Tutor Dashboard (Preview)
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Daily snapshot for BrightSteps
          </h1>
          <p className="text-base text-slate-200">
            Key stats and reminders for Shreya Jha to stay organised with noon sessions, evening
            support and parent communication.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dashboardMetrics.map((metric) => (
            <article
              key={metric.label}
              className="glass rounded-3xl border border-white/15 p-5 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">{metric.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{metric.value}</p>
              <p className="text-sm text-slate-300">{metric.note}</p>
            </article>
          ))}
        </section>

        <section className="glass space-y-4 rounded-3xl border border-white/15 p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Planner</p>
          <div className="grid gap-4 md:grid-cols-3">
            {dashboardNotes.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/teacher"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-cyan-200 hover:text-cyan-100"
          >
            ← Back to Teacher
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-cyan-200/40 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white"
          >
            Go to Home →
          </Link>
        </div>
      </div>
    </div>
  );
}


