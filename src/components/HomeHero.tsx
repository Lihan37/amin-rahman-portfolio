function HomeHero() {
  return (
    <header id="home" className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-8">
      <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] animate-fade-up">
        <div className="relative space-y-6">
          <div className="space-y-2 text-sm font-semibold uppercase tracking-[0.45em] text-[color:var(--leaf-dark)] animate-fade-up-delayed">
            <p>Council Candidate</p>
            <p className="text-xs tracking-[0.5em] text-[color:var(--leaf-dark)]/80">
              Mile End, Tower Hamlets
            </p>
          </div>

          <h1 className="inline-grid grid-cols-[auto_auto] items-end gap-x-3 gap-y-2 text-4xl font-semibold leading-tight md:text-6xl animate-fade-up-delayed">
            <span>Amin</span>
            <span>Rahman</span>
            <span className="col-start-2 ml-[0.6em] whitespace-nowrap text-[0.95rem] font-bold italic tracking-normal text-[color:var(--leaf-dark)]/90 sm:text-xl md:ml-[0.9em] lg:ml-[1.1em] md:text-2xl">
              B.Sc (Aeronautics), MBA
            </span>
          </h1>

          <ul className="space-y-2 text-base font-bold uppercase tracking-[0.28em] text-[color:var(--leaf-dark)]/90 animate-fade-up-delayed md:text-lg">
            {['Wing Commander (Retired)', 'Airline Pilot', 'School Governor', 'Lecturer'].map(
              (item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--leaf)] shadow-[0_0_0_4px_rgba(59,129,50,0.12)]" />
                  <span>{item}</span>
                </li>
              ),
            )}
          </ul>

          <p className="max-w-xl text-lg text-[color:var(--ink)]/75 md:text-xl animate-fade-up-delayed">
            British citizen, long-standing UK resident and proud member of the Bangladeshi
            community in Tower Hamlets. Dedicated to public service, integrity, and responsibility.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[40px] bg-[color:var(--leaf)]/10 blur-2xl" />
          <div className="relative h-80 w-full sm:h-90 md:h-105">
            <div className="absolute left-2 top-2 z-10 h-50 w-[155px] -rotate-6 overflow-hidden rounded-[24px] border border-white/75 bg-white/90 shadow-[0_18px_45px_rgba(16,35,21,0.18)] ring-1 ring-[color:var(--leaf)]/15 sm:left-3 sm:top-3 sm:h-55 sm:w-[170px] md:left-2 md:top-4 md:h-65 md:w-50">
              <img
                src="https://res.cloudinary.com/duaysox2a/image/upload/v1770496555/amon_4_vdxwbt.jpg"
                alt="Amin Rahman portrait"
                className="h-full w-full object-cover object-[center_15%]"
                loading="lazy"
              />
            </div>
            <div className="absolute left-1/2 top-1/2 z-30 h-55 w-[170px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[26px] border border-white/80 bg-white/95 shadow-[0_20px_55px_rgba(16,35,21,0.22)] ring-1 ring-[color:var(--leaf)]/18 transform-gpu sm:h-[235px] sm:w-45 md:h-[250px] md:w-[190px]">
              <img
                src="https://res.cloudinary.com/duaysox2a/image/upload/v1770566931/amin_1_hgprro.webp"
                alt="Amin Rahman standing in a park"
                className="h-full w-full object-cover object-[center_20%]"
                loading="eager"
              />
            </div>
            <div className="absolute bottom-2 right-2 z-20 h-50 w-[155px] rotate-6 overflow-hidden rounded-[24px] border border-white/75 bg-white/90 shadow-[0_18px_45px_rgba(16,35,21,0.18)] ring-1 ring-[color:var(--leaf)]/15 sm:bottom-3 sm:right-3 sm:h-[215px] sm:w-[165px] md:bottom-4 md:right-2 md:h-[255px] md:w-[195px]">
              <img
                src="https://res.cloudinary.com/duaysox2a/image/upload/v1770494672/amin_2_a06tk6.jpg"
                alt="Amin Rahman community moment"
                className="h-full w-full object-cover object-[center_25%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 animate-fade-up-delayed">
        <div className="rounded-3xl border border-white/70 bg-white/60 p-6 text-center shadow-xl shadow-black/5 backdrop-blur">
          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--leaf-dark)] sm:text-sm sm:tracking-[0.35em]">
            {['Leadership', 'Community Champion', "People's Person"].map((item) => (
              <span
                key={item}
                className="w-full rounded-full border border-[color:var(--leaf)]/35 bg-white/90 px-4 py-2 shadow-[0_8px_22px_rgba(59,129,50,0.16)] sm:w-auto sm:px-5"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mx-auto mt-4 inline-flex w-full max-w-md flex-wrap items-center justify-center gap-2 rounded-full border border-[color:var(--leaf)]/35 bg-[color:var(--leaf)]/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.25em] text-[color:var(--leaf-dark)] sm:w-auto sm:max-w-none sm:gap-3 sm:px-5 sm:text-sm sm:tracking-[0.45em]">
            {['Discipline', 'Accountability', 'Integrity', 'Service'].map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                {index > 0 ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--leaf-dark)]/60" />
                ) : null}
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default HomeHero
