import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, ChevronDown, HomeIcon, BookOpen, Users, Star } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon className="h-4 w-4" /> },
    { 
      name: 'Courses', 
      path: '/courses',
      hasDropdown: true
    },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigateTo = (path) => {
    setMobileMenuOpen(false);
    
    if (location.pathname === path) {
      scrollToTop();
    } else {
      navigate(path);
      setTimeout(() => {
        scrollToTop();
      }, 100);
    }
  };

  const scrollToFAQ = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const faqSection = document.getElementById('faq-section');
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      const faqSection = document.getElementById('faq-section');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 group cursor-pointer"
            onClick={() => navigateTo('/')}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white font-bold w-5 h-5" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                IELTS Mastery
              </span>
              <span className="text-xs text-blue-600 font-medium">ACADEMY</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div 
                    className="relative group"
                    onMouseEnter={() => setCoursesOpen(true)}
                    onMouseLeave={() => setCoursesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                      <span>{link.name}</span>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    
                    <AnimatePresence>
                      {coursesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 p-3"
                        >
                          {[
                            { name: 'IELTS Academic', icon: '🎓', desc: 'University admissions' },
                            { name: 'IELTS General', icon: '🌍', desc: 'Immigration & work' },
                            { name: 'Speaking Mastery', icon: '💬', desc: 'Fluency & pronunciation' },
                            { name: 'Writing Excellence', icon: '✍️', desc: 'Task 1 & 2 mastery' },
                            { name: 'Intensive Crash Course', icon: '⚡', desc: 'Fast-track preparation' },
                            { name: 'VIP One-on-One', icon: '⭐', desc: 'Personalized coaching' }
                          ].map((course) => (
                            <Link
                              key={course.name}
                              to={`/courses#${course.name.toLowerCase().replace(/\s+/g, '-')}`}
                              className="flex items-start px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group"
                              onClick={() => {
                                setCoursesOpen(false);
                                scrollToTop();
                              }}
                            >
                              <span className="text-lg mr-3 group-hover:scale-110 transition-transform">{course.icon}</span>
                              <div>
                                <div className="font-semibold">{course.name}</div>
                                <div className="text-xs text-gray-500 group-hover:text-blue-500">{course.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => navigateTo(link.path)}
                    className={`flex items-center space-x-1 px-3 py-2 font-medium transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.icon && <span className="mr-1">{link.icon}</span>}
                    <span>{link.name}</span>
                  </button>
                )}
              </div>
            ))}
            
            {/* FAQ Link */}
            <button
              onClick={scrollToFAQ}
              className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              <span className="mr-2">❓</span>
              FAQ
            </button>
            
            <div className="flex items-center space-x-4 ml-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-3 py-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 rounded-lg shadow-md"
              >
                <Star className="h-4 w-4 mr-1 fill-current" />
                <span className="font-semibold text-sm">7.5+ Avg Score</span>
              </motion.div>
              
              <a
                href="tel:+919876543210"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 98765 43210
              </a>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => navigateTo('/contact')}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-blue-400 transition-all duration-300"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Free Demo
                </button>
              </motion.div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden bg-white shadow-2xl rounded-xl mt-4 overflow-hidden border border-gray-100"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setCoursesOpen(!coursesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
                        >
                          <span className="flex items-center">
                            {link.icon && <span className="mr-3">{link.icon}</span>}
                            {link.name}
                          </span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${coursesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {coursesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 space-y-1 mt-2"
                            >
                              {[
                                { name: 'IELTS Academic', icon: '🎓' },
                                { name: 'IELTS General', icon: '🌍' },
                                { name: 'Speaking Mastery', icon: '💬' },
                                { name: 'Writing Excellence', icon: '✍️' }
                              ].map((course) => (
                                <button
                                  key={course.name}
                                  onClick={() => {
                                    navigateTo('/courses');
                                    setMobileMenuOpen(false);
                                  }}
                                  className="flex items-center w-full text-left px-4 py-2 text-gray-600 hover:text-blue-600 rounded-md transition-colors duration-200 hover:bg-blue-50"
                                >
                                  <span className="text-lg mr-3">{course.icon}</span>
                                  {course.name}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => navigateTo(link.path)}
                        className="flex items-center w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
                      >
                        {link.icon && <span className="mr-3">{link.icon}</span>}
                        {link.name}
                      </button>
                    )}
                  </div>
                ))}
                
                {/* FAQ Link in Mobile */}
                <button
                  onClick={scrollToFAQ}
                  className="flex items-center w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-200"
                >
                  <span className="mr-3">❓</span>
                  FAQ
                </button>
                
                <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
                  {/* Average Score Badge */}
                  <div className="flex items-center justify-center px-3 py-2 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 rounded-lg">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    <span className="font-semibold text-sm">7.5+ Average Band Score</span>
                  </div>
                  
                  <a
                    href="tel:+919876543210"
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    Call: +91 98765 43210
                  </a>
                  
                  <button
                    onClick={() => navigateTo('/contact')}
                    className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Free Demo Class
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;