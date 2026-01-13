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
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
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
                  onClick={() => scrollToSection('contributions')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
                >
                  Contributions
                </button>
                <button 
                  onClick={() => scrollToSection('vision')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm lg:text-base"
                >
                  Vision
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
                    onClick={() => scrollToSection('contributions')}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    Contributions
                  </button>
                  <button 
                    onClick={() => scrollToSection('vision')}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    Vision
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
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  CSESoc Socials Director 2025
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                  Makeen <span className="text-blue-400">Alaeddin</span>
                </h1>
                <div className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-2 sm:mb-4">
                  Running for
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-yellow-400 mb-6 sm:mb-8" style={{
                  textShadow: '0 0 30px #fbbf24'
                }}>
                  Co-President<br/>
                  & Vice President (External)
                </div>
                <div className="flex flex-col gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
                  >
                    About Me
                  </button>
                  <button 
                    onClick={() => scrollToSection('contributions')}
                    className="bg-gray-800 text-blue-400 border-2 border-blue-600 hover:bg-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-sm sm:text-base"
                  >
                    View Contributions
                  </button>
                  <button 
                    onClick={() => scrollToSection('vision')}
                    className="bg-gray-800 text-blue-400 border-2 border-blue-600 hover:bg-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-sm sm:text-base"
                  >
                    See My Vision
                  </button>
                </div>
              </div>
              <div className="relative animate-float lg:pl-8 mt-8 lg:mt-0">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl transform rotate-6"></div>
                  <div className="absolute inset-0 bg-yellow-400 rounded-3xl transform -rotate-6"></div>
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

        {/* About Section */}
        <section id="about" className="section-padding bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              About Me
            </h2>
            <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-left border border-gray-700">
              <p className="text-base sm:text-lg leading-relaxed text-gray-300">
                Hiiii I'm Makeen! 👋 I'm in my second year of university studying Maths and Computer 
                Science, and one of the amazing super cool <b>2025 Socials Directors at CSESoc!</b>
                <br></br>
                <br></br>
                From being in Socials at CSESoc, I've been able to have a <b>direct impact on those in their first year, those looking for their first friend at uni, and maybe even you!</b> From our flagship peer mentoring program ❤️, to paint n sips 🎨 and sport days 🏀, I've been able to make CSESoc a space for everyone to easily meet new people whilst having fun! 
                <br></br>
                <br></br>
                I've met so many cool people, learnt so many things about myself and have proudly grown into the person I am today.
                I've been lucky enough to be a part of CSESoc since first year, and I can honestly say that its been the most valuable, memorable and fun experience that I will keep with me for the rest of my life. 
                <br></br>
                <br></br>
                I aim to continue to make CSESoc a space where EVERYONE belongs through our diverse range of events, hopefully in the 2026 exec team 😊
              </p>
            </div>
          </div>
        </section>

        {/* Contributions Section */}
        <section id="contributions" className="section-padding bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                My Contributions
              </h2>
              <p className="text-base sm:text-lg text-gray-300">
                Snapshots of my work with CSESoc!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Contribution Cards */}
              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                  <img
                    src={pm}
                    alt="Peer Mentoring Program"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Peer Mentoring Program</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">2025</p>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  Organised and managed CSESoc's flagship peer mentoring programing. We helped first year undergraduate and postgraduate students ease into their studies and make friends!
                </p>
                <div className="flex items-center text-green-400 font-medium text-sm">
                  ⭐️ 200+ students mentored
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                  <img
                    src={br}
                    alt="Brushes and Blizzards"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Brushes and Blizzards</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">2025</p>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  A paint n sip! My favourite event of the year teehee. Super fun to plan and execute but realised how bad I am at painting lol.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                  <img
                    src={mj}
                    alt="Mahjong Night"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">MAHJONG Night</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">2025</p>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  This was CSESoc's first ever Mahjong night! Tons of new faces and great to see some people's competitve nature come out hehe
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                  <img
                    src={ic}
                    alt="Ice Skating"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Ice Skating</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">2025</p>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  Off campus event with ICESoc!
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                  <img
                    src={sp}
                    alt="Sports Day"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">CSESOC x ENGSOC Sports Day</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">2025</p>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  This was one of my first events as Socials Director, will never forget this one lol
                </p>
                <div className="flex items-center text-green-400 font-medium text-sm">
                  💚 100+ attendees
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                  <img
                    src={cl}
                    alt="Bouldering"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Bouldering</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">2024</p>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  Crowd favourite 😆
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                  <img
                    src={tr}
                    alt="Trivia Night"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Trivia Night</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">2025</p>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  This was actually our peer mentor outduction in term 1. So happy to see how close the groups have gotten 🥹.
                </p>
                <div className="flex items-center text-green-400 font-medium text-sm">
                  🎉 50+ participants
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                  <img
                    src={wk}
                    alt="Stress Less Week"
                    className="w-full h-full object-cover rounded-2xl"
                  />              
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Stress Less Week</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">2024</p>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  I gave someone a fake neck tattoo at this event LOL.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                  <img
                    src={sl}
                    alt="Socials Team"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Socials 25'!</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-4">2025</p>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  The best port I could ever ask for no glaze. An experience I'll take way beyond my time in university ❤️.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="section-padding bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Vision for 2026
              </h2>
              <p className="text-base sm:text-lg text-gray-300">
                Let's elevate CSESoc!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Internal Structure */}
              <div className="bg-gray-900 border border-blue-800/30 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-900 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <div className="text-xl sm:text-2xl">🫀</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Internal Structure</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Encourage students to get involved, meet new people, and try that program out!</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Ensure all interactions, whether that be internally or externally, reflect the welcoming, supportive and innovative culture we aim to foster</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Make sure all voices are heard! Whether that be a subcom member to an exec</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Celebrate the contributions of volunteers and members to build a stronger sense of belonging and appreciation</span>
                  </li>
                </ul>
              </div>

              {/* Innovation & Growth */}
              <div className="bg-gray-900 border border-purple-600/30 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-900 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <div className="text-xl sm:text-2xl">🚀</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Innovation & Growth!</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Pilot new event initiatives and mentorship programs! I was thinking of a program where mentors are able to critique and provide guidance to those wanting to build their first personal project</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Encourage fresh ideas from across the society by creating regular brainstorming sessions, feedback threads and “pitch your event” opportunities.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Create cross-university collaboration initiatives</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-green-600/30 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-900 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <div className="text-xl sm:text-2xl">🤝</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Inclusivity and Diversity</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Continue to collaborate with a variety of socities including ENGSoc, WIT, MahjongSoc, IceSoc, and more to create events that are welcoming to ANYONE regardless of background or faculty.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Aim to host a more diverse range events, introducing events we have never seen before!</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Collect feedback via attendance form specifically asking how to improve accessibility in future events.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-yellow-600/30 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-900 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <div className="text-xl sm:text-2xl">💼</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Professional Development</h3>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Launch innovative project-based learning initiatives. I was thinking to collaborate with more start-ups on this for mutual benefits :)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Involve CSESoc alumni for panel talks and networking nights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Offer more technical workshops/ competitions that focus on emerging technologies and opportunities!</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-gray-300">Expand industry partnerships for internship opportunities</span>
                  </li>
                </ul>
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