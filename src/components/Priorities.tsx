const priorities = [
  {
    title: 'Community Trust',
    description: 'Strengthening confidence between residents, services and local government.',
  },
  {
    title: 'Housing',
    description: 'Supporting fair access, better standards and responsible decision making.',
  },
  {
    title: 'Crime and Anti-Social Behaviour',
    description: 'Reducing harm by addressing root causes, not just symptoms.',
  },
  {
    title: 'Road Safety',
    description: 'Improving traffic management, especially during school and office hours.',
  },
  {
    title: 'Green Spaces and Waterways',
    description: 'Protecting parks, wilderness areas and natural spaces for future generations.',
  },
]

function Priorities() {
  return (
    <section
      id="priorities"
      className="relative space-y-8 overflow-hidden rounded-[32px] border border-white/70 bg-white/55 p-6 shadow-xl shadow-black/5 backdrop-blur"
    >
      <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-[color:var(--leaf)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-12 h-64 w-64 rounded-full bg-[color:var(--leaf-dark)]/10 blur-3xl" />

      <div className="relative">
        <p className="text-sm font-bold uppercase tracking-[0.4em] text-[color:var(--leaf-dark)]/80">
          Priorities
        </p>
        <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
          My priorities for Mile End.
        </h2>
      </div>

      <div className="grid gap-4">
        {priorities.map((priority, index) => (
          <div
            key={priority.title}
            className="flex flex-wrap items-start gap-4 rounded-[26px] border border-white/70 bg-white/80 p-5 shadow-lg shadow-black/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--leaf)]/35 bg-white text-xs font-bold text-[color:var(--leaf-dark)]">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div className="min-w-[220px] flex-1">
              <h3 className="text-xl font-semibold">{priority.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--ink)]/75">{priority.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Priorities
