function UKLifeWork() {
  return (
    <section
      id="uk-life-work"
      className="relative space-y-10 overflow-hidden rounded-[36px] border border-white/70 bg-white/55 p-8 shadow-2xl shadow-black/5 backdrop-blur"
    >
      <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-[color:var(--leaf)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-[color:var(--leaf-dark)]/10 blur-3xl" />

      <div className="relative animate-fade-up">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-[color:var(--leaf-dark)]/80">
          UK Life &amp; Work
        </p>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
          Professional Work and Local Service in the UK
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 animate-fade-up-delayed">
        <article className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-8 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--leaf)]/15 blur-2xl transition group-hover:scale-110" />
          <h3 className="text-2xl font-semibold">Professional roles</h3>
          <ul className="mt-4 space-y-3 text-base text-[color:var(--ink)]/75">
            {[
              'Security management at high-profile and sensitive sites',
              'Property, facilities and building management',
              'Aviation and operational leadership',
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
        <article className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 p-8 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
          <div className="pointer-events-none absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-[color:var(--leaf)]/15 blur-2xl transition group-hover:scale-110" />
          <h3 className="text-2xl font-semibold">Local service today</h3>
          <ul className="mt-4 space-y-3 text-base text-[color:var(--ink)]/75">
            {[
              'Elected School Governor at Phoenix School in Tower Hamlets',
              'Lecturer at Nelson College London',
              'Focused on safeguarding, inclusion, and accountability',
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
      </div>
    </section>
  )
}

export default UKLifeWork
