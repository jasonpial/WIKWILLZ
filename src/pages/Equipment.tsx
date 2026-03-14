import { motion } from 'motion/react';
import { Speaker, Mic2, Zap, Music, Settings, Radio, Layers, Monitor, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    title: 'Weddings & Kwanjula',
    desc: 'Elegant sound solutions for your most special days. We ensure every vow is heard and every beat is felt.',
    features: ['Crystal clear vows', 'Background music', 'Reception sound', 'Wireless microphones']
  },
  {
    title: 'Corporate Events',
    desc: 'Professional audio for conferences, product launches, and corporate galas. Reliability is our priority.',
    features: ['Speech reinforcement', 'Presentation audio', 'Panel discussion setups', 'Recording services']
  },
  {
    title: 'Live Concerts',
    desc: 'High-power systems for festivals and outdoor performances. We bring the energy to your audience.',
    features: ['Line array systems', 'Monitor mixing', 'Backline support', 'Technical crew']
  },
  {
    title: 'Church Functions',
    desc: 'Dedicated sound support for conventions, crusades, and regular services. Clarity for the message.',
    features: ['Choir miking', 'Instrumental balance', 'Outdoor crusades', 'Streaming audio']
  }
];

const EQUIPMENT_CATEGORIES = [
  {
    title: 'Sound Systems',
    icon: <Speaker className="w-8 h-8" />,
    items: [
      { name: 'Line Array Systems', desc: 'High-power systems for large festivals and outdoor events.' },
      { name: 'Subwoofers', desc: 'Deep bass reinforcement for immersive sound experiences.' },
      { name: 'Stage Monitors', desc: 'Crystal clear monitoring for performers on stage.' },
      { name: 'Point Source Speakers', desc: 'Versatile speakers for corporate and intimate events.' }
    ],
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Mixing & Processing',
    icon: <Settings className="w-8 h-8" />,
    items: [
      { name: 'Digital Mixing Consoles', desc: 'State-of-the-art consoles for precise audio control.' },
      { name: 'Digital Signal Processors', desc: 'Advanced processing for optimal sound quality.' },
      { name: 'Audio Interfaces', desc: 'High-fidelity recording and playback solutions.' },
      { name: 'Stage Boxes', desc: 'Reliable digital snakes for clean signal routing.' }
    ],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Microphones & Wireless',
    icon: <Mic2 className="w-8 h-8" />,
    items: [
      { name: 'Wireless Vocal Mics', desc: 'Industry-standard wireless systems for clear vocals.' },
      { name: 'Instrument Microphones', desc: 'Specialized mics for capturing every instrument detail.' },
      { name: 'In-Ear Monitors', desc: 'Personal monitoring systems for professional performers.' },
      { name: 'Antenna Distribution', desc: 'Robust wireless coverage for any venue size.' }
    ],
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Lighting & Visuals',
    icon: <Zap className="w-8 h-8" />,
    items: [
      { name: 'Intelligent Moving Heads', desc: 'Dynamic lighting effects for high-energy events.' },
      { name: 'LED Wash Lights', desc: 'Vibrant color washes for stage and venue ambiance.' },
      { name: 'Lighting Controllers', desc: 'DMX control for synchronized light shows.' },
      { name: 'Atmospheric Effects', desc: 'Haze and fog machines to enhance lighting visuals.' }
    ],
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Equipment() {
  return (
    <div className="transition-colors duration-300">
      {/* Hero Section - Dark */}
      <section className="bg-zinc-950 text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-white"
            >
              SERVICES & <span className="text-gold">EQUIPMENT</span>
            </motion.h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We provide comprehensive sound production services and world-class equipment to ensure your event is a technical success.
            </p>
          </div>

          {/* Services Section - Cards on Dark */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Our Professional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-zinc-900 rounded-[2.5rem] border border-white/5 hover:border-gold/50 transition-all group"
                >
                  <h3 className="text-2xl font-bold mb-4 text-gold">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-gold" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Section - Light */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900">Premium Equipment Inventory</h2>
          </div>

          <div className="space-y-32">
            {EQUIPMENT_CATEGORIES.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="relative rounded-[3rem] shadow-2xl border border-zinc-200 w-full aspect-[4/3] object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="flex items-center space-x-4 text-gold">
                    {category.icon}
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">{category.title}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.items.map((item, i) => (
                      <div key={i} className="space-y-2">
                        <h4 className="text-lg font-bold text-zinc-900 flex items-center">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full mr-2" />
                          {item.name}
                        </h4>
                        <p className="text-zinc-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support Section - Dark */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-20 bg-zinc-900 rounded-[3rem] border border-white/5 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Technical Support & Logistics</h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-10">
                Beyond the gear, we provide expert technicians, sound engineers, and logistics support to ensure seamless execution from setup to strike.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                {[
                  { title: 'Expert Setup', desc: 'Precise positioning and tuning for every venue.' },
                  { title: 'Live Engineering', desc: 'Real-time audio mixing for flawless performances.' },
                  { title: 'Reliable Logistics', desc: 'On-time delivery and efficient strike operations.' }
                ].map((feature, i) => (
                  <div key={i} className="p-6 bg-zinc-950 rounded-2xl border border-white/5">
                    <h4 className="font-bold mb-2 text-gold">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
