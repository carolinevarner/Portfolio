import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="px-8 py-6">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">William.</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About me</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</a>
            <a href="#work" className="text-gray-700 hover:text-gray-900 transition-colors">My work</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors">Testimonials</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <span>Connect</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
          </div>
          
          {/* Greeting */}
          <div className="mb-6">
            <h2 className="text-xl text-gray-700 mb-2">Hi! I'm William Mark 👋</h2>
          </div>
          
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
              frontend web developer<br />
              <span className="text-gray-600">based in london.</span>
            </h1>
          </div>
          
          {/* Description */}
          <div className="mb-12 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2">
              <span>connect with me</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <span>my resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm mb-2">Introduction</p>
            <h2 className="text-4xl font-serif text-gray-900">About me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-80 h-96 rounded-2xl bg-gray-200 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
              </p>
              
              {/* Information Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">&lt;/&gt;</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>HTML, CSS, JavaScript</div>
                      <div>React Js, Next Js</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-white">🎓</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                    <div className="text-sm text-gray-600">
                      B.Tech in Computer Science
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-white">💼</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Projects</h3>
                    <div className="text-sm text-gray-600">
                      Built more than 5 projects
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tools Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tools i use</h3>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">VS</span>
                  </div>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white">🔥</span>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white">🐙</span>
                  </div>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">F</span>
                  </div>
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white">♦</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm mb-2">What i offers</p>
            <h2 className="text-4xl font-serif text-gray-900 mb-6">My services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Web design</h3>
              <p className="text-gray-600 mb-4">
                Web development is the process of building, programming...
              </p>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                Read more →
              </a>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-xl shadow-md border border-pink-100">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile app</h3>
              <p className="text-gray-600 mb-4">
                Web development is the process of building, programming...
              </p>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                Read more →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">UI/UX design</h3>
              <p className="text-gray-600 mb-4">
                Web development is the process of building, programming...
              </p>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                Read more →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white">🖼️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Graphics design</h3>
              <p className="text-gray-600 mb-4">
                Web development is the process of building, programming...
              </p>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                Read more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm mb-2">My portfolio</p>
            <h2 className="text-4xl font-serif text-gray-900 mb-6">My latest work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-6xl">📱</span>
              </div>
              <div className="p-6 relative">
                <div className="absolute bottom-6 right-6">
                  <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Frontend Project</h3>
                <p className="text-gray-600">web design</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <span className="text-6xl">🗺️</span>
              </div>
              <div className="p-6 relative">
                <div className="absolute bottom-6 right-6">
                  <button className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Geo Based App</h3>
                <p className="text-gray-600">mobile app</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <span className="text-6xl">📷</span>
              </div>
              <div className="p-6 relative">
                <div className="absolute bottom-6 right-6">
                  <button className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Photography Site</h3>
                <p className="text-gray-600">web design</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center">
                <span className="text-6xl">⌨️</span>
              </div>
              <div className="p-6 relative">
                <div className="absolute bottom-6 right-6">
                  <button className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">UI/UX Designing</h3>
                <p className="text-gray-600">ui/ux design</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 mx-auto">
              <span>Show more →</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-2">Connect with me</p>
          <h2 className="text-4xl font-serif text-gray-900 mb-6">Get in touch</h2>
          <p className="text-lg text-gray-600 mb-12">
            I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
          </p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <textarea 
              placeholder="Enter your message" 
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            ></textarea>
            <button 
              type="submit"
              className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2 mx-auto"
            >
              <span>Submit now →</span>
            </button>
          </form>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-xl font-bold text-gray-900">William.</span>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>greatstackdev@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
