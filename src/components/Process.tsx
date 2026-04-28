import { motion } from 'motion/react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "We analyze your operations and identify the biggest automation opportunities.",
    icon: <Search className="w-6 h-6" />
  },
  {
    num: "02",
    title: "Design",
    description: "Architecting the logic, conversational flows, and integration mappings.",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    num: "03",
    title: "Build",
    description: "Development of the AI agents and connecting them with your CRM and tools.",
    icon: <Code2 className="w-6 h-6" />
  },
  {
    num: "04",
    title: "Launch",
    description: "Testing, deployment, and ongoing optimization for maximum ROI.",
    icon: <Rocket className="w-6 h-6" />
  }
];

export default function Process() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20 neon-card border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-sm">
          <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">How We Work</h4>
          <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">A Seamless Process</h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-[48px] left-0 w-full h-[2px] bg-gradient-to-r from-purple-500/50 via-cyan-400/50 to-blue-500/50 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] hidden md:block"></div>
          
          <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10 pt-4">
             {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative text-center flex flex-col items-center group mt-4 md:mt-0"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-[0_0_20px_rgba(34,211,238,0.2)] border border-cyan-400/30 bg-[#030014] text-cyan-400 group-hover:-translate-y-2 transition-transform duration-300`}>
                  {step.icon}
                  <div className="absolute -top-3 -right-3 text-xs font-bold text-black bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] rounded-full w-6 h-6 flex items-center justify-center border border-cyan-300">
                    {step.num}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
