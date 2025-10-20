"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const aboutPhotos = [
    '/aboutme_photos/forrest.jpg',
    '/aboutme_photos/fall.jpg',
    '/aboutme_photos/bridge.jpg',
    '/aboutme_photos/kayaking.jpg'
  ];

  useEffect(() => {
    document.documentElement.classList.add('light-mode');
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const emailjs = (await import('@emailjs/browser')).default;
      
      emailjs.init("YOUR_PUBLIC_KEY");
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'carolinevarner04@gmail.com'
      };

      await emailjs.send(
        'service_kxm8bju',
        'YOUR_TEMPLATE_ID',
        templateParams
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className="px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Caroline.</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          
          <nav className="navigation-pill">
            <div className="flex items-center space-x-8">
              <a href="#home" className="navigation-link">Home</a>
              <a href="#about" className="navigation-link">About me</a>
              <a href="#services" className="navigation-link">Skills</a>
              <a href="#work" className="navigation-link">My work</a>
              <a href="#testimonials" className="navigation-link">Testimonials</a>
            </div>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="moon-icon">
              {isDarkMode ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={0.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={0.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <a href="#contact" className="connect-button-outline">
              <span>Connect</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-200">
        <Image
                src="/images/headshot2.jpg"
                alt="Caroline Varner"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="greeting-text">Hi! I&apos;m Caroline Varner 👋🏻</h2>
          </div>
          
          <div className="mb-8">
            <h1 className="main-title">
              software engineering student<br />
              based in atlanta, georgia.
            </h1>
          </div>
          
          <div className="mb-12 max-w-2xl mx-auto">
            <p className="hero-description">
              I am a Software Engineering student at Kennesaw State University with an Interactive Design minor. Graduating December 2025, I&apos;m seeking a full-time position to gain experience in the field and contribute to innovative projects.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://github.com/carolinevarner" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:bg-gray-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/caroline-varner/" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:bg-gray-200">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="/CarolineVarner_Resume.pdf" target="_blank" rel="noopener noreferrer" className="border-1 border-black text-black px-6 py-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:bg-gray-200">
              <span>my resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className={`px-8 py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Introduction</p>
            <h2 className={`text-4xl font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="relative w-96 h-[500px] rounded-2xl overflow-hidden bg-gray-200 shadow-2xl">
                <Image
                  src={aboutPhotos[currentPhotoIndex]}
                  alt="Caroline Varner"
                  width={384}
                  height={500}
                  className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                />
                
                {/* Photo indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {aboutPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentPhotoIndex 
                          ? 'bg-white shadow-lg' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Navigation arrows */}
                <button
                  onClick={() => setCurrentPhotoIndex(
                    currentPhotoIndex === 0 ? aboutPhotos.length - 1 : currentPhotoIndex - 1
                  )}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={() => setCurrentPhotoIndex(
                    currentPhotoIndex === aboutPhotos.length - 1 ? 0 : currentPhotoIndex + 1
                  )}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {/* Originally from Savannah, Georgia, I&apos;m a passionate Software Engineering student at Kennesaw State University with an Interactive Design minor. When I&apos;m not coding, you&apos;ll find me hiking through Georgia&apos;s beautiful trails, creating art, catching live music at concerts, or hanging out with friends. I believe that the best solutions come from combining creativity with innovative code. */}
                I’m a Software Engineering student at Kennesaw State University, also pursuing a minor in Interactive Design. Originally from Savannah, Georgia, I’ve always been drawn to the intersection of creativity and technology—whether I’m writing code, designing user-focused solutions, or sketching new ideas.
                When I’m not working on projects, you can usually find me hiking Georgia’s trails, making art, enjoying live music, or spending time with friends.                
                <br></br>
                <br></br>
                {/* When I’m not working on projects, you can usually find me hiking Georgia’s trails, making art, enjoying live music, or spending time with friends. */}
                I believe great software comes from both innovation and collaboration, and I’m passionate about building things that are not only functional but meaningful.
                I enjoy solving complex problems with clean, thoughtful code and a creative mindset. Whether it’s developing user-centered applications or exploring new technologies, I’m always eager to learn, grow, and turn ideas into something real.              
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={`px-8 py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>What I offer</p>
            <h2 className={`text-4xl font-serif mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Skills & Technologies</h2>
            <p className={`text-lg max-w-4xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I strive to blend technical problem-solving with creative design thinking in everything I build. Throughout my time at Kennesaw State University, I&apos;ve explored a variety of programming languages, frameworks, and tools—always pushing myself to learn something new. I enjoy experimenting with different technologies to better understand how great software is built, both in function and in user experience.            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Programming Languages */}
            <div className={`p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-white/10' : 'bg-white border-gray-200'}`}>
              <h3 className={`text-xl font-semibold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">☕</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Java</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🎯</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>C#</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">⚙️</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>C++</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🐍</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Python</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🔷</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>TypeScript</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🗄️</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>SQL</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🌐</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>HTML/CSS</span>
                </div>
              </div>
            </div>
            
            {/* Developer Tools */}
            <div className={`p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-white/10' : 'bg-white border-gray-200'}`}>
              <h3 className={`text-xl font-semibold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Developer Tools
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">💻</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>VS Code</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🧠</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>IntelliJ</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🐍</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>PyCharm</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">📊</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>MS Office</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🎨</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Adobe CC</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">☁️</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>AWS</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🐙</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🎭</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Figma</span>
                </div>
              </div>
            </div>
            
            {/* Frameworks & Libraries */}
            <div className={`p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-white/10' : 'bg-white border-gray-200'}`}>
              <h3 className={`text-xl font-semibold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">⚛️</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>React.js</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">▲</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Next.js</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🟣</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>ASP.NET Core</span>
                </div>
              </div>
            </div>
            
            {/* Core Strengths */}
            <div className={`p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-white/10' : 'bg-white border-gray-200'}`}>
              <h3 className={`text-xl font-semibold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Core Strengths
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">⚡</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Technical Proficiency</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🤝</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Collaboration</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">🔄</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Adaptability</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">💡</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Innovation</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">💬</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Communication</span>
                </div>
                <div className={`p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="text-3xl mb-2">📋</div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Project Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className={`px-8 py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>My projects</p>
            <h2 className={`text-4xl font-serif mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>My latest work</h2>
            <p className={`text-lg max-w-4xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Welcome to my software engineering portfolio! Here, you&apos;ll find a collection of projects that highlight my experience in building solutions across different areas of development—from system design and backend logic to problem-solving and creative technical implementation.            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`rounded-xl shadow-lg border hover:shadow-xl transition-shadow flex flex-col h-full ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-white/10' : 'bg-white border-gray-200'}`}>
              <div className={`h-48 bg-gradient-to-br flex items-center justify-center ${isDarkMode ? 'from-blue-900/30 to-purple-900/30' : 'from-blue-100 to-purple-100'}`}>
                <span className="text-6xl">📊</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>SPM Project Management</h3>
                <p className={`text-base mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  A comprehensive project management web application built with ASP.NET Core MVC and MongoDB. Features task management, risk tracking, requirements gathering, and team collaboration tools with AWS deployment.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>ASP.NET Core</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>C#</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>MongoDB</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>AWS</span>
                </div>
                <div className="flex gap-3 mt-auto">
                  <a href="https://github.com/carolinevarner/SPM-project" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center hover:bg-gray-800 flex-1">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://www.youtube.com/watch?v=alnv505AxKQ&t=7s" target="_blank" rel="noopener noreferrer" className={`border px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center hover:bg-gray-200 flex-1 ${isDarkMode ? 'border-gray-600 text-white hover:bg-gray-700' : 'border-gray-300 text-gray-900 hover:bg-gray-50'}`}>
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Video Demo
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`rounded-xl shadow-lg border hover:shadow-xl transition-shadow flex flex-col h-full ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-white/10' : 'bg-white border-gray-200'}`}>
              <div className={`h-48 bg-gradient-to-br flex items-center justify-center ${isDarkMode ? 'from-green-900/30 to-blue-900/30' : 'from-green-100 to-blue-100'}`}>
                <span className="text-6xl">💰</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>FlowCounts</h3>
                <p className={`text-base mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  A web-based accounting system with role-based access control, chart of accounts management, ledgers, financial ratios, and comprehensive event logging for business financial tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>Django</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>React</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>Python</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>JavaScript</span>
                </div>
                <a href="https://github.com/carolinevarner/FlowCounts" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center hover:bg-gray-800 mt-auto">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            
            <div className={`rounded-xl shadow-lg border hover:shadow-xl transition-shadow flex flex-col h-full ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-white/10' : 'bg-white border-gray-200'}`}>
              <div className={`h-48 bg-gradient-to-br flex items-center justify-center ${isDarkMode ? 'from-purple-900/30 to-pink-900/30' : 'from-purple-100 to-pink-100'}`}>
                <span className="text-6xl">🏪</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Restaurant Simulation</h3>
                <p className={`text-base mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  C# implementation of core OS concepts including multi-threading with resource synchronization and IPC using named pipes. Demonstrates thread management, deadlock handling, and inter-process communication mechanisms.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>C#</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>Multi-threading</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>IPC</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>.NET</span>
                </div>
                <a href="https://github.com/carolinevarner/FusionLotus_RestaurantSimulation" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center hover:bg-gray-800 mt-auto">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
            
            <div className={`rounded-xl shadow-lg border hover:shadow-xl transition-shadow flex flex-col h-full ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-white/10' : 'bg-white border-gray-200'}`}>
              <div className={`h-48 bg-gradient-to-br flex items-center justify-center ${isDarkMode ? 'from-yellow-900/30 to-orange-900/30' : 'from-yellow-100 to-orange-100'}`}>
                <span className="text-6xl">🤖</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>AI Threat Modeler</h3>
                <p className={`text-base mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  An AI-powered security threat modeling application that helps identify and assess potential security vulnerabilities in software systems using machine learning algorithms and security best practices.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>AI/ML</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>Python</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>Security</span>
                  <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>Threat Modeling</span>
                </div>
                <a href="https://github.com/carolinevarner/ai-threat-modeler" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center hover:bg-gray-800 mt-auto">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={`px-8 py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Connect with me</p>
          <h2 className={`text-4xl font-serif mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Get in touch</h2>
          <p className={`text-lg mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name" 
                required
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${isDarkMode ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400' : 'border-gray-400 bg-white text-gray-900 placeholder-gray-600'}`}
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email" 
                required
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${isDarkMode ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400' : 'border-gray-400 bg-white text-gray-900 placeholder-gray-600'}`}
              />
            </div>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message" 
              rows={4}
              required
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none ${isDarkMode ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400' : 'border-gray-400 bg-white text-gray-900 placeholder-gray-600'}`}
            ></textarea>
            
            {submitStatus === 'success' && (
              <div className={`border px-4 py-3 rounded-lg ${isDarkMode ? 'bg-green-900/20 border-green-600 text-green-400' : 'bg-green-100 border-green-400 text-green-700'}`}>
                Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className={`border px-4 py-3 rounded-lg ${isDarkMode ? 'bg-red-900/20 border-red-600 text-red-400' : 'bg-red-100 border-red-400 text-red-700'}`}>
                Sorry, there was an error sending your message. Please try again or email me directly at carolinevarner04@gmail.com
              </div>
            )}
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="submit-button"
            >
              <span>{isSubmitting ? 'Sending...' : 'Submit now →'}</span>
            </button>
          </form>
          
          <div className={`mt-16 pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Caroline.</span>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div className={`flex items-center justify-center space-x-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>carolinevarner04@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




