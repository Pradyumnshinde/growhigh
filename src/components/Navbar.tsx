import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#030014]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'py-6 bg-transparent'}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
            <span className="text-xl font-black italic tracking-tighter text-white">GH</span>
          </div>
          GrowHigh
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#showcase" className="hover:text-white transition-colors">Solutions</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#case-study" className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors">
  Case Studies
</a>

        </div>

        <a 
          href="#contact" 
          className="hidden md:inline-flex px-6 py-2 bg-white border border-white hover:bg-zinc-200 transition-all rounded-full text-sm font-semibold text-black"
        >
          Book a Free Call
        </a>
      </div>
    </motion.nav>
  );
}
