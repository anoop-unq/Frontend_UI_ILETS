import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const services = [
    {
      name: "IELTS Preparation",
      tagline: "Complete exam mastery",
      description: "Comprehensive IELTS exam preparation with proven strategies for academic success.",
      features: ["Full syllabus coverage", "Expert certified instructors", "Personalized study plans", "Mock tests & practice exams", "Score improvement guarantee"],
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&h=2160&q=80",
      color: "from-purple-500 to-blue-600"
    },
    {
      name: "Writing Skills",
      tagline: "Master essay writing",
      description: "Professional guidance and feedback to excel in IELTS writing tasks.",
      features: ["Essay writing techniques", "Task 1 & 2 preparation", "Grammar and vocabulary", "Individual feedback", "Writing templates"],
      icon: "✍️",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&h=2160&q=80",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Speaking Practice",
      tagline: "Build confidence & fluency",
      description: "Develop speaking skills with personalized coaching and real-time feedback.",
      features: ["One-on-one sessions", "Pronunciation correction", "Fluency development", "Interview techniques", "Real-time feedback"],
      icon: "🎙️",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&h=2160&q=80",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Listening Training",
      tagline: "Enhance comprehension",
      description: "Advanced listening exercises to master the IELTS listening section.",
      features: ["Audio comprehension", "Accent familiarization", "Note-taking strategies", "Native speaker practice", "Progress tracking"],
      icon: "👂",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&h=2160&q=80",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "Reading Comprehension",
      tagline: "Speed & understanding",
      description: "Improve reading speed and comprehension for IELTS success.",
      features: ["Speed reading techniques", "Text analysis skills", "Vocabulary expansion", "Time management", "Authentic materials"],
      icon: "📚",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&h=2160&q=80",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Study Resources",
      tagline: "Comprehensive materials",
      description: "Access extensive IELTS study materials and digital resources.",
      features: ["Latest preparation books", "Online practice portal", "Mobile learning app", "Video lessons", "24/7 resource access"],
      icon: "💡",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&h=2160&q=80",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const stats = [
    { value: "98%", label: "Success Rate" },
    { value: "5000+", label: "Students Trained" },
    { value: "7.5+", label: "Average Band Score" },
    { value: "24/7", label: "Support Available" }
  ];

  const navigateToContact = () => navigate('/contact');

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&h=2160&q=80"
            alt="IELTS Preparation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-blue-900/60"></div>
        </div>
      <motion.div 
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative text-center text-white px-4 py-2 mt-24 lg:-mt-12 sm:mt-0"
>
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-semibold mb-8 border border-white/30"
          >
            Premium IELTS Preparation
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Achieve Your 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Dream Score</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Comprehensive IELTS training programs with expert instructors, personalized coaching, and proven strategies for academic and career success.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-semibold text-lg shadow-2xl"
            >
              Explore Programs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToContact}
              className="px-12 py-4 border-2 border-white rounded-2xl font-semibold text-lg backdrop-blur-sm"
            >
              Free Assessment
            </motion.button>
          </div>
        </motion.div>

     
      </div>

      {/* Stats Section */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">IELTS Programs</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Specialized training covering all four modules with expert instructors and proven success strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Navigation */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeService === index 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl' 
                      : isDarkMode 
                        ? 'bg-gray-800 hover:bg-gray-750' 
                        : 'bg-white hover:bg-gray-50 shadow-lg'
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold">{service.name}</h3>
                      <p className={`text-sm ${activeService === index ? 'text-blue-100' : isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Service Display */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-2xl overflow-hidden shadow-2xl ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                >
                  <div className="relative h-80">
                    <img
                      src={services[activeService].image}
                      alt={services[activeService].name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${services[activeService].color} opacity-90`}></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{services[activeService].name}</h3>
                      <p className="text-blue-100 text-lg">{services[activeService].description}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {services[activeService].features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={navigateToContact}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-semibold shadow-lg"
                      >
                        Enroll Now
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="px-6 py-3 border border-gray-300 rounded-xl font-semibold"
                      >
                        {isExpanded ? 'Show Less' : 'Learn More'}
                      </motion.button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-gray-200"
                        >
                          <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                            Our {services[activeService].name} program includes comprehensive materials, personalized feedback, and expert guidance to ensure your success.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&h=2160&q=80"
            alt="IELTS Success"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto text-center text-white px-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your IELTS Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their target scores with our proven preparation methods.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToContact}
              className="px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl font-semibold text-lg shadow-2xl"
            >
              Get Started Now
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+1234567890"
              className="px-12 py-4 border-2 border-white rounded-2xl font-semibold text-lg backdrop-blur-sm"
            >
              📞 (123) 456-7890
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;