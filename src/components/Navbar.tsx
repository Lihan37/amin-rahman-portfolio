function Navbar() {
  return (
    <div className="w-full bg-[color:var(--leaf)] shadow-lg shadow-[color:var(--leaf)]/30">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/duaysox2a/image/upload/v1770494683/green_party_warhcl.jpg"
            alt="Green Party logo"
            className="h-14 w-14 rounded-full border border-white/70 bg-white/10 object-cover"
            loading="lazy"
          />
          <span className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
            Green Party
          </span>
        </div>
        <a
          href="#contact"
          className="rounded-full border border-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white"
        >
          Contact
        </a>
      </nav>
    </div>
  )
}

export default Navbar
