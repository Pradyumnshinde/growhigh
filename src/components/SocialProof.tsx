import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Director, CityCare Hospital",
    text: "GrowHigh completely transformed our clinic's patient intake. Their WhatsApp booking automation reduced our admin workload by 60% and practically eliminated appointment no-shows. Extremely professional team."
  },
  {
    name: "Elena Rodriguez",
    role: "Operations Head, TechFlow",
    text: "Implementing their CRM automation workflows allowed us to scale our lead generation efforts without adding any extra headcount. They delivered a system that works flawlessly 24/7."
  }
];

export default function SocialProof() {
  return (
    <section className="py-24 relative z-10 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">Trusted by Forward-Thinking Teams</h2>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="neon-card p-8 md:p-10 rounded-3xl border border-white/5 shadow-sm relative group hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all"
            >
              <div className="flex gap-1 mb-6 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]">
                 {[...Array(5)].map((_, j) => (
                   <Star key={j} className="w-5 h-5 fill-current" />
                 ))}
              </div>
              <p className="text-slate-300 mb-8 font-light leading-relaxed text-lg">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">{t.name}</h4>
                <p className="text-sm font-medium text-slate-500 mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
