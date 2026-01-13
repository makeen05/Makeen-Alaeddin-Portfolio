import { useEffect, useState } from 'react'
import { Analytics } from "@vercel/analytics/react"
import './App.css'
import profileImage from './assets/profile.png'
import pm from './assets/pm.png'
import br from './assets/br.png'
import mj from './assets/mj.png'
import ic from './assets/ic.png'
import sp from './assets/sp.png'
import cl from './assets/cl.png'
import tr from './assets/tr.png'
import wk from './assets/wk.png'
import sl from './assets/sl.png'
import bt from './assets/bt.png'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <Analytics />
      <div className="min-h-screen bg-gray-900">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-lg sm:text-xl font-bold text-white">
                Makeen Alaeddin
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6 lg:space-x-8">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
                >
                  Experience
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('volunteering')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
                >
                  Volunteering
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
                >
                  Skills
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-300 hover:text-white focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('experience')}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    Experience
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    Projects
                  </button>
                  <button 
                    onClick={() => scrollToSection('volunteering')}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    Volunteering
                  </button>
                  <button 
                    onClick={() => scrollToSection('skills')}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    Skills
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="animate-slide-up text-center lg:text-left lg:pr-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                  Welcome to <span className="text-blue-400">Makeen Alaeddin's</span> Portfolio!
                </h1>
                <div className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  I'm entering my third year studying Mathematics and Computer Science at UNSW. 
                  I love learning new things by building cool projects and solving real-world problems through software!
                </div>
                <div className="flex flex-col gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                  >
                    Learn More
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="bg-gray-800 text-blue-400 border-2 border-blue-600 hover:bg-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-sm sm:text-base"
                  >
                    View My Projects
                  </button>
                </div>
              </div>
              <div className="relative animate-float lg:pl-8 mt-8 lg:mt-0">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl transform rotate-6"></div>
                  <div className="absolute inset-0 bg-yellow-300 rounded-3xl transform -rotate-6"></div>
                  <div className="relative bg-gray-800 rounded-3xl p-3 sm:p-4 shadow-2xl flex items-center justify-center">
                    <img
                      src={profileImage}
                      alt="Makeen Alaeddin"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Experience
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
              {/* Software Engineering Intern */}
              <div className="bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Software Engineering Intern</h3>
                    <p className="text-blue-400 font-medium mb-2">Lamigo, https://lamigo.ai/</p>
                  </div>
                  <div className="text-sm text-gray-400">October 2025 – December 2025</div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Built core features for a full-stack employee onboarding platform using React, Next.js, TypeScript, and Supabase                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Implemented screen-recording workflows for admins and real-time AI voice guidance for learners                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Integrated AI and media tools including Twelve Labs, Google AI Studio, MediaRecorder API, FFmpeg.wasm, and WebSockets
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Developed reusable custom hooks and backend endpoints for video processing, audio streaming, authentication, and AI session state
                  </li>
                </ul>
              </div>

              {/* Private Tutor */}
              <div className="bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Private Tutor — Physics & Mathematics</h3>
                    <p className="text-blue-400 font-medium mb-2">Evolutionary Tutors + Self-Employed</p>
                  </div>
                  <div className="text-sm text-gray-400">February 2024 – Present</div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Provided personalised one-on-one tutoring for students in Years 7–12
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Tailored lesson plans to individual learning styles and academic goals
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Simplified complex concepts to improve comprehension and exam performance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                My Projects
              </h2>
              <p className="text-base sm:text-lg text-gray-300">
                Click to explore each project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Unemployed Project */}
              <a 
                href="unemployed-delta.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Unemployed - GitHub Repository to Job Matching Platform</h3>
                  <p className="text-sm text-gray-400 mb-4">Full-Stack Web Application</p>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                    A full-stack platform that analyzes GitHub repositories to match users with relevant job opportunities. 
                    Features intelligent repository analysis leveraging GITHUB API, AI-powered job keyword generation using Google Gemini, 
                    and job discovery via Seek scraping.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs">React</span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs">Express</span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs">Python</span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs">Flask</span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs">Vercel</span>
                    <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs">Railway</span>
                  </div>
                </div>
              </a>

              {/* Campus Resource Tracker */}
              <a 
                href="[INSERT LINK]" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Campus Resource Tracker</h3>
                  <p className="text-sm text-gray-400 mb-4">Full-Stack Web Application</p>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                    A resource discovery platform helping students locate nearby campus resources like toilets, 
                    power outlets, and vending machines. Features JWT authentication, MongoDB geospatial indexing, 
                    and interactive maps with Leaflet.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs">React</span>
                    <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs">TypeScript</span>
                    <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs">MongoDB</span>
                    <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs">JWT</span>
                    <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-xs">Leaflet</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Volunteering Section */}
        <section id="volunteering" className="section-padding bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Volunteering
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
              {/* UNSW CSESoc */}
              <div className="bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-700">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">UNSW CSESoc</h3>
                    <p className="text-blue-400 font-medium mb-2">Socials Director</p>
                  </div>
                  <div className="text-sm text-gray-400">November 2024 – November 2025</div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Led planning and execution of large-scale social events for UNSW Computer Science students
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Managed a team of 10 subcommittee members, coordinating weekly meetings and events
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Collaborated with Careers and Outreach portfolios on philanthropy and diversity-focused initiatives
                  </li>
                </ul>
              </div>

              {/* UNSW Mathematics Society */}
              <div className="bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-700">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">UNSW Mathematics Society</h3>
                    <p className="text-blue-400 font-medium mb-2">Socials Subcommittee Member</p>
                  </div>
                  <div className="text-sm text-gray-400">March 2024 – November 2024</div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Organised large-scale social events with over 200 attendees
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Coordinated with business owners and venues to manage logistics and partnerships
                  </li>
                </ul>
              </div>

              {/* UNSW Yellow Shirts */}
              <div className="bg-gray-800 rounded-xl p-6 sm:p-8 border border-gray-700">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">UNSW Yellow Shirts</h3>
                    <p className="text-blue-400 font-medium mb-2">Volunteer</p>
                  </div>
                  <div className="text-sm text-gray-400">November 2024 – February 2025</div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Welcomed and oriented thousands of new students during O-Week
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Led campus tours, icebreakers, and social events to foster inclusion
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Collaborated with a diverse team of 100+ volunteers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="section-padding bg-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Technical Skills
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-700">
                <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['C', 'Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Assembly'].map(skill => (
                    <span key={skill} className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-700">
                <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Next.js', 'Express', 'REST APIs', 'JWT Authentication', 'JUnit'].map(skill => (
                    <span key={skill} className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl p-6 sm:p-8 border border-gray-700">
                <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Gitlab CI/CD', 'MongoDB', 'Supabase', 'Jest', 'Postman', 'Vercel', 'Railway'].map(skill => (
                    <span key={skill} className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vote Section */}
        <section className="relative flex items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 sm:mb-8 flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
                    <img
                      src={bt}
                      alt="Makeen Alaeddin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-6 sm:mb-8">
                Thanks for reading and lets make this happen by putting me as your <span className="text-yellow-400" style={{
                  textShadow: '0 0 10px #fbbf24'
                }}>#1 </span>preference for <span className="text-yellow-400" style={{
                  textShadow: '0 0 10px #fbbf24'
                }}>Co-President </span>and <span className="text-yellow-400" style={{
                  textShadow: '0 0 10px #fbbf24'
                }}>Vice President (External) </span>:)
              </h2>
              
              <p className="text-sm sm:text-base text-white px-4">
                Got a question or just want to say hi? I'm always up for a chat! Reach out on @makeenala on instagram or makeen2023@gmail.com 💃🏻
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App