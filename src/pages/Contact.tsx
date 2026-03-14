import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-zinc-950 text-white pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white"
          >
            GET IN <span className="text-gold">TOUCH</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to elevate your event? Reach out to us for a custom quotation or technical consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gold/10 text-gold rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Call Us</h3>
                  <p className="text-gray-400">+256 772 123 456</p>
                  <p className="text-gray-400">+256 701 987 654</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gold/10 text-gold rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-gray-400">info@wikwilzproduction.com</p>
                  <p className="text-gray-400">bookings@wikwilzproduction.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-gold/10 text-gold rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                  <p className="text-gray-400">Kampala Makindye Lusaka</p>
                  <p className="text-gray-400">P.O. Box 1234, Kampala, Uganda</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold mb-6">Follow Our Journey</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <Instagram />, label: 'Instagram' },
                  { icon: <Facebook />, label: 'Facebook' },
                  { icon: <Twitter />, label: 'Twitter' }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-12 h-12 bg-white/5 hover:bg-gold hover:text-white transition-all rounded-xl flex items-center justify-center text-gray-400"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors text-white"
                  placeholder="Event Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-zinc-950 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-colors resize-none text-white"
                  placeholder="Tell us about your event..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gold-dark hover:bg-gold text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center group"
              >
                Send Message <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 h-[400px] rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000"
        >
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
            alt="Map Location" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </div>
  );
}
