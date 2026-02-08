function Contact() {
  return (
    <section
      id="contact"
      className="grid gap-8 rounded-3xl border border-white/70 bg-white/70 p-8 shadow-xl shadow-black/5 backdrop-blur md:grid-cols-[1.2fr_1fr]"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--leaf-dark)]">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Share your questions or feedback.
        </h2>
        <p className="mt-4 text-base text-[color:var(--ink)]/70">
          Use the contact form or send a message. Campaign communication is welcome.
        </p>
      </div>
      <div className="space-y-4 text-sm text-[color:var(--ink)]/75">
        <div className="rounded-2xl border border-[color:var(--leaf)]/20 bg-[color:var(--leaf)]/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--leaf-dark)]">
            Email
          </p>
          <a
            href="mailto:amin2050@gmail.com"
            className="mt-2 inline-block text-base font-semibold text-[color:var(--leaf-dark)] hover:underline"
          >
            amin2050@gmail.com
          </a>
        </div>
        <div className="rounded-2xl border border-[color:var(--leaf)]/20 bg-white/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--leaf-dark)]">
            Communication
          </p>
          <p className="mt-2 text-base font-semibold">Mile End · Tower Hamlets</p>
        </div>
        <a
          href="mailto:amin2050@gmail.com"
          className="w-full rounded-full bg-[color:var(--leaf)] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[color:var(--leaf)]/30 transition hover:-translate-y-0.5 hover:bg-[color:var(--leaf-dark)]"
        >
          Send a message
        </a>
      </div>
    </section>
  )
}

export default Contact
