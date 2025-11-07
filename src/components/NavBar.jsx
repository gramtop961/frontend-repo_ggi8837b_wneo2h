import { useCallback } from 'react';
import { Home, User, FolderOpen, Mail } from 'lucide-react';

export default function NavBar() {
  const onNav = useCallback((e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const LinkItem = ({ href, label, Icon }) => (
    <a
      href={href}
      onClick={onNav}
      className="group relative inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-cyan-100/80 transition hover:text-white"
    >
      <Icon size={16} className="text-cyan-300/80" />
      <span>{label}</span>
      <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/10 [box-shadow:inset_0_0_12px_rgba(34,211,238,0.2)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-0 left-2 right-2 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 shadow-[0_0_12px_rgba(168,85,247,0.5)] transition-transform duration-300 group-hover:scale-x-100" />
    </a>
  );

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="mt-4 mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.25)]">
          <a
            href="#home"
            onClick={onNav}
            className="group relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-cyan-100"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">VN Dev</span>
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-cyan-400/20 [box-shadow:0_0_18px_rgba(34,211,238,0.25)] opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <div className="flex items-center gap-1">
            <LinkItem href="#home" label="Home" Icon={Home} />
            <LinkItem href="#about" label="About" Icon={User} />
            <LinkItem href="#projects" label="Projects" Icon={FolderOpen} />
            <LinkItem href="#contact" label="Contact" Icon={Mail} />
          </div>
        </nav>
      </div>
    </header>
  );
}
