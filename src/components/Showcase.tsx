import { motion } from 'motion/react';
import { MessageCircle, Zap, Users, BarChart3, ArrowUpRight } from 'lucide-react';

const solutions = [
  {
    title: "WhatsApp AI Chatbot",
    icon: <MessageCircle className="w-6 h-6" />,
    description: "Intelligent conversational agents that qualify leads, answer FAQs, and drive sales automatically 24/7.",
    color: "bg-cyan-500/10 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.15)]",
    hoverBorder: "hover:border-cyan-400/50 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
  },
  {
    title: "Automation Workflows",
    icon: <Zap className="w-6 h-6" />,
    description: "Connect your toolstack. Eliminate manual data entry and let machines handle the repetitive tasks.",
    color: "bg-purple-500/10 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    hoverBorder: "hover:border-purple-400/50 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
  },
  {
    title: "Lead Generation",
    icon: <Users className="w-6 h-6" />,
    description: "AI-driven pipelines that prospect, engage, and nurture leads to build your sales funnel on autopilot.",
    color: "bg-fuchsia-500/10 text-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.15)]",
    hoverBorder: "hover:border-fuchsia-400/50 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(217,70,239,0.2)]"
  },
  {
    title: "CRM Automation",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Self-updating CRMs that track customer interactions, score leads, and trigger follow-up sequences.",
    color: "bg-blue-500/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    hoverBorder: "hover:border-blue-400/50 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
  }
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">What We Build</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">Solutions That Scale</h3>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group flex-none w-[300px] lg:w-auto snap-center neon-card rounded-2xl p-6 transition-all duration-300 shadow-sm cursor-pointer relative overflow-hidden ${solution.hoverBorder}`}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${solution.color}`}>
                {solution.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{solution.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
