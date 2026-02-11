import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Background', href: '#background' },
  { label: 'UK Life & Work', href: '#uk-life-work' },
  { label: "Why I'm Standing", href: '#why-standing' },
  { label: 'Priorities', href: '#priorities' },
  { label: 'Final Word', href: '#final-word' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full bg-[color:var(--leaf)]/95 shadow-lg shadow-[color:var(--leaf)]/30 backdrop-blur">
      <nav className="mx-auto flex w-full items-center justify-center gap-2 px-3 py-3 sm:gap-6 sm:px-6 sm:py-5 md:justify-center md:max-w-6xl">
        <div className="hidden flex-wrap items-center justify-center gap-4 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/50 px-4.5 py-2 text-[0.82rem] font-bold uppercase tracking-[0.22em] text-white/95 transition hover:border-white hover:text-white sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="mx-auto rounded-full border border-white/70 bg-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition hover:border-white sm:text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Get to Know Me
        </button>
      </nav>

      <div id="mobile-nav" className={`${open ? 'block' : 'hidden'} md:hidden`}>
        <div className="mx-auto w-full max-w-6xl px-4 pb-6 sm:px-6">
          <div className="grid gap-3 rounded-3xl border border-white/60 bg-white/10 p-4 shadow-xl shadow-black/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-white/50 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:border-white sm:text-sm"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
