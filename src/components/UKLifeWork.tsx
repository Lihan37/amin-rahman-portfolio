function UKLifeWork() {
  return (
    <section id="uk-life-work" className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--leaf-dark)]">
          UK Life &amp; Work
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Professional work and local service in the UK.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur">
          <h3 className="text-xl font-semibold">Professional roles</h3>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--ink)]/75">
            <li>Security management at high-profile and sensitive sites</li>
            <li>Property, facilities and building management</li>
            <li>Aviation and operational leadership</li>
          </ul>
        </article>
        <article className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur">
          <h3 className="text-xl font-semibold">Local service today</h3>
          <ul className="mt-3 space-y-2 text-sm text-[color:var(--ink)]/75">
            <li>Elected School Governor at Phoenix School in Tower Hamlets</li>
            <li>Lecturer at Nelson College London</li>
            <li>Focused on safeguarding, inclusion, and accountability</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default UKLifeWork
