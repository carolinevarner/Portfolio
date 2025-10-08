"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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
    <div className="min-h-screen bg-white">
      <header className="px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">Caroline.</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          
          <nav className="navigation-pill">
            <div className="flex items-center space-x-8">
              <a href="#home" className="navigation-link">Home</a>
              <a href="#about" className="navigation-link">About me</a>
              <a href="#services" className="navigation-link">Services</a>
              <a href="#work" className="navigation-link">My work</a>
              <a href="#testimonials" className="navigation-link">Testimonials</a>
            </div>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="moon-icon">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={0.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
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
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200">
        <Image
                src="/images/headshot2.jpg"
                alt="Caroline Varner"
                width={128}
                height={128}
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
            <a href="/CV_Resume.pdf" download="Caroline_Varner_Resume.pdf" className="cta-button-secondary">
              <span>my resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm mb-2">Introduction</p>
            <h2 className="text-4xl font-serif text-gray-900">About me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-80 h-96 rounded-2xl overflow-hidden bg-gray-200">
            <Image
                  src="/images/headshot2.jpg"
                  alt="Caroline Varner"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a passionate Software Engineering student at Kennesaw State University with an Interactive Design minor. My journey combines technical programming skills with creative design thinking, preparing me to build user-centered applications that bridge the gap between functionality and aesthetics.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">&lt;/&gt;</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                    <div className="text-sm text-gray-900 space-y-1">
                      <div>Java, Python, C++</div>
                      <div>HTML, CSS, JavaScript</div>
                      <div>React, Next.js</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-white">🎓</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                    <div className="text-sm text-gray-900">
                      BS in Software Engineering<br />
                      Interactive Design Minor<br />
                      Kennesaw State University
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-white">💼</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Projects</h3>
                    <div className="text-sm text-gray-900">
                      Academic & Personal Projects<br />
                      Graduating Dec 2025
                    </div>
                  </div>
                </div>
              </div>
              
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

      <section id="services" className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm mb-2">What i offers</p>
            <h2 className="text-4xl font-serif text-gray-900 mb-6">My services</h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              As a Software Engineering student with an Interactive Design minor, I bring a unique blend of technical programming skills and creative design thinking to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Development</h3>
              <p className="text-gray-800 mb-4">
                Creating responsive and interactive websites using modern frameworks like React and Next.js with a focus on user experience.
              </p>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                Read more →
              </a>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-xl shadow-lg border border-pink-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Software Engineering</h3>
              <p className="text-gray-800 mb-4">
                Developing robust applications using Java, Python, and C++ with strong problem-solving and algorithmic thinking skills.
              </p>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                Read more →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Design</h3>
              <p className="text-gray-800 mb-4">
                Combining technical skills with creative design principles to create intuitive and engaging user interfaces and experiences.
              </p>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                Read more →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Problem Solving</h3>
              <p className="text-gray-800 mb-4">
                Applying analytical thinking and technical knowledge to solve complex programming challenges and create efficient solutions.
              </p>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                Read more →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-500 text-sm mb-2">My portfolio</p>
            <h2 className="text-4xl font-serif text-gray-900 mb-6">My latest work</h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                <p className="text-gray-800">web design</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                <p className="text-gray-800">mobile app</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                <p className="text-gray-800">web design</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                <p className="text-gray-800">ui/ux design</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="border border-gray-300 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2 mx-auto shadow-md">
              <span>Show more →</span>
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="px-8 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-2">Connect with me</p>
          <h2 className="text-4xl font-serif text-gray-900 mb-6">Get in touch</h2>
          <p className="text-lg text-gray-800 mb-12">
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
                className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-600"
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email" 
                required
                className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-600"
              />
            </div>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your message" 
              rows={4}
              required
              className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-600 resize-none"
            ></textarea>
            
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                Thank you! Your message has been sent successfully. I&apos;ll get back to you soon!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
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
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-xl font-bold text-gray-900">Caroline.</span>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-800">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>caroline.varner@students.kennesaw.edu</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




