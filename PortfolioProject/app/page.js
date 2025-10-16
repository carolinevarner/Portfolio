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
            <a href="#contact" className="cta-button-primary">
              <span>connect with me</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/CV_Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button-secondary">
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
                Originally from Savannah, Georgia, I&apos;m a passionate Software Engineering student at Kennesaw State University with an Interactive Design minor. When I&apos;m not coding, you&apos;ll find me hiking through Georgia&apos;s beautiful trails, creating art, catching live music at concerts, or hanging out with friends. I believe that the best solutions come from combining creativity with innovative code.
              </p>
              
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I always strive for innovation, collaboration, and writing good clean code. My approach to problem-solving blends technical expertise with creative thinking, allowing me to find unique solutions to complex challenges. I&apos;m incredibly hardworking and love the process of turning ideas into reality through code. Whether it&apos;s building user-centered applications or exploring new technologies, I&apos;m always excited to learn and grow in this ever-evolving field.
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
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              As a Software Engineering student with an Interactive Design minor, I bring a unique blend of technical programming skills and creative design thinking to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className={`p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-white/10' : 'bg-white border-gray-200'}`}>
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white">🌐</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Web Development</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                Creating responsive and interactive websites using modern frameworks like React and Next.js with a focus on user experience.
              </p>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                Read more →
              </a>
            </div>
            
            <div className={`p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-pink-900/20 border-pink-800 shadow-white/10' : 'bg-pink-50 border-pink-200'}`}>
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white">💻</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Software Engineering</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                Developing robust applications using Java, Python, and C++ with strong problem-solving and algorithmic thinking skills.
              </p>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                Read more →
              </a>
            </div>
            
            <div className={`p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-white/10' : 'bg-white border-gray-200'}`}>
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white">🎨</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Interactive Design</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                Combining technical skills with creative design principles to create intuitive and engaging user interfaces and experiences.
              </p>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                Read more →
              </a>
            </div>
            
            <div className={`p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-800 border-gray-700 shadow-white/10' : 'bg-white border-gray-200'}`}>
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white">🔧</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Problem Solving</h3>
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                Applying analytical thinking and technical knowledge to solve complex programming challenges and create efficient solutions.
              </p>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                Read more →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className={`px-8 py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>My portfolio</p>
            <h2 className={`text-4xl font-serif mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>My latest work</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
              Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-700 shadow-white/10' : 'bg-white'}`}>
              <div className={`h-64 bg-gradient-to-br flex items-center justify-center ${isDarkMode ? 'from-blue-900/30 to-purple-900/30' : 'from-blue-100 to-purple-100'}`}>
                <span className="text-6xl">📱</span>
              </div>
              <div className="p-6 relative">
                <div className="absolute bottom-6 right-6">
                  <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDarkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-200 hover:bg-gray-300'}`}>
                    <svg className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
                <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Frontend Project</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-800'}>web design</p>
              </div>
            </div>
            
            <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-700 shadow-white/10' : 'bg-white'}`}>
              <div className={`h-64 bg-gradient-to-br flex items-center justify-center ${isDarkMode ? 'from-green-900/30 to-blue-900/30' : 'from-green-100 to-blue-100'}`}>
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
                <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Geo Based App</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-800'}>mobile app</p>
              </div>
            </div>
            
            <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-700 shadow-white/10' : 'bg-white'}`}>
              <div className={`h-64 bg-gradient-to-br flex items-center justify-center ${isDarkMode ? 'from-purple-900/30 to-pink-900/30' : 'from-purple-100 to-pink-100'}`}>
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
                <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Photography Site</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-800'}>web design</p>
              </div>
            </div>
            
            <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${isDarkMode ? 'bg-gray-700 shadow-white/10' : 'bg-white'}`}>
              <div className={`h-64 bg-gradient-to-br flex items-center justify-center ${isDarkMode ? 'from-yellow-900/30 to-orange-900/30' : 'from-yellow-100 to-orange-100'}`}>
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
                <h3 className={`text-xl font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>UI/UX Designing</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-800'}>ui/ux design</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className={`border px-8 py-3 rounded-lg transition-colors flex items-center space-x-2 mx-auto shadow-md ${isDarkMode ? 'border-gray-600 text-white hover:bg-gray-700 shadow-white/10' : 'border-gray-300 text-gray-900 hover:bg-gray-50'}`}>
              <span>Show more →</span>
            </button>
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




