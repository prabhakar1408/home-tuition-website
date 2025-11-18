const timetableRows = [
  {
    time: "12:00 – 1:00 PM",
    grades: "Classes 1 – 5",
    focus: "English + Reading Practice",
  },
  {
    time: "1:00 – 2:00 PM",
    grades: "Classes 1 – 5",
    focus: "Mathematics (Number sense & word problems)",
  },
  {
    time: "2:00 – 3:00 PM",
    grades: "Classes 6 – 8",
    focus: "Mathematics / Science (alternate days)",
  },
  {
    time: "3:00 – 4:00 PM",
    grades: "Classes 9 – 10",
    focus: "Board Maths / Science focus",
  },
  {
    time: "8:00 – 9:00 PM",
    grades: "Classes 11 – 12",
    focus: "PCM / PCB core concepts (alternate days)",
  },
  {
    time: "8:00 – 9:00 PM",
    grades: "Classes 11 – 12",
    focus: "Numerical practice & past-year questions",
  },
];

export default function TimetablePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.2),_transparent_60%)] blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-10 px-6 pb-16 pt-16 lg:px-10 lg:pt-20">
        <header className="space-y-4 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
            Noon Session Plan
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Daily Timetable (12:00 PM – 4:00 PM)
          </h1>
          <p className="text-base text-slate-200">
            Fixed noon batches for all classes ensure that every learner gets a focused slot for core
            subjects, with time reserved for doubts and revision.
          </p>
        </header>

        <section className="space-y-4 rounded-3xl border border-white/15 bg-slate-900/60 p-6 backdrop-blur">
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm text-slate-100">
              <thead className="bg-white/10 text-xs uppercase tracking-widest text-slate-300">
                <tr>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Class Range</th>
                  <th className="px-4 py-3">Focus</th>
                </tr>
              </thead>
              <tbody>
                {timetableRows.map((row) => (
                  <tr
                    key={`${row.time}-${row.grades}`}
                    className="border-t border-white/5 hover:bg-white/5"
                  >
                    <td className="px-4 py-3 text-slate-100">{row.time}</td>
                    <td className="px-4 py-3 text-slate-300">{row.grades}</td>
                    <td className="px-4 py-3 text-slate-200">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">
            Exact slot allocation may slightly differ based on student location and tutor
            availability. All timings are within the noon window of 12:00 PM to 4:00 PM.
          </p>
        </section>
      </div>
    </div>
  );
}


