function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--leaf-dark)]">
            Amin Rahman
          </p>
          <p className="mt-2 text-sm text-[color:var(--ink)]/70">
            Council Candidate for Mile End, Tower Hamlets.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <a href="#about" className="hover:text-[color:var(--leaf-dark)]">
            About
          </a>
          <a href="#background" className="hover:text-[color:var(--leaf-dark)]">
            Background
          </a>
          <a href="#priorities" className="hover:text-[color:var(--leaf-dark)]">
            Priorities
          </a>
          <a href="#contact" className="hover:text-[color:var(--leaf-dark)]">
            Contact
          </a>
        </div>
        <p className="text-xs text-[color:var(--ink)]/60">
          © 2026 Amin Rahman. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
