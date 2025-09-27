import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useTheme } from './ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const footerRef = useRef(null);
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Reading Preparation', path: '/courses' },
    { name: 'Writing Skills', path: '/courses' },
    { name: 'Speaking Practice', path: '/courses' },
    { name: 'Listening Tests', path: '/courses' },
  ];

  const socialIcons = [
    { name: 'Facebook', icon: 'facebook', path: 'https://facebook.com' },
    { name: 'Instagram', icon: 'instagram', path: 'https://instagram.com' },
    { name: 'Twitter', icon: 'twitter', path: 'https://twitter.com' },
    { name: 'LinkedIn', icon: 'linkedin', path: 'https://linkedin.com' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      const elements = footerRef.current.querySelectorAll('.footer-item');
      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.35}s`;
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-800 to-gray-700'} text-white py-16 px-4 relative overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-teal-300 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-blue-300 animate-pulse-slow" style={{animationDelay: '2.25s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`${isDarkMode ? 'bg-gray-800/70' : 'bg-gray-700/70'} backdrop-blur-lg border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-600/50'} rounded-2xl p-8 shadow-2xl transform transition-all duration-700 hover:shadow-2xl hover:shadow-teal-500/10`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="footer-item opacity-0 transform translate-y-10 transition-all duration-700">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">IELTS Master</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Premier IELTS coaching center in Hyderabad with 98% success rate. Expert trainers, personalized attention, and proven results.
              </p>
              <div className="flex space-x-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white transition-all duration-300 hover:bg-teal-500 hover:scale-110 hover:shadow-lg hover:shadow-teal-400/30"
                    aria-label={social.name}
                  >
                    <i className={`fab fa-${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-item opacity-0 transform translate-y-10 transition-all duration-700">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name} className="overflow-hidden">
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-teal-300 transition-all duration-300 flex items-center group transform hover:translate-x-2"
                      style={{ transitionDelay: `${index * 25}ms` }}
                    >
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-teal-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-item opacity-0 transform translate-y-10 transition-all duration-700">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">IELTS Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service.name} className="overflow-hidden">
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-teal-300 transition-all duration-300 flex items-center group transform hover:translate-x-2"
                      style={{ transitionDelay: `${index * 15}ms` }}
                    >
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-teal-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-item opacity-0 transform translate-y-10 transition-all duration-700">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-teal-400 mr-3 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-300 group-hover:text-teal-300 transition-colors duration-300 pt-1.5">#123, Hitech City, Hyderabad</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-teal-400 mr-3 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-300 group-hover:text-teal-300 transition-colors duration-300">+91 40 9876 5432</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-teal-400 mr-3 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-300 group-hover:text-teal-300 transition-colors duration-300">info@ieltsmaster.com</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-teal-400 mr-3 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <ClockIcon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-300 group-hover:text-teal-300 transition-colors duration-300">Mon-Sun: 7AM - 10PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700/50 text-center footer-item opacity-0 transform translate-y-10 transition-all duration-700">
            <p className="text-gray-400 text-sm mb-4">
              &copy; {new Date().getFullYear()} IELTS Master Academy. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-teal-300 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-teal-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-teal-300 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-teal-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-teal-300 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-teal-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.05);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
        
        @media (min-width: 3840px) {
          footer {
            padding: 4rem 2rem;
          }
          .max-w-7xl {
            max-width: 2400px;
          }
          .text-2xl {
            font-size: 3rem;
          }
          .text-sm {
            font-size: 1.5rem;
          }
          .p-8 {
            padding: 4rem;
          }
          .gap-8 {
            gap: 4rem;
          }
          .w-10.h-10 {
            width: 5rem;
            height: 5rem;
          }
          .h-5.w-5 {
            width: 2rem;
            height: 2rem;
          }
          .w-2.h-2 {
            width: 1rem;
            height: 1rem;
          }
        }
        
        @media (max-width: 768px) {
          .grid-cols-1 {
            gap: 2rem;
          }
          .p-8 {
            padding: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .py-16 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;