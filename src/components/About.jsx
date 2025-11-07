export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(147,51,234,0.15),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-[0_0_40px_rgba(168,85,247,0.15)]">
          <h2 className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-cyan-100/90">
            I’m a passionate creator of immersive visual novel stories, blending emotion-driven narratives with striking neon aesthetics. I build experiences where choices matter and characters feel alive.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: 'Storytelling',
                desc: 'Branching narratives, pacing, and meaningful player choice.',
              },
              {
                title: 'Character Design',
                desc: 'Expressive portraits, silhouettes, and memorable personalities.',
              },
              {
                title: "Ren'Py Scripting",
                desc: 'Dialogues, menus, variables, and save systems with Python logic.',
              },
              {
                title: 'UI Art',
                desc: 'Diegetic neon HUDs, animated buttons, and cohesive theming.',
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-white/5 p-5 backdrop-blur transition-transform hover:scale-[1.01]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15" />
                <div className="relative">
                  <h3 className="font-semibold text-cyan-100">{s.title}</h3>
                  <p className="mt-1 text-sm text-cyan-100/80">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
