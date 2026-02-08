function WhyStanding() {
  return (
    <section id="why-standing" className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--leaf-dark)]">
          Why I’m Standing
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Focused on service rather than slogans.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur">
          <h3 className="text-xl font-semibold">Motivation</h3>
          <p className="mt-3 text-sm text-[color:var(--ink)]/75">
            I am standing because I believe Tower Hamlets needs councillors who are
            principled, capable, and calm under pressure.
          </p>
        </article>
        <article className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur">
          <h3 className="text-xl font-semibold">Leadership approach</h3>
          <p className="mt-3 text-sm text-[color:var(--ink)]/75">
            Local politics should be about listening, fairness and practical solutions.
            My aim is to work constructively with colleagues, respect collective decisions,
            and always put residents first.
          </p>
        </article>
      </div>
    </section>
  )
}

export default WhyStanding
