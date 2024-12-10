import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactCard } from './ContactCard';
import { Footer } from './Footer';

export function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Get in Touch</h2>
        <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              content="stuckinasquareone@gmail.com"
              href="mailto:stuckinasquareone@gmail.com"
            />
            <ContactCard
              icon={<Phone className="w-6 h-6" />}
              title="Phone"
              content="+91 8130191719"
              href="tel:+91 8130191719"
            />
            <ContactCard
              icon={<MapPin className="w-6 h-6" />}
              title="Location"
              content="Bangalore, India"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}