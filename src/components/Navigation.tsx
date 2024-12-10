import React, { useState, useEffect } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle navigation and smooth scroll
  const handleNavigation = (e, href) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const targetOffsetTop = targetElement.offsetTop;

      // Log the targetOffsetTop to debug if necessary
      

      // Update the URL hash without reloading
      window.location.hash = href;

      // Adjust the scroll position if necessary (e.g., if navbar height is not 64px)
      const navbarHeight = 64; // Adjust this if your navbar is taller
      window.scrollTo({
        top: targetOffsetTop - navbarHeight, // Adjust for the fixed navbar height
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Navigation Links (Center-aligned on Desktop & Mobile) */}
          <div className="flex items-baseline space-x-8 w-full justify-center">
            <NavLink href="#about" onClick={(e) => handleNavigation(e, '#about')}>
              About
            </NavLink>
            <NavLink href="#projects" onClick={(e) => handleNavigation(e, '#projects')}>
              Projects
            </NavLink>
            <NavLink href="#skills" onClick={(e) => handleNavigation(e, '#skills')}>
              Skills
            </NavLink>
            <NavLink href="#contact" onClick={(e) => handleNavigation(e, '#contact')}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, onClick, children }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white font-bold px-3 py-2 rounded-md text-sm md:text-base transition-colors duration-200"
    >
      {children}
    </a>
  );
}


