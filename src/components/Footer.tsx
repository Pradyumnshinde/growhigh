export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 text-center md:text-left bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          AI Automation for Modern Businesses • ©2026 GrowHigh
        </p>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active Workflows:</span>
            <span className="text-xs font-mono font-bold text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">4</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Hours Saved:</span>
            <span className="text-xs font-mono font-bold text-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">340</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
