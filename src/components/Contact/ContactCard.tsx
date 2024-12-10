import React from 'react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

export function ContactCard({ icon, title, content, href }: ContactCardProps) {
  const CardContent = () => (
    <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg bg-gray-900/50 hover:bg-gray-900/70 transition-colors">
      <div className="text-blue-400 mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
      <p className="text-gray-400">{content}</p>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:transform hover:scale-105 transition-transform">
      <CardContent />
    </a>
  ) : (
    <div className="hover:transform hover:scale-105 transition-transform">
      <CardContent />
    </div>
  );
}