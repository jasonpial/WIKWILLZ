import { motion } from 'motion/react';

const GALLERY_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800', title: 'Corporate Gala', category: 'Corporate' },
  { url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', title: 'Royal Wedding', category: 'Wedding' },
  { url: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800', title: 'Outdoor Festival', category: 'Concert' },
  { url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80&w=800', title: 'Night Club Event', category: 'Party' },
  { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800', title: 'Church Convention', category: 'Church' },
  { url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800', title: 'Live Band Setup', category: 'Concert' },
  { url: 'https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=800', title: 'Stage Lighting', category: 'Technical' },
  { url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800', title: 'Kwanjula Ceremony', category: 'Wedding' },
  { url: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=800', title: 'Event Hall Setup', category: 'Corporate' },
  { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=800', title: 'Celebration Night', category: 'Party' },
  { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', title: 'Electronic Night', category: 'Concert' },
  { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800', title: 'Private Function', category: 'Party' },
];

export default function Gallery() {
  return (
    <div className="transition-colors duration-300">
      {/* Hero Section - Dark */}
      <section className="bg-zinc-950 text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">Our Work</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A glimpse into the diverse events and functions we've powered across Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Light */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-200"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">{item.category}</span>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}