import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: "ef042502-9b53-424e-be47-69ad37c8b41d",
          subject: "New Contact Form Submission from GrowHigh",
          from_name: formData.name,
          ...formData
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-[3rem] p-8 md:p-16 border border-white/10 relative overflow-hidden neon-card shadow-sm"
        >
          {/* Ambient Glows */}
          <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* CTA Content */}
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-md">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Scale with AI?</span>
              </h2>
              <p className="text-xl text-slate-300 font-light mb-10 leading-relaxed">
                Stop wasting time on manual tasks. Book a call to see how we can automate your business and drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/917058054063" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black/50 border border-cyan-500/30 rounded-xl font-medium hover:bg-cyan-500/10 hover:border-cyan-500/50 transition flex items-center justify-center gap-2 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  <MessageCircle className="w-5 h-5 text-cyan-400" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-black/40 p-8 rounded-3xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <form className="space-y-4" onSubmit={handleSubmit}>
                {status === 'success' && (
                  <div className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-3 rounded-xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-slate-600"
                    placeholder="john@company.com"
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-slate-600 resize-none"
                    placeholder="Tell us about your processes..."
                    disabled={status === 'loading'}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 mt-2 bg-cyan-400 hover:bg-cyan-300 text-black rounded-xl font-bold shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
            
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/917058054063"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_4px_14px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform z-50 hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </section>
  );
}
