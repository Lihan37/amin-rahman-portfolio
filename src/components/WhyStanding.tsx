function WhyStanding() {
  return (
    <section
      id="why-standing"
      className="relative space-y-10 overflow-hidden rounded-[36px] border border-white/70 bg-white/55 p-8 shadow-2xl shadow-black/5 backdrop-blur"
    >
      <div className="pointer-events-none absolute -left-10 top-10 h-56 w-56 rounded-full bg-[color:var(--leaf)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-16 h-64 w-64 rounded-full bg-[color:var(--leaf-dark)]/10 blur-3xl" />

      <div className="relative animate-fade-up">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-[color:var(--leaf-dark)]/80">
          Why I’m Standing
        </p>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
          Focused on Service Rather Than Slogans
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 animate-fade-up-delayed">
        <article className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-8 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--leaf)]/15 blur-2xl transition group-hover:scale-110" />
          <h3 className="text-2xl font-semibold">Motivation</h3>
          <p className="mt-4 text-base text-[color:var(--ink)]/75">
            I am standing because I genuinely care about Tower Hamlets and
            believe it deserves councillors who act with principle, competence
            and calm judgement, especially when things get difficult.
          </p>
        </article>
        <article className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-8 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
          <div className="pointer-events-none absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-[color:var(--leaf)]/15 blur-2xl transition group-hover:scale-110" />
          <h3 className="text-2xl font-semibold">Leadership approach</h3>
          <p className="mt-4 text-base text-[color:var(--ink)]/75">
            Local politics should be about listening, fairness and practical
            solutions. My aim is to work constructively with colleagues, respect
            collective decisions and always put residents first.
          </p>
        </article>
      </div>
    </section>
  );
}

export default WhyStanding;
