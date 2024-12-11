import { Mail, MapPin, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Get in Touch</h2>
        <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ContactCard
              icon={<Mail className="w-10 h-10 text-blue-400 hover:text-white transition-all" />}
              content="stuckinasquareone@gmail.com"
              href="mailto:stuckinasquareone@gmail.com"
            />
            <ContactCard
              icon={<Linkedin className="w-10 h-10 text-blue-600 hover:text-white transition-all" />}
              content="Sharan Irani"
              href="https://linkedin.com/in/sharan0025"
            />
            <ContactCard
              icon={<MapPin className="w-10 h-10 text-red-400 hover:text-white transition-all" />}
              content="Bangalore, India"
              href="https://maps.app.goo.gl/GsawVjZwxLqekwBB9"
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

function ContactCard({ icon, content, href }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-[1.005] hover:shadow transition-all duration-100"
    >
      {icon}
      <p className="text-gray-300 mt-4 text-center">{content}</p>
    </a>
  );
}




function Footer() {
  return (
    <footer className="mt-16 py-6 text-center text-gray-400">
      <p className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-x-2 sm:space-y-0 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
        Made possible{' '}
        <span
          className="text-red-500 text-lg sm:text-xl mx-1 font-semibold"
          role="img"
          aria-label="love"
        >
          by passion, dedication, and plenty of coffee ☕
        </span>{' '}
      </p>
    </footer>
  );
}
