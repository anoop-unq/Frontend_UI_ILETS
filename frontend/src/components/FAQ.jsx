import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, BookOpen, Clock, Users, Award, Calendar, MessageCircle, Star, Target, Globe, BookCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { isDarkMode } = useTheme();

  const faqs = [
    {
      question: "What is the difference between IELTS Academic and General Training?",
      answer: "IELTS Academic is for students applying for higher education or professional registration, while IELTS General Training is for those migrating to English-speaking countries or applying for secondary education and work experience. The Reading and Writing sections differ between the two versions.",
      icon: <BookOpen className="h-6 w-6" />,
      category: "Test Types"
    },
    {
      question: "How long is the IELTS test valid?",
      answer: "IELTS results are valid for 2 years from the test date. After this period, organizations may not accept your scores as they consider your language proficiency might have changed.",
      icon: <Clock className="h-6 w-6" />,
      category: "Validity"
    },
    {
      question: "What is a good IELTS score?",
      answer: "A score of 6.5-7.0 is generally considered good for most universities. Top universities may require 7.5 or higher. For immigration, requirements vary by country but typically range from 6.0 to 7.0 overall.",
      icon: <Award className="h-6 w-6" />,
      category: "Scoring"
    },
    {
      question: "How long does the IELTS test take?",
      answer: "The total test time is 2 hours 45 minutes. Listening: 30 minutes, Reading: 60 minutes, Writing: 60 minutes, Speaking: 11-14 minutes. The Speaking test may be on the same day or up to 7 days before/after other sections.",
      icon: <Clock className="h-6 w-6" />,
      category: "Duration"
    },
    {
      question: "Can I retake only one section of the IELTS?",
      answer: "Yes, IELTS now offers One Skill Retake for test takers to improve their score in a single section (Listening, Reading, Writing, or Speaking) without retaking the entire test. This must be done within 60 days of your original test.",
      icon: <Target className="h-6 w-6" />,
      category: "Retakes"
    },
    {
      question: "How is the IELTS Speaking test conducted?",
      answer: "The Speaking test is a face-to-face interview with a certified examiner, divided into three parts: introduction and interview, individual long turn, and two-way discussion. It assesses your pronunciation, fluency, vocabulary, and grammar.",
      icon: <MessageCircle className="h-6 w-6" />,
      category: "Speaking"
    },
    {
      question: "When will I get my IELTS results?",
      answer: "Computer-delivered IELTS results are available in 3-5 days, while paper-based test results take 13 days. You'll receive a Test Report Form showing your scores for each section and overall band score.",
      icon: <Calendar className="h-6 w-6" />,
      category: "Results"
    },
    {
      question: "What's the difference between computer-delivered and paper-based IELTS?",
      answer: "Both versions have the same content, timing, and question types. Computer-delivered offers more test dates and faster results. The choice depends on your preference for typing or handwriting.",
      icon: <BookCheck className="h-6 w-6" />,
      category: "Test Format"
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const stats = [
    { value: "98%", label: "Success Rate", icon: <Award className="h-8 w-8" /> },
    { value: "7.5+", label: "Average Band Score", icon: <Star className="h-8 w-8" /> },
    { value: "5000+", label: "Students Trained", icon: <Users className="h-8 w-8" /> },
    { value: "15+", label: "Years Experience", icon: <Globe className="h-8 w-8" /> }
  ];

  return (
    <section id="ielts-faq" className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900/20' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 text-sm font-semibold px-6 py-3 rounded-full uppercase tracking-wider mb-8 shadow-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white"
          >
            <MessageCircle className="h-5 w-5" />
            Frequently Asked Questions
          </motion.div>
          
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              IELTS Master
            </span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Your Questions Answered
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-6xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Comprehensive answers to all your IELTS queries from our team of certified experts with 15+ years of experience
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl backdrop-blur-sm border text-center transform hover:scale-105 transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800/50 border-gray-700 hover:shadow-2xl hover:shadow-blue-500/20' 
                  : 'bg-white/80 border-gray-200 hover:shadow-2xl hover:shadow-purple-500/20'
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  {stat.icon}
                </div>
              </div>
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm md:text-base font-medium ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid xl:grid-cols-2 gap-8 max-w-8xl mx-auto">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {faqs.slice(0, 4).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 ${
                  activeIndex === index 
                    ? 'scale-105 ring-4 ring-blue-500/30 border-blue-400' 
                    : 'border-transparent hover:border-blue-300/50'
                } ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md' 
                    : 'bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-md'
                }`}
              >
                <button
                  className="flex items-start w-full text-left p-8 focus:outline-none group"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  <div className="flex-shrink-0 mt-1 mr-6 p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg">
                    {faq.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isDarkMode 
                          ? 'bg-blue-900/50 text-blue-300' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {faq.category}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl md:text-2xl font-bold leading-relaxed transition-colors duration-300 ${
                      activeIndex === index 
                        ? 'text-blue-400' 
                        : isDarkMode 
                          ? 'text-white group-hover:text-blue-400' 
                          : 'text-gray-900 group-hover:text-blue-600'
                    }`}>
                      {faq.question}
                    </h3>
                    
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <p className={`mt-4 text-lg leading-relaxed ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`ml-4 flex-shrink-0 p-3 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? isDarkMode 
                          ? 'bg-blue-900/50 text-blue-400 shadow-lg' 
                          : 'bg-blue-100 text-blue-600 shadow-lg'
                        : isDarkMode 
                          ? 'bg-gray-700 text-gray-400 group-hover:bg-blue-900/50 group-hover:text-blue-400' 
                          : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                    }`}
                  >
                    {activeIndex === index ? (
                      <ChevronUp className="h-6 w-6" />
                    ) : (
                      <ChevronDown className="h-6 w-6" />
                    )}
                  </motion.span>
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {faqs.slice(4).map((faq, index) => (
              <motion.div
                key={index + 4}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 4) * 0.1 }}
                className={`rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 ${
                  activeIndex === index + 4 
                    ? 'scale-105 ring-4 ring-purple-500/30 border-purple-400' 
                    : 'border-transparent hover:border-purple-300/50'
                } ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-800/80 to-purple-900/20 backdrop-blur-md' 
                    : 'bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-md'
                }`}
              >
                <button
                  className="flex items-start w-full text-left p-8 focus:outline-none group"
                  onClick={() => toggleFAQ(index + 4)}
                  aria-expanded={activeIndex === index + 4}
                >
                  <div className="flex-shrink-0 mt-1 mr-6 p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                    {faq.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isDarkMode 
                          ? 'bg-purple-900/50 text-purple-300' 
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {faq.category}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl md:text-2xl font-bold leading-relaxed transition-colors duration-300 ${
                      activeIndex === index + 4 
                        ? 'text-purple-400' 
                        : isDarkMode 
                          ? 'text-white group-hover:text-purple-400' 
                          : 'text-gray-900 group-hover:text-purple-600'
                    }`}>
                      {faq.question}
                    </h3>
                    
                    <AnimatePresence>
                      {activeIndex === index + 4 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <p className={`mt-4 text-lg leading-relaxed ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <motion.span
                    animate={{ rotate: activeIndex === index + 4 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`ml-4 flex-shrink-0 p-3 rounded-full transition-all duration-300 ${
                      activeIndex === index + 4
                        ? isDarkMode 
                          ? 'bg-purple-900/50 text-purple-400 shadow-lg' 
                          : 'bg-purple-100 text-purple-600 shadow-lg'
                        : isDarkMode 
                          ? 'bg-gray-700 text-gray-400 group-hover:bg-purple-900/50 group-hover:text-purple-400' 
                          : 'bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-600'
                    }`}
                  >
                    {activeIndex === index + 4 ? (
                      <ChevronUp className="h-6 w-6" />
                    ) : (
                      <ChevronDown className="h-6 w-6" />
                    )}
                  </motion.span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className={`rounded-4xl p-12 md:p-16 backdrop-blur-lg border-2 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-800/60 to-gray-900/60 border-gray-700' 
              : 'bg-gradient-to-r from-blue-50/80 to-purple-50/80 border-blue-200'
          } shadow-3xl`}>
            <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Achieve Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Dream IELTS Score</span>?
            </h3>
            <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Join our community of successful students and get personalized coaching from IELTS experts with proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/courses" className="group">
                <button className={`font-bold text-lg py-4 px-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 flex items-center gap-3 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                }`}>
                  <BookOpen className="h-6 w-6" />
                  Explore Our Courses
                </button>
              </Link>
              <Link to="/contact" className="group">
                <button className={`font-bold text-lg py-4 px-12 rounded-2xl border-2 transition-all duration-500 transform hover:-translate-y-2 ${
                  isDarkMode 
                    ? 'border-gray-600 text-white hover:bg-gray-700/50 hover:border-blue-500' 
                    : 'border-gray-300 text-gray-700 hover:bg-white hover:border-purple-500'
                }`}>
                  Free Assessment Test
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (min-width: 3840px) {
          .max-w-8xl {
            max-width: 2400px;
          }
          .text-7xl {
            font-size: 5rem;
          }
          .text-4xl {
            font-size: 3rem;
          }
          .text-2xl {
            font-size: 2.5rem;
          }
          .text-xl {
            font-size: 2rem;
          }
          .text-lg {
            font-size: 1.8rem;
          }
          .p-8 {
            padding: 4rem;
          }
          .p-12 {
            padding: 6rem;
          }
          .h-6.w-6 {
            width: 3rem;
            height: 3rem;
          }
          .h-8.w-8 {
            width: 4rem;
            height: 4rem;
          }
        }
        
        @media (max-width: 768px) {
          .rounded-4xl {
            border-radius: 2rem;
          }
          .p-8 {
            padding: 2rem;
          }
          .text-4xl {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .grid-cols-2 {
            grid-template-columns: 1fr;
          }
          .p-8 {
            padding: 1.5rem;
          }
          .text-3xl {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;