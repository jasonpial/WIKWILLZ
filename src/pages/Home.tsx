import { motion } from "framer-motion";
import { ArrowRight, Music, Speaker, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/videos/hero-video.mp4";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute w-full h-full object-cover object-center opacity-60"
>
  <source src={heroVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none text-white">
              CRYSTAL CLEAR <br />
              <span className="text-gold">SOUND PRODUCTION</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              Uganda's premier events sound specialists. Based in Kampala Makindye Lusaka.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/booking"
                className="bg-gold-dark hover:bg-gold text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center group"
              >
                Book Your Event <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/gallery"
                className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gold/10 blur-2xl rounded-full" />
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800"
                  alt="William Wasswa Kibalama"
                  className="relative rounded-2xl shadow-2xl border border-zinc-200 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-xs font-bold tracking-[0.3em] text-gold uppercase">The Visionary</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">William Wasswa Kibalama</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Executive Chief Producer and Founder of WIKWILZ PRODUCTION. With over a decade of experience in the Ugandan entertainment industry, William has built a reputation for technical excellence and artistic precision.
              </p>
              <p className="text-zinc-500 text-lg leading-relaxed italic">
                "Our mission is simple: to ensure every voice is heard and every beat is felt. We don't just provide sound; we create atmospheres."
              </p>
              <Link to="/about" className="text-gold font-bold flex items-center hover:underline">
                Read Our Story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-zinc-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gold">Professional Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We cover all types of events with state-of-the-art equipment and expert technicians.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Music />, title: "Weddings & Kwanjula", desc: "Elegant sound solutions for your most special days." },
              { icon: <Zap />, title: "Corporate Events", desc: "Professional audio for conferences, launches, and galas." },
              { icon: <Speaker />, title: "Live Concerts", desc: "High-power systems for festivals and outdoor performances." }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-zinc-900 border border-white/5 rounded-3xl hover:border-gold/50 transition-all"
              >
                <div className="w-12 h-12 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase Section */}
      <section className="py-24 bg-zinc-50 overflow-hidden transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xs font-bold tracking-[0.3em] text-gold uppercase mb-4">The Gear</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900">WORLD-CLASS <br />EQUIPMENT</h3>
            </div>
            <p className="text-zinc-600 max-w-sm text-right hidden md:block">
              We invest in the best technology to ensure your event sounds as good as it looks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 relative group rounded-3xl overflow-hidden aspect-square md:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200" 
                alt="Mixing Console" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <span className="text-gold font-bold text-xs uppercase tracking-widest">Digital Precision</span>
                <h4 className="text-2xl font-bold text-white">High-End Mixing</h4>
              </div>
            </div>
            <div className="relative group rounded-3xl overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80&w=800" 
                alt="Speakers" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-lg font-bold text-white">Line Array Systems</h4>
              </div>
            </div>
            <div className="relative group rounded-3xl overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=800" 
                alt="Microphones" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-lg font-bold text-white">Wireless Mics</h4>
              </div>
            </div>
            <div className="md:col-span-2 relative group rounded-3xl overflow-hidden aspect-[16/9]">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" 
                alt="Lighting" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-xl font-bold text-white">Intelligent Lighting</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
