import { useEffect, useState } from 'react';

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  if (!loading) return children;

  return (
    <div className="grid h-screen place-items-center bg-black text-cyan-200">
      <div className="relative">
        <div className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />
        <div className="relative rounded-2xl border border-cyan-400/30 bg-black/60 px-8 py-6 text-center shadow-[0_0_40px_rgba(34,211,238,0.25)]">
          <div className="font-mono text-lg tracking-widest text-cyan-200">
            Loading Dreams...
          </div>
          <div className="mt-4 h-1 w-64 overflow-hidden rounded bg-white/10">
            <div className="h-full w-1/3 animate-[loading_1.2s_ease-in-out_infinite] bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" />
          </div>
        </div>
      </div>
      <style>
        {`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(80%); }
          100% { transform: translateX(200%); }
        }
        `}
      </style>
    </div>
  );
}
