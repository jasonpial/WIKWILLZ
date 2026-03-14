import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Award, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="transition-colors duration-300">
      {/* Hero/Story Section */}
      <section className="bg-zinc-950 text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Our Story</h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white">WIKWILZ PRODUCTION</h1>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Founded by <span className="text-white font-semibold">William Wasswa Kibalama</span>, WIKWILZ PRODUCTION started with a simple vision: to bring world-class sound engineering to every event in Uganda.
                </p>
                <p>
                  Based in the heart of Kampala, in Makindye Lusaka, we have grown from a small equipment rental service into a full-scale production house. Our journey has been defined by a relentless pursuit of technical perfection and a deep understanding of the Ugandan events landscape.
                </p>
                <p>
                  Whether it's an intimate wedding, a traditional Kwanjula, or a massive outdoor concert, we treat every event with the same level of professional dedication. We believe that sound is the heartbeat of any function, and we are here to make sure that heart beats strong.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=1000"
                  alt="Studio Setup"
                  className="w-full h-full object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-3xl shadow-2xl hidden md:block">
                <div className="text-4xl font-black mb-1 text-white">10+</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-80 text-white">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Light */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Award />, label: "Events Covered", value: "500+" },
              { icon: <Users />, label: "Happy Clients", value: "450+" },
              { icon: <Clock />, label: "Hours of Sound", value: "10k+" },
              { icon: <MapPin />, label: "Locations", value: "25+" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-zinc-50 rounded-3xl border border-zinc-200">
                <div className="text-gold flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1 text-zinc-900">{stat.value}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes - Dark */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Behind The Scenes</h2>
            <p className="text-gray-400">Our dedicated team at work, ensuring every detail is perfect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/5">
              <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800" alt="Team Work" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/5">
              <img src="https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=800" alt="Technical Setup" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/5">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" alt="Live Event" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info - Light */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 border border-zinc-200 shadow-xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-zinc-900">Get In Touch</h2>
              <p className="text-zinc-600">Visit us or reach out for a custom quotation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin size={32} />
                </div>
                <h4 className="font-bold mb-2 text-zinc-900">Our Location</h4>
                <p className="text-zinc-600 text-sm">Kampala Makindye Lusaka, Uganda</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone size={32} />
                </div>
                <h4 className="font-bold mb-2 text-zinc-900">Call Us</h4>
                <p className="text-zinc-600 text-sm">+256 772 123 456</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail size={32} />
                </div>
                <h4 className="font-bold mb-2 text-zinc-900">Email Us</h4>
                <p className="text-zinc-600 text-sm">info@wikwilzproduction.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
