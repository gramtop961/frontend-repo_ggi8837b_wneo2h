import { useMemo } from 'react';

export default function Projects() {
  const items = useMemo(
    () => [
      {
        title: 'Neon Hearts',
        desc: 'A cyberpunk romance where choices ripple through a glowing metropolis.',
        img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
        demo: 'https://itch.io',
        details: '#',
      },
      {
        title: 'Echoes of Starlight',
        desc: 'A contemplative space tale about memory, identity, and found family.',
        img: 'https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=1200&auto=format&fit=crop',
        demo: 'https://itch.io',
        details: '#',
      },
      {
        title: 'Velvet Code',
        desc: 'Mystery thriller set in a retro-futuristic arcade district.',
        img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop',
        demo: 'https://itch.io',
        details: '#',
      },
      {
        title: 'Glass Garden',
        desc: 'Slice-of-life drama where neon cities meet quiet rooftop moments.',
        img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
        demo: 'https://itch.io',
        details: '#',
      },
    ],
    []
  );

  return (
    <section id="projects" className="relative bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(147,51,234,0.18),transparent_45%),radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.15),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Projects
        </h2>
        <p className="mt-2 max-w-2xl text-cyan-100/80">
          Selections from recent visual novel work. Hover to see neon glow.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-cyan-400/30 [box-shadow:0_0_30px_2px_rgba(34,211,238,0.25)_inset] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="relative space-y-2 p-5">
                <h3 className="text-lg font-semibold text-cyan-100">{p.title}</h3>
                <p className="text-sm text-cyan-100/80">{p.desc}</p>
                <div className="flex gap-3 pt-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="relative flex-1 select-none rounded-lg border border-cyan-400/30 bg-white/5 px-3 py-2 text-center text-sm font-medium text-cyan-100 transition hover:scale-[1.02] hover:border-cyan-300/60 hover:text-white"
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-cyan-400/30 [box-shadow:0_0_18px_1px_rgba(34,211,238,0.25),inset_0_0_18px_1px_rgba(34,211,238,0.15)]" />
                    Play Demo
                  </a>
                  <a
                    href={p.details}
                    className="relative flex-1 select-none rounded-lg border border-purple-400/30 bg-white/5 px-3 py-2 text-center text-sm font-medium text-cyan-100 transition hover:scale-[1.02] hover:border-purple-300/60 hover:text-white"
                  >
                    <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-purple-400/30 [box-shadow:0_0_18px_1px_rgba(168,85,247,0.25),inset_0_0_18px_1px_rgba(168,85,247,0.15)]" />
                    View Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
