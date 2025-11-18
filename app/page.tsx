import Link from "next/link";

type SubjectPlan = {
  level: string;
  grades: string;
  description: string;
  feeNote: string;
  accent: string;
  subjects: {
    name: string;
    focus: string;
    fee: string;
  }[];
};

const subjectPlans: SubjectPlan[] = [
  {
    level: "Foundations",
    grades: "Classes 1 – 5",
    description: "Playful concept-building with phonics, number sense and EVS.",
    feeNote: "All subjects (English, Maths & EVS) combo at ₹3,000 / month",
    accent: "from-cyan-400/80 to-emerald-400/80",
    subjects: [
      {
        name: "English Reading & Writing",
        focus: "Phonics + creative writing",
        fee: "₹3,000 (all 1–5 subjects combo)",
      },
      {
        name: "Mathematics Essentials",
        focus: "Number stories & mental math",
        fee: "₹3,000 (all 1–5 subjects combo)",
      },
      {
        name: "EVS / General Science",
        focus: "Hands-on discovery projects",
        fee: "₹3,000 (all 1–5 subjects combo)",
      },
    ],
  },
  {
    level: "Middle Years",
    grades: "Classes 6 – 8",
    description: "Skill drills blended with visual aids to keep curiosity alive.",
    feeNote: "Starting ₹2,200 / month",
    accent: "from-purple-400/80 to-sky-400/80",
    subjects: [
      { name: "Advanced Mathematics", focus: "Fractions, algebraic prep", fee: "₹2,300" },
      { name: "Science Explorer", focus: "Physics + Chemistry + Bio basics", fee: "₹2,200" },
      { name: "English Grammar Lab", focus: "Grammar + literature support", fee: "₹2,200" },
      { name: "Social Studies Capsule", focus: "History + Civics + Geography", fee: "₹2,000" },
    ],
  },
  {
    level: "Secondary Boards",
    grades: "Classes 9 – 10",
    description: "Board-focussed mentoring with NCERT pattern micro tests.",
    feeNote: "Starting ₹2,800 / month",
    accent: "from-amber-400/80 to-rose-400/80",
    subjects: [
      { name: "Mathematics (Std. IX–X)", focus: "Algebra, geometry, statistics", fee: "₹3,000" },
      { name: "Physics + Chemistry", focus: "Derivations & numericals", fee: "₹2,900" },
      { name: "Biology Express", focus: "Diagrams + terminology drills", fee: "₹2,700" },
      { name: "English & SST Combo", focus: "Answer framing + maps", fee: "₹2,600" },
    ],
  },
  {
    level: "Senior Focus",
    grades: "Classes 11 – 12",
    description: "Stream-specific mastery with targeted board & entrance prep.",
    feeNote: "Starting ₹3,400 / month",
    accent: "from-lime-400/80 to-cyan-400/80",
    subjects: [
      { name: "PCM Core (Math + Phy + Chem)", focus: "CBSE & competitive bridge", fee: "₹3,800" },
      { name: "PCB Care (Bio + Phy + Chem)", focus: "Labelled diagrams + numericals", fee: "₹3,600" },
    ],
  },
];

const strengths = [
  {
    title: "Personal Mentors",
    detail: "Dedicated tutor for every 6 learners with weekly progress calls.",
    icon: "👩‍🏫",
  },
  {
    title: "Flexible Slots",
    detail: "Morning, evening and weekend batches aligned to school timings.",
    icon: "⏰",
  },
  {
    title: "2000+ Practice Sheets",
    detail: "Curated worksheets mapped to CBSE & ICSE learning outcomes.",
    icon: "📚",
  },
];

const stats = [
  { label: "Boards Covered", value: "CBSE · ICSE · State" },
  { label: "Cities Served", value: "18+" },
  { label: "Average Tutor Exp.", value: "7.5 yrs" },
];

const feeRows = subjectPlans.flatMap((plan) =>
  plan.subjects.map((subject) => ({
    ...subject,
    grades: plan.grades,
  }))
);

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.2),_transparent_60%)] blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-16 lg:px-10 lg:pt-20">
        <header className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-100/80 backdrop-blur lg:justify-start">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100/10 text-lg">✨</span>
            Personalized home tuition for Classes 1 – 12
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              BrightSteps Home Tuition
              <span className="block text-cyan-300">
                Concept clarity. Confident scores.
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-200 lg:mx-0">
              We pair experienced tutors with adaptive lesson plans so every learner—right from
              phonics in grade 1 to board revision in grade 12—gets focused guidance at home.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="tel:+919155832907"
              className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400/90 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:bg-cyan-300 sm:w-auto"
            >
              Call Shreya Jha
            </a>
            <Link
              href="/timetable"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white/90 transition hover:border-cyan-200 hover:text-cyan-100 sm:w-auto"
            >
              View Noon Timetable
            </Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item) => (
            <article
              key={item.title}
              className="glass relative overflow-hidden rounded-3xl p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="space-y-10">
          <header className="space-y-2 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
              Subjects & Transparent Fees
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Choose the plan that matches your child&apos;s class.
            </h2>
            <p className="text-base text-slate-300">
              Monthly fees include 8 personalised home sessions + digital worksheets + fortnightly feedback report.
            </p>
          </header>
          <div className="grid gap-6 lg:grid-cols-2">
            {subjectPlans.map((plan) => (
              <article
                key={plan.level}
                className="glass relative flex flex-col gap-4 rounded-3xl border border-white/10 p-6"
              >
                <div className="inline-flex items-center gap-2">
                  <span className={`inline-flex rounded-full bg-gradient-to-r ${plan.accent} px-3 py-1 text-xs font-semibold text-slate-900`}>
                    {plan.grades}
                  </span>
                  <p className="text-sm uppercase tracking-widest text-white/60">{plan.level}</p>
                </div>
                <h3 className="text-2xl font-semibold text-white">{plan.description}</h3>
                <p className="text-sm text-cyan-200">{plan.feeNote}</p>
                <div className="space-y-3 rounded-2xl bg-white/5 p-4">
                  {plan.subjects.map((subject) => (
                    <div
                      key={subject.name}
                      className="flex flex-col gap-1 border-b border-white/5 pb-3 last:border-none last:pb-0"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-base font-medium text-white">{subject.name}</p>
                        <span className="text-sm font-semibold text-cyan-100">{subject.fee} / month</span>
                      </div>
                      <p className="text-xs uppercase tracking-wider text-white/60">{subject.focus}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Quick Fee Lookup</p>
            <h3 className="text-2xl font-semibold text-white">Subject wise snapshot (Classes 1 – 12)</h3>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm text-slate-100">
              <thead className="bg-white/10 text-xs uppercase tracking-widest text-slate-300">
                <tr>
                  <th className="px-4 py-3">Class Range</th>
                  <th className="px-4 py-3">Subject</th>
                  <th className="px-4 py-3">Focus Area</th>
                  <th className="px-4 py-3 text-right">Monthly Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeRows.map((row) => (
                  <tr key={`${row.name}-${row.grades}`} className="border-t border-white/5 hover:bg-white/5">
                    <td className="px-4 py-3 text-slate-300">{row.grades}</td>
                    <td className="px-4 py-3 font-medium text-white">{row.name}</td>
                    <td className="px-4 py-3 text-slate-300">{row.focus}</td>
                    <td className="px-4 py-3 text-right font-semibold text-cyan-100">{row.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">
            Fees shown for 8 sessions / month. Additional STEM labs & language boosters can be added for ₹400 per subject.
          </p>
        </section>

        <section className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-gradient-to-r from-slate-900/80 to-cyan-900/20 p-6 text-center lg:flex-row lg:items-center lg:text-left">
          <div className="flex-1 space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Ready to begin?</p>
            <h3 className="text-3xl font-semibold text-white">Book a free diagnostic class</h3>
            <p className="text-base text-slate-200">
              A BrightSteps mentor will meet your child online or at home, measure conceptual clarity, and recommend the best plan across classes 1 to 12.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/15 px-4 py-3 text-white/90">
                <p className="text-sm text-slate-300">{stat.label}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
              </div>
            ))}
            <a
              href="https://wa.me/919155832907"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-cyan-100"
            >
              Chat with Shreya Jha
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} BrightSteps Learning LLP. All rights reserved.</p>
          <p>Shreya Jha · +91 91558 32907 · care@brightsteps.com</p>
        </footer>
      </div>
    </div>
  );
}
