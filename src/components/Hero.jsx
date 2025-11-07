import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onViewWorks }) {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Writing stories that touch hearts 💙';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i += 1;
      if (i === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle gradient glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(147,51,234,0.25),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.2),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300/90">Neon • Cyberpunk • Emotion</p>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl md:text-7xl">
          <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.45)]">
            Visual Novel Game Developer
          </span>
        </h1>

        <div className="mt-6 text-base sm:text-lg md:text-xl">
          <span className="font-mono text-cyan-200/90">
            {typedText}
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan-300 align-[-2px]" />
          </span>
        </div>

        <div className="mt-10">
          <button
            onClick={onViewWorks}
            className="group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-white/5 px-6 py-3 font-semibold text-cyan-100 backdrop-blur transition hover:scale-[1.02] hover:border-cyan-300/60 hover:text-white"
          >
            <span className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
            <span className="relative z-10">View My Works</span>
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-cyan-400/40 [box-shadow:0_0_20px_2px_rgba(34,211,238,0.25),inset_0_0_20px_2px_rgba(34,211,238,0.15)]" />
          </button>
        </div>
      </div>
    </section>
  );
}
