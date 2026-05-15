import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeField, setActiveField] = useState(null);
  const { isDarkMode } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitError('There was an error submitting your form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Test Center Location',
      content: 'Adithya enclave First floor , Hastinapuram',
      subcontent: 'Central location with excellent transport links'
    },
    {
      icon: '📞',
      title: 'Contact Numbers',
      content: 'Main Office: +91 9390933435',
      subcontent: 'Registration: +91 9390933435'
    },
    {
      icon: '✉️',
      title: 'Email Addresses',
      content: 'General: info@Coderise.com',
      subcontent: 'Registration: registration@Coderisetestcenter.com'
    },
    {
      icon: '🕒',
      title: 'Office Hours',
      content: 'Mon-Fri: 8:30 AM - 5:30 PM',
      subcontent: 'Sat: 9:00 AM - 1:00 PM (Registration only)'
    },
    {
      icon: '🎓',
      title: 'Test Schedule',
      content: 'Academic: 2-3 times per month',
      subcontent: 'General Training: Monthly • UKVI: As per demand'
    },
    {
      icon: '⚡',
      title: 'Urgent Registration',
      content: 'Priority Support: +91 9390933435',
      subcontent: '24/7 emergency test registration available'
    }
  ];

  const enquiryTypes = [
    'Test Registration',
    'Preparation Courses', 
    'Test Dates Availability',
    'Score Results',
    'General Information',
    'UKVI Specific Queries'
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-cyan-50'} transition-colors duration-300`}>
      
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&h=2160&q=80"
            alt="Coderise Test Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white max-w-6xl mx-auto px-4"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-lg font-semibold mb-8 border border-white/30"
          >
            Official Coderise Test Center
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Start Your 
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Coderise Journey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Connect with certified Coderise experts for test registration, preparation guidance, and personalized support to achieve your target score.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative -mt-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Contact Information Cards */}
          <div className="xl:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl shadow-2xl backdrop-blur-sm border ${
                  isDarkMode 
                    ? 'bg-gray-800/80 border-gray-700' 
                    : 'bg-white/80 border-white/20'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {item.content}
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.subcontent}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`rounded-3xl shadow-2xl p-8 backdrop-blur-sm border ${
                isDarkMode 
                  ? 'bg-gray-800/80 border-gray-700' 
                  : 'bg-white/80 border-white/20'
              }`}
            >
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`border-2 rounded-2xl p-8 text-center ${
                    isDarkMode 
                      ? 'bg-green-900/30 border-green-600' 
                      : 'bg-green-50 border-green-200'
                  }`}
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-green-300' : 'text-green-800'}`}>
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className={`text-lg ${isDarkMode ? 'text-green-200' : 'text-green-700'}`}>
                    Thank you for your interest in Coderise. Our team will contact you within 12 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold"
                  >
                    Submit Another Enquiry
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Get Coderise Guidance
                    </h2>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Complete the form below and our Coderise coordinators will contact you within 12 hours.
                    </p>
                  </div>

                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`border-2 rounded-xl p-4 mb-6 ${
                        isDarkMode 
                          ? 'bg-red-900/30 border-red-600 text-red-200' 
                          : 'bg-red-50 border-red-200 text-red-700'
                      }`}
                    >
                      {submitError}
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Full Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setActiveField('name')}
                            onBlur={() => setActiveField(null)}
                            className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 ${
                              isDarkMode
                                ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400'
                                : 'bg-white/50 border-gray-200 text-gray-900'
                            } ${
                              activeField === 'name' ? 'border-blue-500 shadow-lg' : ''
                            }`}
                            placeholder="John Doe"
                          />
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            👤
                          </span>
                        </div>
                      </div>

                      <div className="relative">
                        <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          Email Address
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setActiveField('email')}
                            onBlur={() => setActiveField(null)}
                            className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 ${
                              isDarkMode
                                ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400'
                                : 'bg-white/50 border-gray-200 text-gray-900'
                            } ${
                              activeField === 'email' ? 'border-blue-500 shadow-lg' : ''
                            }`}
                            placeholder="you@example.com"
                          />
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            ✉️
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Enquiry Type
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setActiveField('subject')}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 appearance-none ${
                          isDarkMode
                            ? 'bg-gray-700/50 border-gray-600 text-white'
                            : 'bg-white/50 border-gray-200 text-gray-900'
                        } ${
                          activeField === 'subject' ? 'border-blue-500 shadow-lg' : ''
                        }`}
                      >
                        <option value="">Select enquiry type</option>
                        {enquiryTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        📋
                      </span>
                    </div>

                    <div className="relative">
                      <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 resize-none ${
                          isDarkMode
                            ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400'
                            : 'bg-white/50 border-gray-200 text-gray-900'
                        } ${
                          activeField === 'message' ? 'border-blue-500 shadow-lg' : ''
                        }`}
                        placeholder="Tell us about your Coderise requirements, target score, and preferred test date..."
                      ></textarea>
                      <span className="absolute right-4 top-6 text-gray-400">
                        💬
                      </span>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {submitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                          Sending Your Enquiry...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          Send Enquiry 
                          <span className="ml-3 text-xl">🚀</span>
                        </div>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 mb-20"
        >
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Test Center Location
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our Coderise test center is conveniently located in the city center with excellent transport links
            </p>
          </div>
          
          <div className={`rounded-3xl overflow-hidden shadow-2xl border-2 ${
            isDarkMode ? 'border-gray-700' : 'border-white/20'
          }`}>
            <iframe
              title="Coderise Test Center Location"
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179535!2d-73.9878449241646!3d40.74844097138992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              className="filter grayscale hover:grayscale-0 transition duration-500"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Quick Action Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto text-center px-4"
        >
          <h3 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
          <p className="text-xl text-blue-100 mb-8">Call our priority support line for urgent test registration</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+91 6302447010"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-2xl"
          >
            <span className="text-2xl mr-3">📞</span>
            Priority Support: +91 9390933435
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;