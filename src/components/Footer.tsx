import { Music, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gold text-zinc-900 py-1 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Music className="text-zinc-950 w-6 h-6" />
              <span className="text-zinc-950 font-bold text-xl tracking-tighter">WIKWILZ</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-800">
              Uganda's premier sound production company. Delivering crystal clear sound and immersive event experiences since inception.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-900 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-zinc-900 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-zinc-900 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-zinc-950 font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="text-zinc-800 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/equipment" className="text-zinc-800 hover:text-white transition-colors">Equipment</Link></li>
              <li><Link to="/booking" className="text-zinc-800 hover:text-white transition-colors">Services & Booking</Link></li>
              <li><Link to="/gallery" className="text-zinc-800 hover:text-white transition-colors">Event Gallery</Link></li>
              <li><Link to="/about" className="text-zinc-800 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-zinc-800 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-zinc-950 font-bold mb-6 uppercase tracking-widest text-xs">Our Services</h3>
            <ul className="space-y-4 text-sm text-zinc-800">
              <li>Weddings & Kwanjula</li>
              <li>Corporate Events</li>
              <li>Live Concerts</li>
              <li>Church Functions</li>
              <li>Equipment Rental</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-zinc-950 font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-zinc-800">
                <MapPin size={18} className="text-zinc-950 shrink-0" />
                <span>Kampala Makindye Lusaka, Uganda</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-800">
                <Phone size={18} className="text-zinc-950 shrink-0" />
                <span>+256 772 123 456</span>
              </li>
              <li className="flex items-center space-x-3 text-zinc-800">
                <Mail size={18} className="text-zinc-950 shrink-0" />
                <span>info@wikwilzproduction.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-zinc-950/10 text-center text-xs text-zinc-800">
          <p>&copy; {new Date().getFullYear()} WIKWILZ PRODUCTION. All rights reserved. Founded by William Wasswa Kibalama.</p>
        </div>
      </div>
    </footer>
  );
}
