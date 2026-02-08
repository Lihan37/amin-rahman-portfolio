function Background() {
  return (
    <section
      id="background"
      className="relative space-y-10 overflow-hidden rounded-[36px] border border-white/70 bg-white/55 p-8 shadow-2xl shadow-black/5 backdrop-blur"
    >
      <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-[color:var(--leaf)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-12 h-64 w-64 rounded-full bg-[color:var(--leaf-dark)]/10 blur-3xl" />

      <div className="relative">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-[color:var(--leaf-dark)]/80">
          Background
        </p>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
          Military leadership and strategic roles.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 animate-fade-up-delayed">
        <article className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-8 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--leaf)]/15 blur-2xl transition group-hover:scale-110" />
          <h3 className="text-2xl font-semibold">Bangladesh Air Force</h3>
          <p className="mt-4 text-base text-[color:var(--ink)]/75">
            A retired Wing Commander, a senior leadership rank equivalent to
            Lieutenant Colonel. I served for over 19 years in demanding roles
            that required calm judgement, accountability and deep respect for
            institutions.
          </p>
        </article>
        <article className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-8 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-24 w-24 rounded-full bg-[color:var(--leaf)]/15 blur-2xl transition group-hover:scale-110" />
          <h3 className="text-2xl font-semibold">Senior appointments</h3>
          <ul className="mt-4 space-y-3 text-base text-[color:var(--ink)]/75">
            {[
              "Assistant Personal Secretary to the Chief of the Air Staff",
              "General Staff Officer in the Prime Minister’s Office of Bangladesh",
              "Key appointments at Air Headquarters",
              "Member of the Flying Category Board at Air Headquarters",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[color:var(--leaf)]/35 bg-white/90 text-xs font-bold text-[color:var(--leaf-dark)]">
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-8 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl md:col-span-2">
          <div className="pointer-events-none absolute right-10 top-10 h-28 w-28 rounded-full bg-[color:var(--leaf-dark)]/10 blur-2xl" />
          <h3 className="text-2xl font-semibold">Aviation leadership + MBA</h3>
          <p className="mt-4 text-base text-[color:var(--ink)]/75">
            After retiring from the Air Force, I completed an MBA from a Canadian university, strengthening my understanding of governance, finance and strategic planning. I then worked in the aviation industry as Director of Operations and as a General Manager in the corporate sector.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Background;
