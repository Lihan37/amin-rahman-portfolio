function About() {
  return (
    <section
      id="about"
      className="relative grid gap-10 overflow-hidden rounded-[36px] border border-white/70 bg-white/55 p-8 shadow-2xl shadow-black/5 backdrop-blur md:grid-cols-[1.2fr_0.9fr]"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-(--leaf)/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-(--leaf)/10 blur-3xl" />

      <div className="relative animate-fade-up-delayed">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-(--leaf-dark)/80">
          Who I Am
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Service, Integrity, Discipline and Accountability
        </h2>
        <p className="mt-4 text-base text-(--ink)/75">
          My name is Amin Rahman. I am a British citizen, a long-standing resident of the UK
          and a proud member of the Bangladeshi community in Tower Hamlets. I believe
          deeply in public service, integrity and responsibility. My life has been shaped by
          service in uniform, leadership and community work.
        </p>
        <p className="mt-4 text-base text-(--ink)/75">
          I see my background not as a badge but as a responsibility. A responsibility to
          serve people honestly and fairly. I am proud of my Bangladeshi roots and of what
          our community contributes to Tower Hamlets. I want to represent that contribution
          with dignity, discipline and genuine care.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {['Community-first', 'Integrity-led', 'Service in uniform'].map((item) => (
            <span
              key={item}
              className="rounded-full border border-(--leaf)/35 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-(--leaf-dark) shadow-sm shadow-(color:--leaf)/10"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center animate-fade-up">
        <div className="absolute -inset-1 rounded-[30px] bg-(--leaf)/10 blur-xl" />
        <div className="relative w-full max-w-md rounded-[28px] border border-white/70 bg-white/80 p-8 shadow-xl shadow-black/10">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-(--leaf-dark)/70">
            <span>Values</span>
            <span>Principles</span>
          </div>
          <ul className="mt-5 space-y-4 text-base text-(--ink)/75">
            {[
              'Public service rooted in integrity',
              'Calm, principled leadership',
              'Respect for community and institutions',
              'Honest, fair representation',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-(--leaf) shadow-[0_0_0_4px_rgba(59,129,50,0.15)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl border border-(--leaf)/25 bg-(--leaf)/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--leaf-dark)]">
            Duty, dignity, and care.
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
