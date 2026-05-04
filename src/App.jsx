import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Calendar, Award, Code, Briefcase, GraduationCap, Moon, Sun, Languages, Download, ExternalLink, Star, Sparkles } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('th');
  const [activeSection, setActiveSection] = useState('about');

  // Animation states
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const content = {
    th: {
      personalInfo: {
        name: "ธนชัย จันทร์เเก้ว",
        title: "Full Stack Developer",
        email: "thanachaino168@gmail.com",
        phone: "062-2484854",
        location: "กรุงเทพฯ, ประเทศไทย",
        website: "www.Thanachai-dev.com",
        github: "github.com/Almzaba",
        linkedin: "linkedin.com/in/mr-thanachai-nomaya-bb4147369/"
      },
      nav: {
        about: "เกี่ยวกับ",
        skills: "ทักษะ",
        experience: "ประสบการณ์",
        education: "การศึกษา",
        projects: "โปรเจค",
        achievements: "รางวัล"
      },
      summary: "นักพัฒนาโปรแกรมที่มีประสบการณ์  ในการพัฒนาเว็บแอปพลิเคชัน ด้วย React, Node.js,.net และ c มีความเชี่ยวชาญในการออกแบบและพัฒนาระบบที่มีประสิทธิภาพ รวมถึงการทำงานเป็นทีมและการแก้ไขปัญหาได้อย่างมีประสิทธิภาพ",
      experience: [
        {
          title: "Senior Full Stack Developer",
          company: "บริษัท เทคโนโลยี จำกัด",
          period: "2022 - ปัจจุบัน",
          responsibilities: [
            "พัฒนาและดูแลเว็บแอปพลิเคชันสำหรับลูกค้า 10+ บริษัท",
            "นำทีมในการพัฒนา E-commerce platform ที่มีผู้ใช้ 50,000+ คน",
            "ปรับปรุงประสิทธิภาพระบบให้เร็วขึ้น 40%",
            "สอนและให้คำปรึกษาแก่ Junior Developer 3 คน"
          ]
        },
        {
          title: "Frontend Developer",
          company: "สตาร์ทอัพ เอบีซี",
          period: "2020 - 2022",
          responsibilities: [
            "พัฒนา User Interface สำหรับ Mobile และ Web Application",
            "ทำงานร่วมกับ UX/UI Designer ในการสร้าง Responsive Design",
            "ใช้ React และ TypeScript ในการพัฒนาโปรเจค 15+ โปรเจค",
            "ทดสอบและแก้ไข Bug เพื่อให้ระบบทำงานได้อย่างมีประสิทธิภาพ"
          ]
        }
      ],
      education: [
        {
          degree: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
          school: "มหาวิทยาลัยเทคโนโลยีแห่งชาติ",
          year: "2015 - 2019",
          gpa: "เกรดเฉลี่ย 3.65"
        }
      ],
      projects: [
        {
          name: "E-Learning Platform",
          tech: "React, Node.js, PostgreSQL",
          description: "แพลตฟอร์มการเรียนรู้ออนไลน์ที่มีผู้ใช้ 10,000+ คน พร้อมระบบการชำระเงินและการติดตามความก้าวหน้า"
        },
        {
          name: "Task Management App",
          tech: "Vue.js, Express, MongoDB",
          description: "แอปพลิเคชันจัดการงานสำหรับทีม พร้อม Real-time collaboration และ Dashboard analytics"
        },
        {
          name: "Restaurant POS System",
          tech: "React Native, Python, MySQL",
          description: "ระบบขายหน้าร้านสำหรับร้านอาหาร พร้อมระบบคิดเงิน สต็อก และรายงานยอดขาย"
        }
      ],
      achievements: [
        "รางวัลนักพัฒนาโปรแกรมดีเด่น ประจำปี 2023",
        "Speaker ในงาน Thailand Web Developer Conference 2022",
        "Contributor ใน Open Source Project 5+ โปรเจค"
      ]
    },
    en: {
      personalInfo: {
        name: "Somchai Jaidee",
        title: "Full Stack Developer",
        email: "somchai@email.com",
        phone: "+66 80 123 4567",
        location: "Bangkok, Thailand",
        website: "www.somchai-dev.com",
        github: "github.com/somchai",
        linkedin: "linkedin.com/in/somchai"
      },
      nav: {
        about: "About",
        skills: "Skills",
        experience: "Experience",
        education: "Education",
        projects: "Projects",
        achievements: "Awards"
      },
      summary: "Experienced Full Stack Developer with 5+ years in web application development using React, Node.js, and Python. Expertise in designing and developing efficient systems, team collaboration, and effective problem-solving.",
      experience: [
        {
          title: "Senior Full Stack Developer",
          company: "Tech Solutions Ltd.",
          period: "2022 - Present",
          responsibilities: [
            "Developed and maintained web applications for 10+ client companies",
            "Led team development of E-commerce platform with 50,000+ users",
            "Improved system performance by 40%",
            "Mentored and guided 3 Junior Developers"
          ]
        },
        {
          title: "Frontend Developer",
          company: "ABC Startup",
          period: "2020 - 2022",
          responsibilities: [
            "Developed User Interface for Mobile and Web Applications",
            "Collaborated with UX/UI Designers to create Responsive Design",
            "Used React and TypeScript in 15+ projects",
            "Tested and fixed bugs to ensure efficient system operation"
          ]
        }
      ],
      education: [
        {
          degree: "Bachelor of Science in Computer Science",
          school: "National University of Technology",
          year: "2015 - 2019",
          gpa: "GPA 3.65"
        }
      ],
      projects: [
        {
          name: "E-Learning Platform",
          tech: "React, Node.js, PostgreSQL",
          description: "Online learning platform with 10,000+ users, featuring payment system and progress tracking"
        },
        {
          name: "Task Management App",
          tech: "Vue.js, Express, MongoDB",
          description: "Team task management application with real-time collaboration and dashboard analytics"
        },
        {
          name: "Restaurant POS System",
          tech: "React Native, Python, MySQL",
          description: "Point of sale system for restaurants with billing, inventory, and sales reporting features"
        }
      ],
      achievements: [
        "Outstanding Developer Award 2023",
        "Speaker at Thailand Web Developer Conference 2022",
        "Contributor to 5+ Open Source Projects"
      ]
    }
  };

  const skills = {
    "Frontend": ["React", "Next.js", "Vue.js","Vite.js", "TypeScript", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "FastAPI", "GraphQL"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "MySQL","SQLServer"],
    "Tools": ["Git", "Docker", "AWS", "Figma", ]
  };

  const currentContent = content[language];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Simulate download
    alert('Download feature would be implemented here!');
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Floating Navigation */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-md rounded-full px-6 py-3 shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-300`}>
        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <div className="hidden md:flex gap-4">
            {Object.entries(currentContent.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === key
                    ? 'bg-blue-500 text-white shadow-lg'
                    : `${darkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 border-l border-gray-300 pl-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'th' ? 'en' : 'th')}
              className={`p-2 rounded-full transition-all duration-200 ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
              title="Switch Language"
            >
              <Languages size={18} />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-200 ${darkMode ? 'hover:bg-gray-700 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'}`}
              title="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Download Button */}
            <button
              onClick={downloadResume}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Download size={16} />
              PDF
            </button>
          </div>
        </div>
      </nav>

      <div className={`max-w-4xl mx-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl rounded-lg overflow-hidden mt-20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Animated Header */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white p-8 overflow-hidden">
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 hover:scale-110 transition-transform duration-300">
              <span className="text-4xl font-bold">{currentContent.personalInfo.name.charAt(0)}</span>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="text-yellow-300 animate-spin" size={24} />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold mb-2">{currentContent.personalInfo.name}</h1>
              <h2 className="text-xl text-blue-100 mb-4">{currentContent.personalInfo.title}</h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {[
                  { icon: Mail, text: currentContent.personalInfo.email },
                  { icon: Phone, text: currentContent.personalInfo.phone },
                  { icon: MapPin, text: currentContent.personalInfo.location }
                ].map(({ icon: Icon, text }, index) => (
                  <div key={index} className="flex items-center gap-2 hover:bg-white/10 px-2 py-1 rounded transition-all duration-200">
                    <Icon size={16} />
                    <span className="text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`p-8 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          {/* About Section */}
          <section id="about" className="mb-12">
            <h3 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              <Award className="text-blue-600" size={24} />
              {currentContent.nav.about}
            </h3>
            <div className={`${darkMode ? 'bg-gray-700/50' : 'bg-gradient-to-r from-blue-50 to-purple-50'} p-6 rounded-lg border-l-4 border-blue-500`}>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{currentContent.summary}</p>
            </div>
          </section>

          {/* Enhanced Skills Section */}
          <section id="skills" className="mb-12">
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              <Code className="text-blue-600" size={24} />
              {currentContent.nav.skills}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  <h4 className={`font-semibold mb-4 flex items-center gap-2 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                    <Star className="text-yellow-500" size={16} />
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={skill}
                        onMouseEnter={() => setHoveredSkill(`${category}-${index}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                          hoveredSkill === `${category}-${index}`
                            ? 'bg-blue-500 text-white shadow-lg scale-105'
                            : `${darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Enhanced Experience Section */}
          <section id="experience" className="mb-12">
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              <Briefcase className="text-blue-600" size={24} />
              {currentContent.nav.experience}
            </h3>
            <div className="space-y-8">
              {currentContent.experience.map((job, index) => (
                <div key={index} className={`relative ${darkMode ? 'bg-gray-700/30' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500`}>
                  <div className="absolute -left-2 top-6 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{job.title}</h4>
                    <div className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <Calendar size={16} />
                      <span className="text-sm">{job.period}</span>
                    </div>
                  </div>
                  <p className="text-blue-500 font-medium mb-4 flex items-center gap-2">
                    <ExternalLink size={16} />
                    {job.company}
                  </p>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className={`flex items-start gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:bg-blue-50 dark:hover:bg-gray-600/30 p-2 rounded transition-colors duration-200`}>
                        <span className="text-blue-500 mt-1 text-lg">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Enhanced Education Section */}
          <section id="education" className="mb-12">
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              <GraduationCap className="text-blue-600" size={24} />
              {currentContent.nav.education}
            </h3>
            {currentContent.education.map((edu, index) => (
              <div key={index} className={`${darkMode ? 'bg-gradient-to-r from-gray-700/50 to-gray-600/50' : 'bg-gradient-to-r from-blue-50 to-indigo-50'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{edu.degree}</h4>
                <p className="text-blue-600 font-medium mb-2">{edu.school}</p>
                <div className="flex justify-between items-center">
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.year}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-green-600/20 text-green-400' : 'bg-green-100 text-green-800'}`}>{edu.gpa}</span>
                </div>
              </div>
            ))}
          </section>

          {/* Enhanced Projects Section */}
          <section id="projects" className="mb-12">
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              <Globe className="text-blue-600" size={24} />
              {currentContent.nav.projects}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.projects.map((project, index) => (
                <div key={index} className={`group ${darkMode ? 'bg-gray-700/50' : 'bg-white'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'} rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{project.name}</h4>
                    <ExternalLink className="opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity duration-200" size={18} />
                  </div>
                  <p className="text-blue-500 text-sm font-medium mb-3 px-2 py-1 bg-blue-50 dark:bg-blue-900/30 rounded inline-block">{project.tech}</p>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Enhanced Achievements Section */}
          <section id="achievements">
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
              <Award className="text-blue-600" size={24} />
              {currentContent.nav.achievements}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentContent.achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center gap-3 p-4 rounded-lg ${darkMode ? 'bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-700/30' : 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200'} hover:scale-105 transition-transform duration-200`}>
                  <div className="flex-shrink-0">
                    <Star className="text-yellow-500" size={20} />
                  </div>
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{achievement}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Enhanced Contact Links */}
          <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex justify-center gap-8">
              {[
                { icon: Globe, text: currentContent.personalInfo.website, color: 'text-green-500' },
                { icon: Github, text: currentContent.personalInfo.github, color: 'text-gray-600' },
                { icon: Linkedin, text: currentContent.personalInfo.linkedin, color: 'text-blue-600' }
              ].map(({ icon: Icon, text, color }, index) => (
                <div key={index} className={`flex items-center gap-2 p-3 rounded-lg ${darkMode ? 'bg-gray-700/50 hover:bg-gray-600/50' : 'bg-gray-50 hover:bg-gray-100'} transition-all duration-200 cursor-pointer hover:scale-105`}>
                  <Icon className={color} size={18} />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;