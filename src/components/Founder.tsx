import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Founder() {
  return (
    <section className="py-24 relative z-10 border-t border-zinc-800/50 bg-zinc-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900 rounded-[2rem] p-8 md:p-16 border border-zinc-800 relative overflow-hidden text-center md:text-left shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full border border-zinc-700 p-1">
               <div className="w-full h-full rounded-full overflow-hidden bg-zinc-800">
                <img 
                  src="/founder.jpg" 
                  alt="Founder" 
                  className="w-full h-full object-cover transition-all duration-700 opacity-90"
                />
              </div>
            </div>
            
            <div className="flex-1">
              <Quote className="w-8 h-8 text-zinc-700 mb-4 mx-auto md:mx-0 fill-current" />
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-6">
                "I'm the founder of GrowHigh, focused on building practical AI systems that help businesses automate operations and scale efficiently. My goal is simple — replace manual work with smart automation."
              </p>
              <div>
                <h4 className="text-zinc-50 font-bold tracking-wide">Pradyumn</h4>
                <p className="text-sm font-semibold text-zinc-400 mt-1">Founder, GrowHigh</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
