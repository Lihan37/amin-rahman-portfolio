const priorities = [
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
  {
    title: 'Community Trust',
    description: 'Strengthening confidence between residents, services and local government.',
  },
]

function Priorities() {
  return (
    <section id="priorities" className="space-y-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--leaf-dark)]">
          Priorities
        </p>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          My priorities for Mile End.
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {priorities.map((priority) => (
          <article
            key={priority.title}
            className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">{priority.title}</h3>
            <p className="mt-3 text-sm text-[color:var(--ink)]/75">{priority.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Priorities
