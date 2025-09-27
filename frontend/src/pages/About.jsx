import React, { useState, useEffect, useRef } from 'react';
import { 
  UserGroupIcon, 
  HeartIcon, 
  AcademicCapIcon,
  BuildingOfficeIcon,
  ClockIcon,
  TrophyIcon,
  StarIcon,
  CheckBadgeIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../components/ThemeContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Counter = ({ value, isDarkMode }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericValue = parseInt(value.replace(/,|\+/g, ''));
          const duration = Math.min(3, numericValue / 1000 + 1);
          
          let startTime = null;
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 2700), 1);
            
            setCount(Math.floor(progress * numericValue));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              if (value.includes('+')) {
                setCount(numericValue + '+');
              }
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value]);

  return (
    <p 
      ref={ref}
      className={`mt-4 text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
    >
      {count}{value.includes('+') && !String(count).includes('+') ? '+' : ''}
    </p>
  );
};

const About = () => {
  const { isDarkMode } = useTheme();
  
  const teamMembers = [
    {
      name: "Dr. Sarah Thompson",
      role: "IELTS Chief Examiner",
      bio: "With over 15 years of experience in English language assessment, Dr. Thompson specializes in IELTS test development and evaluation.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=1200&q=80",
      specialties: ["Speaking Assessment", "Test Development", "Band Score Evaluation"],
      achievements: ["PhD Cambridge University", "15+ Years Experience", "5000+ Students Trained"]
    },
    {
      name: "Prof. Michael Chen",
      role: "Writing Specialist",
      bio: "Prof. Chen is our expert in academic writing assessment, helping students master Task 1 and Task 2 requirements.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=1200&q=80",
      specialties: ["Academic Writing", "Essay Evaluation", "Grammar Mastery"],
      achievements: ["IELTS Author", "Global Workshop Trainer", "Band 9 Specialist"]
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Listening & Reading Expert",
      bio: "Dr. Rodriguez specializes in developing effective strategies for the Listening and Reading modules.",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=1200&q=80",
      specialties: ["Listening Techniques", "Reading Comprehension", "Time Management"],
      achievements: ["Research Published", "Unique Methodology", "Band 8+ Guarantee"]
    }
  ];

  const stats = [
    { id: 1, name: 'Years of IELTS Expertise', value: '50+', icon: ClockIcon, color: 'from-orange-500 to-red-500' },
    { id: 2, name: 'Successful Students', value: '10,000+', icon: UserGroupIcon, color: 'from-green-500 to-teal-500' },
    { id: 3, name: 'Band 9 Achievers', value: '500+', icon: TrophyIcon, color: 'from-yellow-500 to-amber-500' },
    { id: 4, name: 'Preparation Modules', value: '12+', icon: BuildingOfficeIcon, color: 'from-purple-500 to-pink-500' },
  ];

  const features = [
    {
      icon: ChartBarIcon,
      title: "Proven Success Rate",
      description: "98% of our students achieve their target band score within 3 months of training",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: StarIcon,
      title: "Band 9 Materials",
      description: "Exclusive study materials developed by former IELTS examiners",
      gradient: "from-yellow-500 to-amber-600"
    },
    {
      icon: CheckBadgeIcon,
      title: "Certified Trainers",
      description: "All our trainers are certified IELTS examiners with 10+ years experience",
      gradient: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <div className={`min-h-screen font-sans antialiased ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100' 
        : 'bg-gradient-to-br from-blue-50 via-white to-gray-50 text-gray-900'
    }`}>
      
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&h=2160&q=80"
            alt="IELTS preparation"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-indigo-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:flex items-center justify-between"
          >
            <div className="lg:w-1/2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                IELTS Mastery
              </h1>
              <p className="mt-6 text-xl lg:text-2xl text-blue-100 max-w-2xl">
                Transforming IELTS aspirations into exceptional results since 2010
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link  to={"/contact"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  Start Your Journey
                </Link>
                < Link to ={'/courses'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                >
                  View Courses
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&h=1200&q=80"
                alt="IELTS Success"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Banner */}
      <div className="relative -mt-10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-r ${feature.gradient} p-6 rounded-2xl shadow-2xl text-white transform hover:-translate-y-2 transition-all duration-300`}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-sm opacity-90">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Excellence in Numbers
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our track record speaks volumes about our commitment to student success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div 
                key={stat.id}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className={`p-8 rounded-2xl text-center backdrop-blur-lg border ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700' 
                    : 'bg-white/80 border-gray-200'
                } shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex justify-center">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color}`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <Counter value={stat.value} isDarkMode={isDarkMode} />
                <p className={`mt-4 text-lg font-semibold ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>{stat.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section with Parallax */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524178239889-8cf4d23cf6d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=3840&h=2160&q=80"
            alt="IELTS Success Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                A Legacy of <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">IELTS Excellence</span>
              </h2>
              <div className="space-y-6 text-lg">
                <p className="leading-relaxed">
                  Founded in 2010 by Dr. Sarah Thompson, IELTS Mastery began as a visionary coaching center dedicated to revolutionizing IELTS preparation through personalized, results-driven methodologies.
                </p>
                <p className="leading-relaxed">
                  Our evolution into a premier training institute is marked by innovation, excellence, and an unwavering commitment to student success across 50+ countries worldwide.
                </p>
                <p className="leading-relaxed">
                  Today, we stand as a beacon of quality education, having empowered thousands to achieve their immigration, academic, and professional dreams.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
                alt="IELTS Classroom"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Student Success"
                className="rounded-2xl shadow-2xl mt-8 transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Team Section */}
     <div className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Meet Our IELTS Experts
      </h2>
      <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Certified IELTS examiners and language specialists with proven track records
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {[
        {
          name: "Sarah Johnson",
          role: "Senior IELTS Examiner",
          image: assets.Anvesh,
          bio: "Former IELTS examiner with 8+ years experience. Helped 1000+ students achieve band 8+ scores.",
          achievements: ["Band 9 Expert", "8+ Years Exp", "1000+ Students"],
          specialties: ["Writing Correction", "Speaking Mock Tests", "Band 9 Strategies"]
        },
        {
          name: "David Chen",
          role: "IELTS Speaking Specialist",
          image: "https://tse1.mm.bing.net/th/id/OIP._bfM2X0gndr4NEFqq6PekQHaE7?pid=Api&P=0&h=180",
          bio: "Cambridge certified trainer specializing in speaking modules. Expert in accent neutralization.",
          achievements: ["Cambridge Certified", "Speaking Expert", "Band 8+ Guarantee"],
          specialties: ["Pronunciation", "Fluency", "Vocabulary Building"]
        },
        {
          name: "Emily Watson",
          role: "Writing Assessment Expert",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          bio: "Specialized in academic writing with focus on task achievement and coherence.",
          achievements: ["Writing Specialist", "Task 2 Expert", "Quick Results"],
          specialties: ["Essay Structure", "Grammar Correction", "Time Management"]
        },
        {
          name: "Michael Rodriguez",
          role: "Listening & Reading Coach",
          image: "https://static1.bigstockphoto.com/9/3/2/large1500/239187223.jpg",
          bio: "Expert in developing listening skills and reading comprehension strategies for high scores.",
          achievements: ["Score Booster", "Strategy Expert", "Quick Improvement"],
          specialties: ["Note-taking", "Skimming/Scanning", "Answer Techniques"]
        },
        {
          name: "Priya Sharma",
          role: "Overall Band Score Coach",
          image: "https://imgv3.fotor.com/images/slider-image/a-woman-in-a-suit.png",
          bio: "Comprehensive IELTS training approach focusing on all four modules simultaneously.",
          achievements: ["Band 8+ Coach", "Overall Strategy", "Personalized Plans"],
          specialties: ["Full Test Prep", "Time Management", "Score Analysis"]
        },
        {
          name: "James Wilson",
          role: "Academic IELTS Specialist",
          image: "https://i.pinimg.com/originals/f8/66/8e/f8668e5328cfb4938903406948383cf6.png",
          bio: "Focused on academic module requirements and university admission criteria.",
          achievements: ["Academic Expert", "University Prep", "Scholarship Guide"],
          specialties: ["Academic Writing", "Research Skills", "University Requirements"]
        }
      ].map((member, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ y: -10 }}
          className={`rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <div className="relative group">
            <div className="overflow-hidden">
              <img
                className="w-full h-64 sm:h-72 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                src={member.image}
                alt={member.name}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap gap-2">
                  {member.achievements.map((achievement, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-600 text-white text-xs sm:text-sm rounded-full">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</p>
            <p className={`mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {member.bio}
            </p>
            
            <div>
              <h4 className={`font-semibold mb-3 text-sm sm:text-base ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                Specializations:
              </h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {member.specialties.map((specialty, i) => (
                  <span key={i} className={`px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-medium ${
                    isDarkMode 
                      ? 'bg-blue-900/40 text-blue-300' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>

      {/* Final CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Achieve Your <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Dream Score</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who transformed their IELTS goals into reality with our expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to={"/contact"}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              
              className="px-12 py-4 bg-white text-blue-600 font-bold rounded-xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Book Free Assessment
            </Link>
            <Link to={"/contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              
              className="px-12 py-4 border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
            >
              📞 (123) 456-7890
            </Link>
          </div>
          <p className="mt-6 text-blue-200">Limited spots available for March 2024 intake</p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;