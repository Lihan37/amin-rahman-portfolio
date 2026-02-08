const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Background', href: '#background' },
  { label: 'UK Life & Work', href: '#uk-life-work' },
  { label: 'Why I’m Standing', href: '#why-standing' },
  { label: 'Priorities', href: '#priorities' },
  { label: 'Final Word', href: '#final-word' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  return (
    <footer className="relative border-t border-white/70 bg-white/70">
      <div className="pointer-events-none absolute -left-12 top-6 h-40 w-40 rounded-full bg-[color:var(--leaf)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-4 h-48 w-48 rounded-full bg-[color:var(--leaf-dark)]/10 blur-3xl" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--leaf-dark)]">
            Green Party
          </p>
          <p className="text-base text-[color:var(--ink)]/70">
            Council Candidate for Mile End, Tower Hamlets.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-[color:var(--leaf)]/35 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--leaf-dark)] transition hover:border-[color:var(--leaf-dark)] hover:text-[color:var(--leaf-dark)]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-[color:var(--ink)]/60">
          © 2026 Amin Rahman. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
