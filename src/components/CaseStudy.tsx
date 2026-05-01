import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const features = [
  "24/7 Support",
  "Auto Booking",
  "Data Capture",
  "Time Saving"
];

export default function CaseStudy() {
  return (
    <section id="case-study"className="py-24 relative z-10 border-t border-white/5 bg-gradient-to-b from-[#030014] to-cyan-900/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center neon-card rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(34,211,238,0.05)] relative overflow-hidden group">
          
          {/* Neon backdrop inside card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-1000"></div>

          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full w-fit mb-6 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
               <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">Premium Case Study</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-md">
              Healthcare<br/>Automation System
            </h3>
            
            <p className="text-slate-300 text-lg mb-8 leading-relaxed font-light">
              Designed and implemented an AI-powered WhatsApp chatbot system for a healthcare clinic to automate appointment booking and patient communication.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                  <span className="text-sm font-medium text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/10 inline-block">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-xl border border-cyan-500/30 font-bold text-sm shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                +300% Efficiency Increased
              </div>
            </div>
          </motion.div>

          {/* Right Video Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
             <div className="relative p-2 md:p-4 neon-card rounded-3xl border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
               <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black relative shadow-[inset_0_0_20px_rgba(0,0,0,1)] border border-white/5">
                  <iframe 
                    src="https://www.loom.com/embed/f9034a3d8b3e4d69986a371e5597bed4?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" 
                    frameBorder="0" 
                    allowFullScreen 
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
