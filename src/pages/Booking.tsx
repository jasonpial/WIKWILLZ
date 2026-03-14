import React from 'react';
import { motion } from 'motion/react';
import { Check, Calendar, User, Mail, Phone, MapPin, CreditCard } from 'lucide-react';
import { SERVICE_PLANS, EVENT_TYPES } from '../constants';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Booking() {
  const [selectedPlan, setSelectedPlan] = React.useState(SERVICE_PLANS[0]);
  const [formData, setFormData] = React.useState({
    clientName: '',
    email: '',
    phone: '',
    eventType: EVENT_TYPES[0],
    eventDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'bookings'), {
        ...formData,
        planId: selectedPlan.id,
        depositAmount: selectedPlan.deposit,
        status: 'pending',
        createdAt: new Date().toISOString(),
        serverTimestamp: serverTimestamp()
      });
      
      setIsSuccess(true);
      setFormData({
        clientName: '',
        email: '',
        phone: '',
        eventType: EVENT_TYPES[0],
        eventDate: '',
        message: ''
      });
    } catch (error) {
      console.error("Error adding booking: ", error);
      alert("There was an error submitting your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="transition-colors duration-300">
      {/* Hero Section - Dark */}
      <section className="bg-zinc-950 text-white pt-32 pb-24 relative overflow-hidden">
        {/* Background Decorative Image */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200" 
            alt="Background Decor" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">Book Our Services</h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Choose a plan that fits your event and secure your date with a deposit.
            </p>
          </div>
        </div>
      </section>

      {/* Plans & Form Section - Light */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {SERVICE_PLANS.map((plan) => (
              <motion.div
                key={plan.id}
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-3xl border transition-all cursor-pointer ${
                  selectedPlan.id === plan.id
                    ? 'border-gold bg-gold/5 shadow-xl'
                    : 'border-zinc-200 bg-white hover:border-gold/50'
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                <h3 className={`text-2xl font-bold mb-2 ${selectedPlan.id === plan.id ? 'text-zinc-900' : 'text-zinc-900'}`}>{plan.name}</h3>
                <div className="text-3xl font-black text-gold mb-4">{plan.price}</div>
                <p className="text-zinc-500 text-sm mb-6">{plan.description}</p>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-zinc-600">
                      <Check className="text-gold w-4 h-4 mr-2 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-zinc-100">
                  <div className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Required Deposit</div>
                  <div className="text-xl font-bold text-zinc-900">UGX {plan.deposit.toLocaleString()}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-gold-dark text-white">
                <h2 className="text-3xl font-bold mb-6">Reservation Details</h2>
                <p className="mb-8 opacity-90">
                  Fill in the form to request a booking for the <span className="font-bold underline">{selectedPlan.name}</span>. Our team will contact you within 24 hours to confirm.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <span>Kampala Makindye Lusaka</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <CreditCard size={20} />
                    </div>
                    <span>Secure Deposit Payment</span>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-zinc-900">Booking Requested!</h3>
                    <p className="text-zinc-500 mb-8">
                      Thank you for choosing WIKWILZ. We've received your request and will be in touch shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-gold font-bold hover:underline"
                    >
                      Make another booking
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                        <input
                          required
                          type="text"
                          placeholder="Full Name"
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-10 pr-4 focus:border-gold outline-none transition-all text-zinc-900"
                          value={formData.clientName}
                          onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        />
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                        <input
                          required
                          type="email"
                          placeholder="Email Address"
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-10 pr-4 focus:border-gold outline-none transition-all text-zinc-900"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                        <input
                          required
                          type="tel"
                          placeholder="Phone Number"
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-10 pr-4 focus:border-gold outline-none transition-all text-zinc-900"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                          <select
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 focus:border-gold outline-none transition-all appearance-none text-zinc-900"
                            value={formData.eventType}
                            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          >
                            {EVENT_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                          </select>
                        </div>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
                          <input
                            required
                            type="date"
                            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-10 pr-4 focus:border-gold outline-none transition-all text-zinc-900"
                            value={formData.eventDate}
                            onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold-dark hover:bg-gold text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 flex items-center justify-center"
                    >
                      {isSubmitting ? "Processing..." : `Confirm & Pay Deposit (UGX ${selectedPlan.deposit.toLocaleString()})`}
                    </button>
                    <p className="text-[10px] text-center text-zinc-400 uppercase tracking-widest">
                      By clicking, you agree to our terms of service and deposit policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
