"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Users, Truck, Gem, MapPin, Star } from 'lucide-react';
import Logo from '@/components/Logo';

// ... (skipping unchanged code to save space) wait, the tool expects EXACT replacement string.
// Let me use a multi_replace instead or just copy the exact block.
// Wait, I can just replace the specific lines around the variants declaration.

const services = [
  {
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
    title: 'Pool Construction',
    description: 'Custom-designed pools built to your specifications and lifestyle.',
  },
  {
    image: "https://images.unsplash.com/photo-1562673005-7693bd6d6e54?q=80&w=2070&auto=format&fit=crop",
    title: 'Pool Renovation & Remodels',
    description: 'Transform your existing pool into a modern oasis of relaxation.',
  },
  {
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
    title: 'Maintenance Services',
    description: 'Keep your pool crystal clear and ready for enjoyment year-round.',
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    title: 'Repairs and Warranty',
    description: 'Expert repair technicians ensuring your equipment runs flawlessly.',
  },
  {
    image: "https://images.unsplash.com/photo-1520188740392-675e24c5813d?q=80&w=2070&auto=format&fit=crop",
    title: 'Custom Lighting',
    description: 'Enhance your outdoor living space with stunning night lighting solutions.',
  },
];

const features = [
  {
    icon: <ShieldCheck className="h-12 w-12 text-accent-cyan" />,
    title: 'Licensed & Insured',
    description: 'Peace of mind with our fully licensed and insured services.',
  },
  {
    icon: <Users className="h-12 w-12 text-accent-cyan" />,
    title: 'Expert Team',
    description: 'Our certified professionals are masters of their craft.',
  },
  {
    icon: <Truck className="h-12 w-12 text-accent-cyan" />,
    title: 'On-Time Delivery',
    description: 'We respect your time and deliver on our promises.',
  },
  {
    icon: <Gem className="h-12 w-12 text-accent-cyan" />,
    title: 'Financing Available',
    description: 'Flexible payment options to build your dream pool today.',
  },
];

const whyChooseUsFeatures = [
    'Over 20 years of experience in the Coachella Valley',
    'Licensed, insured, and certified technical team',
    'Complete project management from design to finish',
    'Premium materials and equipment from trusted brands',
    'Exceptional customer service and satisfaction guarantee',
    'Comprehensive warranty on all our remodeling and repairs',
];

// Reusable animation variants
const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function HomePage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const heroTexts = [
    {
      title: <>Build your dream <br className="hidden md:block"/><span className="text-accent-cyan">Swimming Pool</span></>,
      subtitle: "From luxury new construction to expert maintenance and lighting."
    },
    {
      title: <>Where the desert <br className="hidden md:block"/><span className="text-accent-cyan">Meets the springs</span></>,
      subtitle: "Transforming your Coachella Valley backyard into a personal oasis."
    },
    {
      title: <>Enhance Your <br className="hidden md:block"/><span className="text-accent-cyan">Outdoor Living</span> Space</>,
      subtitle: "The most trusted pool experts. Financing available today."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4500); // Cambia cada 4.5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-dark-gray font-sans overflow-x-hidden">
      {/* PREMIUM HEADER */}
      <header className="sticky top-0 z-50 flex flex-col w-full">
        {/* Top Info Bar - Sleek & Thin */}
        <div className="bg-[#0a2540] text-gray-300 text-xs py-1.5 hidden md:block border-b border-light-gray/10">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a href="tel:2285552500" className="flex items-center gap-2 hover:text-accent-cyan transition-colors cursor-pointer group">
                <Phone size={14} className="group-hover:animate-pulse" />
                <span className="font-medium tracking-wide">(228) 555-2500</span>
              </a>
              <a href="mailto:info@oceanspringstech.com" className="flex items-center gap-2 hover:text-accent-cyan transition-colors cursor-pointer group">
                <Mail size={14} />
                <span className="font-medium tracking-wide">info@oceanspringstech.com</span>
              </a>
            </div>
            <div className="tracking-wide">
              <span className="font-bold text-accent-cyan">Financing Available!</span> <span className="text-gray-500 mx-2">|</span> 
              <span>Licensed & Insured</span> <span className="text-gray-500 mx-2">|</span> 
              <span>Coachella Valley, CA</span>
            </div>
          </div>
        </div>

        {/* Main Navigation - Glassmorphism */}
        <div className="bg-white/85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-white/20 py-3 transition-all duration-300">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Area */}
                <div className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative">
                      <Image
                        src="/logo-mascota.avif"
                        alt="OSTI Mascot"
                        width={45}
                        height={45}
                        priority
                        className="rounded-full shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute -inset-1 bg-gradient-to-tr from-accent-cyan to-primary-blue rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
                    </div>
                    <div className="hidden sm:block">
                      <Logo />
                    </div>
                </div>

                {/* Nav Links with Animated Underlines */}
                <nav className="hidden lg:flex items-center space-x-8 font-semibold text-sm tracking-wide text-[#0a2540]">
                    <a href="#" className="relative group text-accent-cyan">
                      Home
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent-cyan rounded-full"></span>
                    </a>
                    {['Services', 'About Us', 'Portfolio', 'Reviews', 'Contact'].map((item) => (
                      <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="relative group hover:text-accent-cyan transition-colors duration-300">
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-cyan rounded-full transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ))}
                </nav>

                {/* Glowing Premium CTA Button */}
                <button className="relative group overflow-hidden bg-gradient-to-r from-primary-blue to-[#0a2540] text-white font-bold py-2.5 px-7 rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(10,37,64,0.4)] hover:shadow-[0_8px_25px_rgba(0,212,255,0.4)] hover:-translate-y-0.5">
                    <span className="relative z-10 flex items-center gap-2">
                       Free Estimate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-accent-cyan to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                </button>
            </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative h-[80vh] min-h-[600px] text-white overflow-hidden flex items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
             <source src="/hero-background1.mp4" type="video/mp4" />
             Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/90 to-black/40 z-10"></div>
          
          <div className="container mx-auto px-6 relative z-20">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.div variants={fadeInUp} className="inline-block bg-accent-cyan/20 border border-accent-cyan text-accent-cyan font-semibold px-4 py-1.5 rounded-full mb-8">
                Coachella Valley&#39;s Most Trusted Pool Company
              </motion.div>
              
              <div className="min-h-[180px] md:min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTextIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                      {heroTexts[currentTextIndex].title}
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-200">
                      {heroTexts[currentTextIndex].subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-accent-cyan text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-blue transition-all shadow-[0_0_20px_rgba(0,212,255,0.4)] text-center flex items-center justify-center group">
                  Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#portfolio" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-all text-center">
                  View Our Work
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* TRUST SIGNALS (Features) */}
        <section className="py-16 bg-white relative -mt-10 z-30">
            <div className="container mx-auto px-6">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-2xl rounded-2xl bg-white p-8 border border-gray-100"
                >
                    {features.map((feature, idx) => (
                        <motion.div key={feature.title} variants={fadeInUp} className="p-4 group">
                            <div className="mx-auto w-max mb-4 group-hover:scale-110 transition-transform duration-300">
                              {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary-blue">{feature.title}</h3>
                            <p className="text-medium-gray mt-2 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 bg-light-gray">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-4xl font-heading font-bold text-primary-blue">Complete Project Solutions</h2>
              <p className="mt-4 text-lg text-medium-gray max-w-2xl mx-auto">
                We handle every aspect of your pool&#39;s lifecycle with expert technicians and premium materials.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={staggerContainer}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service, idx) => (
                <motion.div key={service.title} variants={fadeInUp} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 group border border-gray-100 pb-6">
                    <div className="relative w-full h-56 overflow-hidden">
                        <Image 
                            src={service.image} 
                            alt={service.title} 
                            fill 
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white shadow-sm">{service.title}</h3>
                    </div>
                  <div className="p-6 text-left">
                    <p className="text-medium-gray mb-6 h-12">{service.description}</p>
                    <a href="#" className="text-accent-cyan font-bold hover:text-primary-blue transition-colors flex items-center group/link">
                        Explore Service <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE US & LEAD CAPTURE INFO */}
        <section id="about" className="py-24 bg-primary-blue text-white overflow-hidden relative">
            <div className="absolute -right-20 -top-20 opacity-5 w-96 h-96 rounded-full bg-white blur-3xl"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                          Why Choose <span className="text-accent-cyan">Ocean Springs Tech?</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-gray-300 mb-8 text-lg">
                          Whether you need new tile or plumbing services for your home pool, or if you want to add a water feature to your business, our talented technical team is dedicated to delivering exceptional results.
                        </motion.p>
                        
                        <ul className="space-y-4 mb-10">
                            {whyChooseUsFeatures.map((feature, idx) => (
                                <motion.li key={feature} variants={fadeInUp} className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                    <Check className="h-6 w-6 text-accent-cyan mr-4 flex-shrink-0" />
                                    <span className="text-base text-gray-100">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.button variants={fadeInUp} className="bg-accent-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-primary-blue transition-all shadow-[0_4px_20px_rgba(0,212,255,0.3)] transform hover:scale-105">
                            Speak to an Expert Today
                        </motion.button>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      whileInView={{ opacity: 1, scale: 1 }} 
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="relative w-full h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10"
                    >
                         <Image 
                            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
                            alt="Stunning modern pool with luxurious amenities in Coachella Valley" 
                            fill 
                            sizes="(max-width: 1024px) 100vw, 50vw" 
                            className="object-cover" 
                        />
                        {/* Overlay Badge */}
                        <div className="absolute bottom-8 right-8 bg-white text-primary-blue p-4 rounded-xl shadow-2xl flex items-center gap-4">
                           <div className="bg-accent-cyan/20 p-3 rounded-full">
                             <Star className="text-accent-cyan fill-accent-cyan h-8 w-8" />
                           </div>
                           <div>
                             <p className="font-bold text-xl">5.0 / 5.0</p>
                             <p className="text-sm font-medium text-medium-gray">Google Reviews</p>
                           </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="bg-dark-gray text-white pt-24 pb-12">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
                <div>
                    <h3 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
                      <Logo /> OSTI
                    </h3>
                    <p className="text-gray-400 max-w-xs mt-4">Building the backyard oasis of your dreams in Coachella Valley, where luxury meets tranquility.</p>
                    <div className="mt-8 flex space-x-5">
                        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-accent-cyan transition-colors bg-white/5 p-2 rounded-full"><Facebook className="h-5 w-5" /></a>
                        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-accent-cyan transition-colors bg-white/5 p-2 rounded-full"><Twitter className="h-5 w-5" /></a>
                        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-accent-cyan transition-colors bg-white/5 p-2 rounded-full"><Instagram className="h-5 w-5" /></a>
                        <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-accent-cyan transition-colors bg-white/5 p-2 rounded-full"><Linkedin className="h-5 w-5" /></a>
                    </div>
                </div>
                
                <div>
                    <h3 className="font-heading text-lg font-bold mb-6 tracking-wide text-gray-200">Quick Links</h3>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-gray-400 hover:text-accent-cyan hover:pl-2 transition-all flex items-center"><span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-2"></span>Home</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-accent-cyan hover:pl-2 transition-all flex items-center"><span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-2"></span>About Us</a></li>
                        <li><a href="#services" className="text-gray-400 hover:text-accent-cyan hover:pl-2 transition-all flex items-center"><span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-2"></span>Services</a></li>
                        <li><a href="#portfolio" className="text-gray-400 hover:text-accent-cyan hover:pl-2 transition-all flex items-center"><span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-2"></span>Portfolio</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-accent-cyan hover:pl-2 transition-all flex items-center"><span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-2"></span>Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="font-heading text-lg font-bold mb-6 tracking-wide text-gray-200">Contact Us</h3>
                    <ul className="space-y-5">
                        <li className="flex items-start">
                            <MapPin className="h-5 w-5 mr-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                            <span className="text-gray-400">Coachella Valley,<br />California, USA</span>
                        </li>
                        <li className="flex items-center border-t border-white/5 pt-4">
                            <Phone className="h-5 w-5 mr-4 text-accent-cyan flex-shrink-0" />
                            <a href="tel:2285552500" className="text-gray-400 hover:text-accent-cyan transition-colors font-medium">(228) 555-2500</a>
                        </li>
                        <li className="flex items-center border-t border-white/5 pt-4">
                            <Mail className="h-5 w-5 mr-4 text-accent-cyan flex-shrink-0" />
                            <a href="mailto:info@oceanspringstech.com" className="text-gray-400 hover:text-accent-cyan transition-colors">info@oceanspringstech.com</a>
                        </li>
                    </ul>
                </div>
                
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h3 className="font-heading text-lg font-bold mb-4 text-white">Need a Complete Project?</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">Ready to start your project? We offer free, no-obligation estimates and financing options.</p>
                    <button className="bg-accent-cyan text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-blue transition-all shadow-md w-full">
                        Request Estimate
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">* Fast 24hr guaranteed response</p>
                </div>
            </div>
            
            <div className="mt-20 pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Ocean Springs Tech, Inc. All Rights Reserved.</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <a href="#" className="hover:text-accent-cyan transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-accent-cyan transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
