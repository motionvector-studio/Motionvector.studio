import React, { useState, useEffect, useRef } from 'react';
import { Play, ArrowRight, Zap, Sparkles, Video } from 'lucide-react';

// Custom Hook for Intersection Observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isInView];
};

const MotionVectorStudio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [heroRef, heroInView] = useInView();
  const [portfolioRef, portfolioInView] = useInView();
  const [servicesRef, servicesInView] = useInView();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    { id: 1, title: 'Brand Launch', category: 'Logo Motion', gradient: 'from-cyan-500 to-blue-600', span: 'col-span-2 row-span-2' },
    { id: 2, title: 'Product Explainer', category: 'Animation', gradient: 'from-purple-500 to-pink-600', span: 'col-span-1 row-span-1' },
    { id: 3, title: 'Tech Startup', category: 'Lottie', gradient: 'from-amber-500 to-orange-600', span: 'col-span-1 row-span-1' },
    { id: 4, title: 'SaaS Demo', category: 'Explainer', gradient: 'from-emerald-500 to-teal-600', span: 'col-span-1 row-span-2' },
    { id: 5, title: 'App Animation', category: 'Motion', gradient: 'from-violet-500 to-fuchsia-600', span: 'col-span-2 row-span-1' },
  ];

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Lottie Animation',
      description: 'Lightweight, scalable animations that load instantly and perform flawlessly across all devices.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Logo Motion',
      description: 'Transform static logos into dynamic brand experiences that captivate and engage your audience.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Explainer Videos',
      description: 'Complex ideas simplified through precision-crafted vector animations that inform and inspire.',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <div className="bg-[#050505] text-[#F5F5F5] font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrollY > 50 
            ? 'rgba(5, 5, 5, 0.8)' 
            : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
          borderBottom: scrollY > 50 ? '1px solid rgba(245, 245, 245, 0.1)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">Motion Vector</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm hover:text-cyan-400 transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('work')}
              className="text-sm hover:text-cyan-400 transition-colors duration-300"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          />
        </div>

        {/* Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20 mix-blend-overlay">
          {/* Replace this div with your video element:
              <video autoPlay muted loop className="w-full h-full object-cover opacity-30">
                <source src="/your-video.mp4" type="video/mp4" />
              </video>
          */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div 
            className="space-y-8"
            style={{
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6">
              Vector Precision • Motion Perfection
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Motion That
              </span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Moves Brands
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We craft pixel-perfect vector animations that transform your brand identity 
              into unforgettable motion experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <button 
                onClick={() => scrollToSection('work')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2">
            <div 
              className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDuration: '1.5s' }}
            />
          </div>
        </div>
      </section>

      {/* Bento Grid Portfolio */}
      <section id="work" className="py-32 px-6">
        <div ref={portfolioRef} className="max-w-7xl mx-auto">
          <div 
            className="mb-16 text-center"
            style={{
              opacity: portfolioInView ? 1 : 0,
              transform: portfolioInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A curated selection of motion design projects that define modern brand storytelling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative ${project.span} overflow-hidden rounded-2xl cursor-pointer`}
                style={{
                  opacity: portfolioInView ? 1 : 0,
                  transform: portfolioInView ? 'translateY(0)' : 'translateY(60px)',
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`
                }}
              >
                {/* Project Background - Replace with actual project images */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}>
                  {/* Add your project image/video here:
                      <img src="/project-image.jpg" className="w-full h-full object-cover" alt={project.title} />
                  */}
                </div>

                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* Noise Texture */}
                <div 
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                  }}
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs font-medium text-cyan-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative">
        {/* Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent pointer-events-none" />
        
        <div ref={servicesRef} className="max-w-7xl mx-auto relative z-10">
          <div 
            className="mb-16 text-center"
            style={{
              opacity: servicesInView ? 1 : 0,
              transform: servicesInView ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                What We Do Best
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized motion design services built for modern brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/[0.05] transition-all duration-500"
                style={{
                  opacity: servicesInView ? 1 : 0,
                  transform: servicesInView ? 'translateY(0)' : 'translateY(60px)',
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`
                }}
              >
                {/* Icon Container */}
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <div className="flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color} p-[1px]`}>
                  <div className="w-full h-full bg-[#050505] rounded-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-black">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Let's Create
              </span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to elevate your brand with precision motion design? 
              Let's start a conversation about your next project.
            </p>

            <div className="pt-8">
              <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium text-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center gap-3">
                Get In Touch
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="text-lg font-bold">Motion Vector Studio</span>
          </div>
          <div className="text-sm text-gray-500">
            © 2026 Motion Vector Studio. Crafted with precision.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MotionVectorStudio;
