const matches = [
  { home: 'Manchester City', away: 'Arsenal', time: '18:30', status: 'Upcoming' },
  { home: 'Barcelona', away: 'Real Madrid', time: '20:00', status: 'Live' },
  { home: 'Bayern', away: 'Dortmund', time: '21:00', status: 'Trending' }
];

const stats = [
  { label: 'Matches tracked', value: '128' },
  { label: 'Live scores', value: '24' },
  { label: 'Clubs covered', value: '42' }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
          Fotmob • football intelligence
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Keep every match in focus.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              A football dashboard for real-time scores, fixtures, club coverage, and match insights.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400">
                Explore live scores
              </button>
              <button className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:border-slate-500">
                View fixtures
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-emerald-500/10">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Today</p>
            <div className="mt-6 space-y-4">
              {matches.map((match) => (
                <div key={match.home} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{match.status}</span>
                    <span>{match.time}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3 text-lg font-semibold">
                    <span>{match.home}</span>
                    <span className="text-slate-400">vs</span>
                    <span>{match.away}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
