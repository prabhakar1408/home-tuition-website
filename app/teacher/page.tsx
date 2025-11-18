export default function TeacherPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.2),_transparent_60%)] blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-10 px-6 pb-16 pt-16 lg:px-10 lg:pt-20">
        <header className="space-y-4 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
            Your Tutor
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Meet Shreya Jha
          </h1>
          <p className="text-base text-slate-200">
            Personalised home tuition for Classes 1–12 from Arvind Nagar, Bhajanpura with a focus
            on strong fundamentals and exam-ready confidence.
          </p>
        </header>

        <section className="glass space-y-6 rounded-3xl border border-white/15 p-6 backdrop-blur">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
              Tutor Profile
            </p>
            <h2 className="text-2xl font-semibold text-white">Shreya Jha</h2>
            <p className="text-sm text-slate-300">
              Dedicated tutor for Classes 1–12, focused on clear explanations, steady practice and
              gentle motivation so that children feel confident with their school work.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">
              Tuition Location
            </p>
            <p className="mt-2 text-slate-100">
              Sessions are conducted from a calm residential setup in{" "}
              <span className="font-medium">Arvind Nagar, Bhajanpura, New Delhi</span>, with easy
              access for nearby areas.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">
                How classes feel
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Simple, step‑by‑step explanations</li>
                <li>Plenty of practice questions and examples</li>
                <li>Friendly environment where students can ask doubts freely</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">
                For parents
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Regular updates about progress and focus areas</li>
                <li>Flexible slots in the noon and evening as discussed</li>
                <li>Calm, minimal setup designed to help children concentrate</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            Detailed contact information is shared personally after an initial enquiry to keep your
            and your child&apos;s privacy safe.
          </p>
        </section>
      </div>
    </div>
  );
}


