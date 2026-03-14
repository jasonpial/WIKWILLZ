import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Equipment from './pages/Equipment';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/equipment" element={<Equipment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
