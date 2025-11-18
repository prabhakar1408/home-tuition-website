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
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <div className="flex-1 space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
                Tutor Profile
              </p>
              <h2 className="text-2xl font-semibold text-white">Shreya Jha</h2>
              <p className="text-sm text-slate-300">
                Dedicated home tutor specialising in conceptual clarity for Classes 1–12, with
                structured practice sheets and regular parent feedback.
              </p>
            </div>
            <div className="flex-1 space-y-2 rounded-2xl bg-white/5 p-4 text-sm text-slate-100">
              <div className="flex justify-between gap-4">
                <span className="text-slate-400">Location</span>
                <span className="font-medium">
                  Arvind Nagar, Bhajanpura, New Delhi
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-400">Address</span>
                <span className="font-medium">
                  75/16, Ghonda, Shahdara, New Delhi, Delhi, 11
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-slate-400">Contact</span>
                <span className="font-medium">+91 91558 32907</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">
                Strengths
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Patient, concept-first explanations for junior classes</li>
                <li>Board-focused strategy for Classes 9–12</li>
                <li>Regular doubt-clearing and handwritten notes</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">
                Session Details
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Noon batches: 12:00 PM – 4:00 PM (class-wise slots)</li>
                <li>Evening support for Classes 11–12: 8:00 PM – 9:00 PM</li>
                <li>1:1 and small group options available</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-200">
            <p>
              Parents from nearby areas like Bhajanpura, Ghonda and Shahdara can opt for regular
              home visits or hybrid support (online + offline) based on convenience.
            </p>
            <p>
              To check current slot availability or book a trial class, please call or WhatsApp
              Shreya directly.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+919155832907"
              className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400/90 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300"
            >
              Call Shreya Jha
            </a>
            <a
              href="https://wa.me/919155832907"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white/90 transition hover:border-cyan-200 hover:text-cyan-100"
            >
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}


