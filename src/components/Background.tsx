function Background() {
  return (
    <section id="background" className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-(--leaf-dark)">
          Background
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Military leadership and strategic roles.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur">
          <h3 className="text-xl font-semibold">Bangladesh Air Force</h3>
          <p className="mt-3 text-sm text-(--ink)/75">
            Retired Wing Commander, a senior leadership rank equivalent to Lieutenant Colonel.
            Served over 19 years in demanding roles requiring calm judgement, accountability,
            and respect for institutions.
          </p>
        </article>
        <article className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur">
          <h3 className="text-xl font-semibold">Senior appointments</h3>
          <ul className="mt-3 space-y-2 text-sm text-(--ink)/75">
            <li>Assistant Personal Secretary to the Chief of the Air Staff</li>
            <li>General Staff Officer in the Prime Minister’s Office of Bangladesh</li>
            <li>Key appointments at Air Headquarters</li>
            <li>Member of the Flying Category Board at Air Headquarters</li>
          </ul>
        </article>
        <article className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur md:col-span-2">
          <h3 className="text-xl font-semibold">Aviation leadership + MBA</h3>
          <p className="mt-3 text-sm text-(--ink)/75">
            After retiring from the Air Force, worked in aviation as Director of Operations
            and General Manager. Completed an MBA from a Canadian university, strengthening
            governance, finance, and strategic planning.
          </p>
        </article>
      </div>
    </section>
  )
}

export default Background
