import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Sharan Irani
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Full Stack Ninja, IoT obsessed techie and a linux nerd.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Crafting beautiful, user-centric web experiences with modern technologies.
            Passionate about clean code and innovative solutions.
          </p>
          <div className="flex justify-center space-x-6">
            <SocialLink href="https://github.com/LuckySilver0021" icon={<Github />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/sharan0025" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:stuckinasquareone@gmail.com" icon={<Mail />} label="Email" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
}