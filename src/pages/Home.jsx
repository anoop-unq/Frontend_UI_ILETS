import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Phone, 
  BookOpen,
  Target,
  Award,
  Clock,
  Star,
  CheckCircle,
  MessageCircle,
  FileText,
  Headphones,
  Video,
  Download,
  ArrowRight,
  Trophy, 
  TrendingUp
} from 'lucide-react';
import { useTheme } from '../components/ThemeContext';
import { assets } from '../assets/assets';

const Home = () => {
  const { isDarkMode } = useTheme();
  
  // Scroll to testimonials function
  const scrollToTestimonials = () => {
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Band Score Guarantee",
      description: "Achieve your target score with our proven methodology"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Trainers",
      description: "Certified Coderise examiners with 10+ years experience"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Scheduling",
      description: "24/7 online classes with recorded sessions"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Study Materials",
      description: "Comprehensive PDFs, videos, and practice tests"
    }
  ];

  const services = [
    {
      name: "Speaking Mastery",
      description: "Live practice sessions with detailed feedback and pronunciation correction",
      icon: <MessageCircle className="h-8 w-8" />,
      stats: "7.5+ Average Score"
    },
    {
      name: "Writing Excellence",
      description: "Task 1 & 2 evaluation with band predictions and improvement strategies",
      icon: <FileText className="h-8 w-8" />,
      stats: "500+ Essays Evaluated"
    },
    {
      name: "Listening Skills",
      description: "Real exam simulations with accent training and speed comprehension",
      icon: <Headphones className="h-8 w-8" />,
      stats: "95% Accuracy Rate"
    },
    {
      name: "Reading Strategies",
      description: "Time management techniques and question pattern analysis",
      icon: <BookOpen className="h-8 w-8" />,
      stats: "40+ Practice Tests"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-800' : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'}`}>
      
      {/* Enhanced Hero Section with Fixed Image Sizing */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=3840&q=80"
            alt="Coderise Success"
            className="w-full h-full object-cover min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
           
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                 Coderise
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-yellow-400 mt-4">Achieve Band 8.0+</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
              Join India's most trusted Coderise preparation platform with personalized coaching, 
              real-time feedback, and guaranteed score improvement
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-base sm:text-lg"
                >
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                  Free Demo Class
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={scrollToTestimonials}
                  className="flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-2xl backdrop-blur-sm border border-white/30 transition-all duration-300 text-base sm:text-lg"
                >
                  <Video className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                  Watch Success Stories
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-center"
          >
            <div className="text-sm mb-2">Scroll to Explore</div>
            <ArrowRight className="h-5 w-5 mx-auto rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={`py-8 sm:py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {[
              { number: "10,000+", label: "Students Trained" },
              { number: "8.2", label: "Average Band Score" },
              { number: "98%", label: "Success Rate" },
              { number: "4.95/5", label: "Student Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl sm:text-3xl font-bold ${isDarkMode ? 'text-yellow-400' : 'text-blue-600'}`}>
                  {stat.number}
                </div>
                <div className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Why Choose Our Coderise Program?
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Comprehensive preparation designed by former Coderise examiners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-sm border ${
                  isDarkMode 
                    ? 'bg-gray-800/80 border-gray-700' 
                    : 'bg-white/80 border-white/20'
                }`}
              >
                <div className={`p-3 sm:p-4 rounded-2xl w-fit mb-4 sm:mb-6 ${
                  isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  {feature.icon}
                </div>
                <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Comprehensive Coderise Training
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Specialized modules for each section with expert guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start mb-4 sm:mb-6">
                  <div className="bg-white/20 p-3 sm:p-4 rounded-2xl mr-4 sm:mr-6">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{service.name}</h3>
                    <div className="bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      {service.stats}
                    </div>
                  </div>
                </div>
                <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  {service.description}
                </p>
                <button className="flex items-center text-white font-semibold hover:text-yellow-300 transition-colors text-sm sm:text-base">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Fixed Image Sizing */}
      <section id="testimonials" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4 sm:mb-6">
              <Star className="h-4 w-4 mr-2 fill-yellow-400 text-yellow-400" />
              Trusted by 10,000+ Coderise Aspirants
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Real Coderise Success
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300">Stories That Inspire</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Discover how our students transformed their Coderise dreams into remarkable achievements with personalized coaching and proven strategies
            </p>
          </motion.div>

          {/* Testimonials Grid with Fixed Image Sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                name: "Priya Sharma",
                score: "Band 9.0",
                previousScore: "6.5",
                improvement: "2.5 Points Improvement",
                comment: "The writing evaluation system completely transformed my approach. From struggling with task response to achieving Band 9 in just 8 weeks!",
                avatar: "https://tse4.mm.bing.net/th/id/OIP.hd41sJAXS5IiEwy7iFBhiQHaE7?pid=Api&P=0&h=180",
                course: "Coderise Academic",
                duration: "8 Weeks",
                achievement: "Oxford University Admission"
              },
              {
                name: "Rahul Verma",
                score: "Band 8.5", 
                previousScore: "6.5",
                improvement: "2.0 Points Improvement",
                comment: "Speaking mock tests with real examiner feedback helped me overcome fluency issues. The personalized accent training was exceptional!",
                avatar: "https://tse2.mm.bing.net/th/id/OIP.7N6oPdkwmc1UWeVu1toXQQHaE8?pid=Api&P=0&h=180",
                course: "Coderise General",
                duration: "6 Weeks",
                achievement: "Canada PR Approved"
              },
              {
                name: "Ananya Patel",
                score: "Band 8.5",
                previousScore: "5.5",
                improvement: "3.0 Points Improvement",
                comment: "The reading strategies and time management techniques helped me score Band 8.5. The practice materials were incredibly authentic!",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80",
                course: "Coderise Academic",
                duration: "10 Weeks",
                achievement: "Australia Student Visa"
              },
              {
                name: "Anoop Anvesh",
                score: "Band 9.0",
                previousScore: "7.0",
                improvement: "2.0 Points Improvement", 
                comment: "Listening module strategies were game-changing. The real exam simulations prepared me perfectly for the actual test environment.",
                avatar: `${assets.Anvesh}`,
                course: "Coderise General",
                duration: "7 Weeks",
                achievement: "UK Work Visa"
              },
              {
                name: "Sneha Reddy",
                score: "Band 8.0",
                previousScore: "6.0",
                improvement: "2.0 Points Improvement",
                comment: "The personalized study plan and regular progress tracking kept me motivated. The instructors were always available for doubt clearance.",
                avatar: "https://tse3.mm.bing.net/th/id/OIP.Sj1PdHcQx4TwjU-UpK9q9AHaFx?pid=Api&P=0&h=180",
                course: "Coderise Academic", 
                duration: "9 Weeks",
                achievement: "Masters in USA"
              },
              {
                name: "Vikram Singh",
                score: "Band 8.5",
                previousScore: "7.0", 
                improvement: "1.5 Points Improvement",
                comment: "The essay correction service with band descriptors helped me understand exactly what examiners look for. Highly recommended!",
                avatar: "https://tse1.mm.bing.net/th/id/OIP.CNRhIS5rBc7Z6O_ka5A3uAHaE7?pid=Api&P=0&h=180",
                course: "Coderise General",
                duration: "5 Weeks",
                achievement: "New Zealand PR"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Student Image Header with Fixed Height */}
                <div className="relative h-100 sm:h-75 md:h-56 lg:h-60 overflow-hidden">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      objectPosition: 'center' 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {testimonial.score}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium">
                      {testimonial.course}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-green-500" />
                    <span className="text-xs sm:text-sm">{testimonial.improvement}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    <span className="text-xs sm:text-sm">{testimonial.duration}</span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-right">
                      {testimonial.achievement}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center mb-12 sm:mb-16 shadow-2xl"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">Our Coderise Success Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { number: "500+", label: "Band 9 Achievers", icon: "🏆" },
                { number: "10K+", label: "Students Trained", icon: "👥" },
                { number: "98%", label: "Success Rate", icon: "📈" },
                { number: "4.9/5", label: "Student Rating", icon: "⭐" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-blue-100 text-xs sm:text-sm md:text-base">{stat.label}</div>
                  <div className="text-xl sm:text-2xl mt-1 sm:mt-2">{stat.icon}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="max-w-2xl mx-auto">
                <Trophy className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 sm:mb-6 text-yellow-500" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Ready to Become Our Next Success Story?
                </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
                  Join thousands of students who achieved their dream Coderise scores with our proven methodology
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link to={"/contact"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center text-sm sm:text-base"
                  >
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Book Free Demo Class
                  </Link>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center text-sm sm:text-base" 
                  >
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2"  />
                    Talk to Counselor
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Start Your Coderise Journey?
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 mb-6 sm:mb-8">
              Join thousands of successful students who achieved their dream scores with our expert guidance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-2xl shadow-2xl text-base sm:text-lg transition-all duration-300"
                >
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                  Book Free Demo Class
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+916302447010"
                  className="flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-2xl backdrop-blur-sm border border-white/30 text-base sm:text-lg transition-all duration-300"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                  Call: +91 6302447010
                </a>
              </motion.div>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-blue-200">
              <div className="flex items-center justify-center text-sm sm:text-base">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-400" />
                Free Study Materials
              </div>
              <div className="flex items-center justify-center text-sm sm:text-base">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-400" />
                Money Back Guarantee
              </div>
              <div className="flex items-center justify-center text-sm sm:text-base">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-400" />
                Flexible Payment Options
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;