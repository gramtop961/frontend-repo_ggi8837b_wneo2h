import { useState } from 'react';
import { Discord, Instagram, Link as LinkIcon, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a full app, this would POST to a backend. For now, simulate success.
    setTimeout(() => setSent(true), 500);
  };

  return (
    <section id="contact" className="relative bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.12),transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <h2 className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Contact
        </h2>
        <p className="mt-2 text-cyan-100/80">Let’s collaborate on your next visual novel.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-cyan-100/80">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-cyan-400/20 bg-black/40 px-3 py-2 text-cyan-100 outline-none ring-1 ring-transparent transition focus:border-cyan-300/40 focus:ring-cyan-300/30"
                placeholder="Ada Lovelace"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-cyan-100/80">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-cyan-400/20 bg-black/40 px-3 py-2 text-cyan-100 outline-none ring-1 ring-transparent transition focus:border-cyan-300/40 focus:ring-cyan-300/30"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-cyan-100/80">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-cyan-400/20 bg-black/40 px-3 py-2 text-cyan-100 outline-none ring-1 ring-transparent transition focus:border-cyan-300/40 focus:ring-cyan-300/30"
              placeholder="Tell me about your project..."
            />
          </div>
          <button type="submit" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-cyan-400/30 bg-white/5 px-5 py-2.5 font-semibold text-cyan-100 backdrop-blur transition hover:scale-[1.02] hover:border-cyan-300/60 hover:text-white">
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
            <Send size={18} className="text-cyan-300" />
            <span className="relative z-10">Send</span>
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-cyan-400/40 [box-shadow:0_0_20px_2px_rgba(34,211,238,0.25),inset_0_0_20px_2px_rgba(34,211,238,0.15)]" />
          </button>
          {sent && (
            <p className="text-sm text-emerald-300">Thanks! Your message has been sent (simulation).</p>
          )}
        </form>

        <div className="mt-8 flex items-center gap-4">
          <a href="https://discord.com" target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-white/5 px-3 py-2 text-cyan-100 transition hover:scale-105 hover:border-cyan-300/60">
            <Discord size={18} className="text-cyan-300" /> Discord
            <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-cyan-400/30 [box-shadow:0_0_16px_1px_rgba(34,211,238,0.25),inset_0_0_16px_1px_rgba(34,211,238,0.15)]" />
          </a>
          <a href="https://itch.io" target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-2 rounded-lg border border-purple-400/20 bg-white/5 px-3 py-2 text-cyan-100 transition hover:scale-105 hover:border-purple-300/60">
            <LinkIcon size={18} className="text-purple-300" /> Itch.io
            <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-purple-400/30 [box-shadow:0_0_16px_1px_rgba(168,85,247,0.25),inset_0_0_16px_1px_rgba(168,85,247,0.15)]" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-2 rounded-lg border border-pink-400/20 bg-white/5 px-3 py-2 text-cyan-100 transition hover:scale-105 hover:border-pink-300/60">
            <Instagram size={18} className="text-pink-300" /> Instagram
            <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-pink-400/30 [box-shadow:0_0_16px_1px_rgba(236,72,153,0.25),inset_0_0_16px_1px_rgba(236,72,153,0.15)]" />
          </a>
        </div>
      </div>
    </section>
  );
}
