import { motion } from 'motion/react';
import { ArrowRight, Bot, MessageSquare, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full w-fit mb-8 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,1)]"></span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">AI Lab & Automation Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-white drop-shadow-lg">
            We Build AI Systems<br className="hidden md:block"/> That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Work While<br className="hidden md:block"/> You Sleep.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-light">
            Automate operations, capture leads, and scale faster with intelligent AI solutions designed for the modern enterprise.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-cyan-400 hover:bg-cyan-300 text-black rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#showcase" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-medium rounded-xl transition-all flex items-center justify-center backdrop-blur-md">
              View Solutions
            </a>
          </div>

          <div className="flex items-center gap-5 mt-8 md:mt-16 pt-8 border-t border-white/10">
             <div className="w-12 h-12 rounded-full border border-cyan-500/30 flex-shrink-0 overflow-hidden bg-black shadow-[0_0_15px_rgba(34,211,238,0.2)]">
               <img src="/founder.jpg" alt="Pradyumn" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
             </div>
             <div>
               <p className="text-sm text-slate-400 italic leading-relaxed mb-1">
                 "My goal is simple — replace manual work with smart automation."
               </p>
               <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">Pradyumn - Founder, GrowHigh</p>
             </div>
          </div>
        </motion.div>

        {/* Professional Minimal UI Elements side */}
        <div className="relative h-[600px] hidden lg:block">
          {/* Main big graphic component */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] neon-card rounded-3xl p-8 shadow-2xl"
          >
             {/* Fake dashboard UI */}
             <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                <div>
                   <h3 className="text-sm font-bold text-white">System Dashboard</h3>
                   <p className="text-xs text-cyan-400">Live analytics</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                   <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse drop-shadow-[0_0_5px_rgba(34,211,238,1)]"></div>
                   Active
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/40 border border-white/10 p-4 rounded-2xl hover:border-cyan-500/30 transition-colors">
                   <div className="flex items-center gap-3 mb-2">
                     <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                       <Bot className="w-4 h-4" />
                     </div>
                     <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Agents</span>
                   </div>
                   <div className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">4</div>
                </div>
                <div className="bg-black/40 border border-white/10 p-4 rounded-2xl hover:border-purple-500/30 transition-colors">
                   <div className="flex items-center gap-3 mb-2">
                     <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                       <MessageSquare className="w-4 h-4" />
                     </div>
                     <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Messages</span>
                   </div>
                   <div className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">128</div>
                </div>
             </div>

             <div className="space-y-4">
               <div className="p-4 rounded-xl border border-white/10 bg-black/40 shadow-sm flex gap-4 items-center hover:border-cyan-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                       <span className="text-sm font-semibold text-white">Lead Conversion</span>
                       <span className="text-sm font-bold text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">+28%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
                       <div className="bg-cyan-400 h-1.5 rounded-full w-[78%] shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                    </div>
                  </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
