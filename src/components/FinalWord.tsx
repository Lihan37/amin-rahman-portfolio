function FinalWord() {
  return (
    <section
      id="final-word"
      className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white/60 p-10 shadow-2xl shadow-black/10 backdrop-blur"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[color:var(--leaf)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-8 h-72 w-72 rounded-full bg-[color:var(--leaf-dark)]/15 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-6 h-24 w-24 -translate-x-1/2 rounded-full border border-[color:var(--leaf)]/30 bg-white/60 blur-xl" />

      <div className="relative flex flex-col gap-4">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-(--leaf-dark)/80">
          A Final Word
        </p>
        <h2 className="text-4xl font-semibold md:text-5xl">
          Service Is Not Optional. It Is Expected.
        </h2>
        <p className="text-base text-(--ink)/75 md:text-lg">
          I come from a background where service was not optional. It was expected. I bring
          that same sense of duty to Tower Hamlets. I want to listen carefully, work hard and
          represent Mile End with integrity, fairness and respect.
        </p>
        <p className="text-base text-(--ink)/75 md:text-lg">
          I would be honoured to earn your trust and to serve our community with
          responsibility and care. Thank you for taking the time to read my story.
        </p>
        <div className="mt-2 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-(--leaf-dark)/70">
          <span className="h-1.5 w-12 rounded-full bg-(--leaf)/60" />
          <span>With gratitude</span>
          <span className="h-1.5 w-12 rounded-full bg-(--leaf)/60" />
        </div>
      </div>
    </section>
  )
}

export default FinalWord
