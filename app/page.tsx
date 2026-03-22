"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Users, Truck, Gem, MapPin, Star, CreditCard, Menu, X, CheckCircle, CheckCircle2 } from 'lucide-react';
import Logo from '@/components/Logo';

// ... (skipping unchanged code to save space) wait, the tool expects EXACT replacement string.
// Let me use a multi_replace instead or just copy the exact block.
// Wait, I can just replace the specific lines around the variants declaration.

const services = [
  {
    image: "/maintenance-services.avif", 
    title: 'Maintenance Services',
    description: 'Keep your pool crystal clear and ready for enjoyment year-round.',
  },
  {
    image: "/New-construction.avif", 
    title: 'New Construction',
    description: 'Custom-designed pools built to your exact specifications and lifestyle.',
  },
  {
    image: "/Repairs-and-Warranty.avif", 
    title: 'Repairs & Warranty',
    description: 'Expert repair technicians ensuring your equipment runs flawlessly.',
  },
  {
    image: "/Remodels.avif", 
    title: 'Pool Remodels',
    description: 'Transform your existing pool into a modern oasis of relaxation.',
  },
  {
    image: "/Lighting.avif", 
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
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

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

const whyChooseUsImages = [
  "/Why-choose-us.avif",
  "/Why-choose-us1.avif",
  "/Why-choose-us2.avif",
  "/Why-choose-us3.avif"
];

export default function HomePage() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentWhyUsIndex, setCurrentWhyUsIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFinancingModalOpen, setIsFinancingModalOpen] = useState(false);
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4500);
    const whyUsInterval = setInterval(() => {
      setCurrentWhyUsIndex((prev) => (prev + 1) % whyChooseUsImages.length);
    }, 4000);
    
    return () => {
      clearInterval(textInterval);
      clearInterval(whyUsInterval);
    };
  }, []);

  return (
    <div className="bg-white text-dark-gray font-sans overflow-x-hidden">
      {/* PREMIUM HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[100] flex flex-col w-full shadow-sm">
        {/* Top Info Bar - Sleek & Thin */}
        <div className="bg-[#0a2540] text-gray-300 text-xs py-1.5 hidden md:block border-b border-light-gray/10">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a href="tel:7603298933" className="flex items-center gap-2 hover:text-accent-cyan transition-colors cursor-pointer group">
                <Phone size={14} className="group-hover:animate-pulse" />
                <span className="font-medium tracking-wide">(760) 329-8933</span>
              </a>
              <a href="mailto:info@oceanspringstech.com" className="flex items-center gap-2 hover:text-accent-cyan transition-colors cursor-pointer group">
                <Mail size={14} />
                <span className="font-medium tracking-wide">info@oceanspringstech.com</span>
              </a>
              <a href="https://maps.google.com/maps?q=65145+Two+Bunch+Palms+Trail" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-cyan transition-colors cursor-pointer group">
                <MapPin size={14} className="group-hover:animate-bounce" />
                <span className="font-medium tracking-wide truncate max-w-[200px] lg:max-w-none">65145 Two Bunch Palms Trail, Coachella Valley, CA</span>
              </a>
            </div>
            <div className="flex items-center tracking-wide text-gray-400 font-medium">
              <div 
                className="relative group cursor-pointer"
                onClick={() => setIsFinancingModalOpen(true)}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan to-blue-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                <span className="relative flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0a2540] border border-accent-cyan/50 text-accent-cyan font-bold tracking-wider overflow-hidden">
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></span>
                  <CreditCard size={14} className="animate-pulse" />
                  Financing Available!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation - Glassmorphism */}
        <div className="bg-white/85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-white/20 py-3 transition-all duration-300">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Area */}
                <div className="flex items-center gap-5 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute -inset-3 bg-gradient-to-tr from-primary-blue via-accent-cyan to-white rounded-full blur-md opacity-50 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500 -z-10"></div>
                      <Image
                        src="/logo-mascota.avif"
                        alt="OSTI Mascot"
                        width={70}
                        height={70}
                        priority
                        className="rounded-full shadow-[0_0_25px_rgba(0,212,255,0.4)] border-[3px] border-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10"
                      />
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
                <button 
                    onClick={() => setIsEstimateModalOpen(true)}
                    className="hidden lg:flex relative group overflow-hidden bg-gradient-to-r from-primary-blue to-[#0a2540] text-white font-bold py-2.5 px-7 rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(10,37,64,0.4)] hover:shadow-[0_8px_25px_rgba(0,212,255,0.4)] hover:-translate-y-0.5"
                >
                    <span className="relative z-10 flex items-center gap-2">
                       Free Estimate <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-accent-cyan to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                </button>

                {/* Mobile Menu Toggle Button */}
                <button 
                  className="lg:hidden p-2 text-[#0a2540] hover:text-accent-cyan transition-colors z-[110]"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu Integration */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-2xl z-[90] flex flex-col pt-32 px-8 pb-8 overflow-y-auto border-l border-gray-100"
          >
             <nav className="flex flex-col gap-6 font-semibold text-lg text-[#0a2540]">
                <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="border-b border-gray-100 pb-3 text-accent-cyan w-full">Home</a>
                {['Services', 'About Us', 'Portfolio', 'Reviews', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="border-b border-gray-100 pb-3 hover:text-accent-cyan transition-colors w-full"
                  >
                    {item}
                  </a>
                ))}
                <button 
                  onClick={() => { setIsMobileMenuOpen(false); setIsFinancingModalOpen(true); }}
                  className="flex items-center gap-2 border-b border-gray-100 pb-3 hover:text-accent-cyan transition-colors w-full text-left"
                >
                  <CreditCard size={18} className="text-accent-cyan" /> Financing Options
                </button>
             </nav>
             <div className="mt-auto pt-10 flex flex-col gap-5">
                <a href="https://maps.google.com/maps?q=65145+Two+Bunch+Palms+Trail" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-500 hover:text-accent-cyan transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <MapPin size={20} /> Coachella Valley, CA
                </a>
                <a href="tel:7603298933" className="flex items-center gap-3 text-gray-500 hover:text-accent-cyan transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <Phone size={20} /> (760) 329-8933
                </a>
                <a href="mailto:info@oceanspringstech.com" className="flex items-center gap-3 text-gray-500 hover:text-accent-cyan transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <Mail size={20} /> Email Us
                </a>
                 <button 
                  onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsEstimateModalOpen(true);
                  }}
                  className="w-full mt-4 bg-gradient-to-r from-primary-blue to-accent-cyan text-white font-bold py-3.5 rounded-full shadow-[0_4px_15px_rgba(0,212,255,0.4)] hover:shadow-lg transition-all active:scale-95 text-center flex justify-center items-center gap-2"
                >
                   Get Free Estimate <ArrowRight size={18} />
                 </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINANCING MODAL */}
      <AnimatePresence>
        {isFinancingModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFinancingModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col lg:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setIsFinancingModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-accent-cyan rounded-full text-gray-500 hover:text-white transition-colors z-20"
              >
                <X size={24} />
              </button>
              
              {/* PREMIUM FINANCING MODAL DESIGN */}
              
              {/* Left Column: Dreams & Lenders */}
              <div className="w-full lg:w-1/2 relative bg-[#0a2540] overflow-hidden flex flex-col items-center justify-center p-6 md:p-10 text-white">
                 <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cyan/40 blur-[120px] rounded-full -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/30 blur-[120px] rounded-full -ml-48 -mb-48"></div>
                 </div>
                 
                 <div className="relative z-10 w-full max-w-md">
                    <div className="flex items-center gap-3 mb-6">
                       <CreditCard className="text-accent-cyan h-8 w-8" />
                       <span className="text-accent-cyan font-bold text-sm tracking-widest uppercase">Luxury Financing</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">Dream Now,<br/><span className="text-accent-cyan">Pay Later.</span></h2>
                    
                    <ul className="space-y-6 mb-12">
                       {[
                         { icon: <CheckCircle className="text-accent-cyan" />, text: 'Loans up to $200,000 for your dream project' },
                         { icon: <ShieldCheck className="text-accent-cyan" />, text: 'Fixed rates as low as 4.99% APR' },
                         { icon: <Users className="text-accent-cyan" />, text: 'No home equity or collateral required' },
                         { icon: <Star className="text-accent-cyan" />, text: 'Instant pre-qualification in minutes' }
                       ].map((item, i) => (
                         <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + (i*0.1) }} className="flex items-center gap-4 text-lg">
                            <span className="flex-shrink-0">{item.icon}</span>
                            <span className="text-gray-200">{item.text}</span>
                         </motion.li>
                       ))}
                    </ul>

                    <div className="pt-8 border-t border-white/10">
                       <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6 px-1">Our Trusted Partners:</p>
                       <div className="flex flex-wrap gap-6 items-center opacity-60">
                          <span className="font-serif text-lg">LYON</span>
                          <span className="font-sans text-xl font-black italic">HFS</span>
                          <span className="font-serif text-lg tracking-widest">VIKING</span>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Right Column: Pre-Qualify Form */}
              <div className="w-full lg:w-1/2 bg-white flex flex-col justify-between overflow-y-auto">
                 <div className="p-6 md:p-10">
                    <div className="mb-8">
                       <h3 className="text-3xl font-bold text-[#111827] mb-3">Pre-Qualify Today</h3>
                       <p className="text-gray-500">Checking your options will <span className="text-[#111827] font-bold">NOT</span> affect your credit score.</p>
                    </div>

                    <form className="space-y-4">
                       <div className="space-y-1">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">What is your project budget?</label>
                          <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent-cyan outline-none transition-all appearance-none cursor-pointer font-medium text-gray-700">
                             <option>$10k - $25k</option>
                             <option>$25k - $50k</option>
                             <option>$50k - $100k</option>
                             <option>$100k+</option>
                          </select>
                       </div>
                       <div className="space-y-1">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                          <input className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent-cyan outline-none transition-all" placeholder="Enter your full name" />
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1">
                             <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone</label>
                             <input className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent-cyan outline-none transition-all" placeholder="(760) 000-0000" />
                          </div>
                          <div className="space-y-1">
                             <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email</label>
                             <input className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent-cyan outline-none transition-all" placeholder="name@email.com" />
                          </div>
                       </div>
                       
                       <button className="w-full bg-accent-cyan text-white font-black text-lg py-5 rounded-xl shadow-[0_10px_25px_rgba(0,212,255,0.4)] hover:shadow-[0_15px_35px_rgba(0,212,255,0.5)] hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2 mt-8">
                           Check My Financing Options <ArrowRight size={20} />
                       </button>
                    </form>
                 </div>

                 {/* Secure Footer Strip */}
                 <div className="bg-[#f8fafc] p-6 border-t border-gray-100 flex items-center justify-center gap-8 text-gray-400">
                    <div className="flex items-center gap-2">
                       <ShieldCheck size={16} className="text-green-500" />
                       <span className="text-[10px] font-bold uppercase tracking-wider">Secure 256-bit SSL</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <ShieldCheck size={16} className="text-blue-500" />
                       <span className="text-[10px] font-bold uppercase tracking-wider">No Credit Impact</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ESTIMATE MODAL */}
      <AnimatePresence>
        {isEstimateModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsEstimateModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col lg:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setIsEstimateModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-accent-cyan rounded-full text-gray-500 hover:text-white transition-colors z-20"
              >
                <X size={24} />
              </button>
              
              {/* HIGH CONVERSION MODAL DESIGN */}
              
              {/* Left Column: Sales & Service Selection */}
              <div className="w-full lg:w-1/2 relative bg-[#111827] overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 text-white">
                 {/* Background Water/Glow Effect */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/20 blur-[100px] rounded-full -mr-20 -mt-20"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -ml-20 -mb-20"></div>
                 
                 <div className="relative z-10 w-full max-w-md">
                    <span className="text-accent-cyan font-bold text-sm tracking-widest uppercase mb-4 block">Select Your Vision</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">What are you looking to <span className="text-accent-cyan">build?</span></h2>
                    
                    {/* Visual Service Grid */}
                    <div className="grid grid-cols-2 gap-4">
                       {[
                         { id: 'new', title: 'New Pool', icon: '🏊', desc: 'Design & Build' },
                         { id: 'remodel', title: 'Remodel', icon: '🛠️', desc: 'Renovations' },
                         { id: 'clean', title: 'Maintenance', icon: '🧹', desc: 'Service Clean' },
                         { id: 'repair', title: 'Experts Repair', icon: '🔧', desc: 'Equipment Fix' }
                       ].map((service) => (
                         <button
                           key={service.id}
                           type="button"
                           onClick={() => setSelectedService(service.id)}
                           className={`relative p-5 rounded-2xl border-2 transition-all duration-300 text-left group overflow-hidden ${
                             selectedService === service.id 
                             ? 'border-accent-cyan bg-accent-cyan/10 shadow-[0_0_20px_rgba(0,212,255,0.2)]' 
                             : 'border-white/10 bg-white/5 hover:border-white/30'
                           }`}
                         >
                            <span className="text-3xl mb-3 block">{service.icon}</span>
                            <p className={`font-bold transition-colors ${selectedService === service.id ? 'text-accent-cyan' : 'text-white'}`}>
                              {service.title}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{service.desc}</p>
                            {selectedService === service.id && (
                              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute bottom-3 right-3 text-accent-cyan">
                                <CheckCircle2 size={18} />
                              </motion.div>
                            )}
                         </button>
                       ))}
                    </div>

                    <div className="mt-10 pt-10 border-t border-white/10">
                       <div className="flex items-center gap-4 mb-3">
                          <Logo variant="light" /> <span className="text-2xl font-black">OSTI</span>
                       </div>
                       <p className="text-gray-400 text-sm italic">&quot;Nearly 27 years of excellence in the Coachella Valley.&quot;</p>
                    </div>
                 </div>
              </div>

              {/* Right Column: Contact & Lead Capture */}
              <div className="w-full lg:w-1/2 bg-white flex flex-col justify-between overflow-y-auto">
                 <div className="p-8 md:p-14">
                    <div className="mb-8">
                       <h3 className="text-2xl font-bold text-[#111827] mb-2">Get Your Luxury Quote</h3>
                       <p className="text-gray-500">Fill in your details and we will reach out within 24 hours.</p>
                    </div>

                    <form className="space-y-4">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1">
                             <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                             <input className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent-cyan outline-none transition-all" placeholder="John Doe" />
                          </div>
                          <div className="space-y-1">
                             <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Phone Number</label>
                             <input className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent-cyan outline-none transition-all" placeholder="(760) 000-0000" />
                          </div>
                       </div>
                       <div className="space-y-1">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                          <input className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent-cyan outline-none transition-all" placeholder="john@example.com" />
                       </div>
                       <div className="space-y-1">
                          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Project Details (Optional)</label>
                          <textarea rows={3} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-accent-cyan outline-none transition-all resize-none" placeholder="Tell us more about your pool project..."></textarea>
                       </div>
                       
                       <button className="w-full bg-[#111827] text-white font-bold py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2 mt-6">
                           Request My Free Estimate <ArrowRight size={18} className="text-accent-cyan" />
                       </button>
                    </form>
                 </div>

                 {/* Trust Badges Strip */}
                 <div className="bg-gray-50 p-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center">
                       <ShieldCheck className="h-5 w-5 text-accent-cyan mb-1" />
                       <span className="text-[10px] font-bold text-gray-600 uppercase">Licensed/Insured</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-gray-200">
                       <Star className="h-5 w-5 text-yellow-500 mb-1" />
                       <span className="text-[10px] font-bold text-gray-600 uppercase">5-Star Reviews</span>
                    </div>
                    <div className="flex flex-col items-center">
                       <Users className="h-5 w-5 text-blue-600 mb-1" />
                       <span className="text-[10px] font-bold text-gray-600 uppercase">Expert Team</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="pt-[110px] md:pt-[130px]">
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
                <button 
                  onClick={() => setIsEstimateModalOpen(true)}
                  className="bg-accent-cyan text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-blue transition-all shadow-[0_0_20px_rgba(0,212,255,0.4)] text-center flex items-center justify-center group">
                  Get a Free Estimate <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
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


        <section id="services" className="py-24 bg-white relative">
          <div className="container mx-auto px-4 max-w-[1600px]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-16">
              <p className="text-accent-cyan font-bold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                 <span className="w-8 h-[2px] bg-accent-cyan"></span> How it works <span className="w-8 h-[2px] bg-accent-cyan"></span>
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a2540]">Our Services</h2>
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We handle every aspect of your pool&apos;s lifecycle with expert technicians and premium materials.</p>
            </motion.div>

            {/* 5-Column Grid for Desktop, Scrollable/Grid on Mobile */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={staggerContainer} 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            >
              {services.map((service, idx) => (
                <motion.div key={service.title} variants={fadeInUp} className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-[#0a2540] aspect-[3/4] max-h-[450px] w-full cursor-pointer isolate">
                  {/* Background Image */}
                  <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      sizes="(max-width: 1024px) 100vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-100 group-hover:opacity-40" 
                  />
                  {/* Subtle Gradient for Text Readability - Lower Opacity Default */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-[#0a2540]/20 to-transparent group-hover:opacity-100 opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 lg:p-4 xl:p-6 flex flex-col justify-end">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                         <h3 className="text-xl xl:text-2xl font-bold text-white mb-3 tracking-wide leading-tight">{service.title}</h3>
                         <div className="h-[2px] w-12 bg-accent-cyan mb-4 group-hover:w-full transition-all duration-500"></div>
                         <p className="text-gray-300 text-sm xl:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                           {service.description}
                         </p>
                      </div>
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
                        <motion.button 
                          variants={fadeInUp} 
                          onClick={() => setIsEstimateModalOpen(true)}
                          className="bg-accent-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-primary-blue transition-all shadow-[0_4px_20px_rgba(0,212,255,0.3)] transform hover:scale-105"
                        >
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
                         <AnimatePresence>
                           <motion.div
                             key={currentWhyUsIndex}
                             initial={{ opacity: 0, scale: 1.05 }}
                             animate={{ opacity: 1, scale: 1 }}
                             exit={{ opacity: 0 }}
                             transition={{ duration: 1.2, ease: "easeInOut" }}
                             className="absolute inset-0"
                           >
                              <Image 
                                 src={whyChooseUsImages[currentWhyUsIndex]} 
                                 alt="Why Choose Ocean Springs Tech in Coachella Valley" 
                                 fill 
                                 sizes="(max-width: 1024px) 100vw, 50vw" 
                                 className="object-cover" 
                                 priority
                             />
                           </motion.div>
                         </AnimatePresence>
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

      {/* INLINE FINANCING SECTION */}
      <section className="py-20 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.03),transparent_50%)] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-12">
              <p className="text-accent-cyan font-semibold tracking-widest uppercase text-sm mb-4 flex items-center justify-center gap-2">
                 <span className="w-12 h-[1px] bg-accent-cyan"></span> Start your project <span className="w-12 h-[1px] bg-accent-cyan"></span>
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a2540] mb-8 tracking-tight">Financing Now!</h2>
              <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed text-lg">
                Don&apos;t let your project stop! With the financing options offered, you can make that dream come true. Whether you want a small plunge pool or a large pool, these financing solutions can help you build the pool of your dreams without breaking the bank.
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center max-w-6xl mx-auto">
              {/* Partner Cards - Typographic Placeholders using Tailwind */}
              {[
                { name: 'LYON FINANCIAL', custom: 'font-serif text-[#0a2540] items-center flex gap-2' },
                { name: 'HFS', postfix: 'Home Improvement Loans', custom: 'font-sans text-orange-600 font-black tracking-tighter text-3xl' },
                { name: 'VIKING', postfix: 'CAPITAL', custom: 'font-serif text-purple-900 tracking-widest uppercase flex flex-col' },
                { name: 'LIGHTSTREAM', postfix: 'A Division of SunTrust Bank', custom: 'font-sans font-extrabold italic text-orange-400 flex flex-col' }
              ].map((partner, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 h-36 flex flex-col items-center justify-center border border-gray-200 hover:border-accent-cyan hover:shadow-xl transition-all duration-300 group cursor-pointer grayscale hover:grayscale-0 relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <h3 className={`text-center text-xl relative z-10 ${partner.custom} group-hover:scale-110 transition-transform`}>
                     {partner.name}
                     {partner.postfix && <span className="text-[9px] text-gray-400 font-normal tracking-normal mt-1 block uppercase">{partner.postfix}</span>}
                   </h3>
                </div>
              ))}
           </div>
           
           <div className="mt-14 text-center">
             <button 
                onClick={() => setIsFinancingModalOpen(true)}
                className="bg-gradient-to-r from-primary-blue to-[#0a2540] text-white font-bold py-4 px-12 rounded-full shadow-[0_4px_15px_rgba(10,37,64,0.4)] hover:shadow-[0_8px_30px_rgba(0,212,255,0.5)] hover:-translate-y-1 transition-all text-lg group"
              >
                Apply for Financing <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
             </button>
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-dark-gray text-white pt-24 pb-12">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 text-sm">
                <div>
                    <h3 className="font-heading text-lg font-bold mb-6 tracking-wide text-gray-200 uppercase flex flex-col items-start gap-1">
                      About Us
                      <span className="w-8 h-[2px] bg-accent-cyan"></span>
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                       <Logo variant="light" /> <span className="text-xl font-bold">OSTI</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed pr-2">
                       OSTI has been the gold standard in the Coachella Valley for close to 27 years. Founded on the principles of tenacity, integrity, and unparalleled customer service, OSTI continues to be the first choice of locals throughout the Valley.
                    </p>
                    <div className="mt-8 flex space-x-3">
                        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-accent-cyan transition-colors bg-white/5 p-2 rounded-full"><Facebook className="h-4 w-4" /></a>
                        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-accent-cyan transition-colors bg-white/5 p-2 rounded-full"><Twitter className="h-4 w-4" /></a>
                        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-accent-cyan transition-colors bg-white/5 p-2 rounded-full"><Instagram className="h-4 w-4" /></a>
                        <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-accent-cyan transition-colors bg-white/5 p-2 rounded-full"><Linkedin className="h-4 w-4" /></a>
                    </div>
                </div>
                
                <div>
                    <h3 className="font-heading text-lg font-bold mb-6 tracking-wide text-gray-200 uppercase flex flex-col items-start gap-1">
                      Quick Links
                      <span className="w-8 h-[2px] bg-accent-cyan"></span>
                    </h3>
                    <ul className="space-y-4">
                        <li><a href="#" className="text-gray-400 hover:text-accent-cyan hover:pl-2 transition-all flex items-center"><span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-2"></span>Home</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-accent-cyan hover:pl-2 transition-all flex items-center"><span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-2"></span>About Us</a></li>
                        <li><a href="#services" className="text-gray-400 hover:text-accent-cyan hover:pl-2 transition-all flex items-center"><span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-2"></span>Services</a></li>
                        <li><a href="#portfolio" className="text-gray-400 hover:text-accent-cyan hover:pl-2 transition-all flex items-center"><span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-2"></span>Portfolio</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-accent-cyan hover:pl-2 transition-all flex items-center"><span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-2"></span>Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-heading text-lg font-bold mb-6 tracking-wide text-gray-200 uppercase flex flex-col items-start gap-1">
                      Information
                      <span className="w-8 h-[2px] bg-accent-cyan"></span>
                    </h3>
                    <div className="space-y-5 text-gray-400">
                        <p className="font-medium">Lic. #920435</p>
                        <div>
                            <p className="text-white font-bold mb-1">Service hours:</p>
                            <p className="text-xs">Monday to Friday, 8:00 am - 4:30 pm</p>
                        </div>
                        <div>
                            <p className="text-white font-bold mb-1">Payments:</p>
                            <p className="text-[10px] mb-3">We Accept, Checks and Credit Cards</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                               <div className="bg-white px-2 py-1 rounded text-[#1a1f36] font-black text-[9px] italic border border-gray-200">VISA</div>
                               <div className="bg-[#eb001b] px-2 py-1 rounded text-white font-bold text-[9px]">mastercard</div>
                               <div className="bg-white px-2 py-1 rounded text-[#ff6000] font-black text-[9px] border border-gray-200 shadow-sm">DISCOVER</div>
                               <div className="bg-[#007cbc] px-2 py-1 rounded text-white font-bold text-[9px]">AMEX</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="font-heading text-lg font-bold mb-6 tracking-wide text-gray-200 uppercase flex flex-col items-start gap-1">
                      Contact Us
                      <span className="w-8 h-[2px] bg-accent-cyan"></span>
                    </h3>
                    <ul className="space-y-5">
                        <li className="flex items-start">
                            <MapPin className="h-5 w-5 mr-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                            <a href="https://maps.google.com/maps?q=65145+Two+Bunch+Palms+Trail" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors">
                                65145 Two Bunch Palms Trail,<br />Coachella Valley, CA
                            </a>
                        </li>
                        <li className="flex items-center border-t border-white/5 pt-4">
                            <Phone className="h-5 w-5 mr-4 text-accent-cyan flex-shrink-0" />
                            <a href="tel:7603298933" className="text-gray-400 hover:text-accent-cyan transition-colors font-medium">(760) 329-8933</a>
                        </li>
                        <li className="flex items-center border-t border-white/5 pt-4">
                            <Mail className="h-5 w-5 mr-4 text-accent-cyan flex-shrink-0" />
                            <a href="mailto:info@oceanspringstech.com" className="text-gray-400 hover:text-accent-cyan transition-colors">info@oceanspringstech.com</a>
                        </li>
                    </ul>
                </div>
                
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-inner">
                    <h3 className="font-heading text-lg font-bold mb-4 text-white">Need a Complete Project?</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">Ready to start your project? We offer free, no-obligation estimates and financing options.</p>
                    <button 
                        onClick={() => setIsEstimateModalOpen(true)}
                        className="bg-accent-cyan text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-blue transition-all shadow-md w-full"
                    >
                        Request Estimate
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">* Fast 24hr guaranteed response</p>
                </div>
            </div>
            
            <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-gray-500 text-sm">
                   &copy; {new Date().getFullYear()} Ocean Springs Tech, Inc. All Rights Reserved.
                </div>
                
                {/* Secondary Links */}
                <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
                    <div className="flex justify-center md:justify-end gap-4 text-xs text-gray-600">
                      <a href="#" className="hover:text-accent-cyan transition-colors">Privacy Policy</a>
                      <a href="#" className="hover:text-accent-cyan transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
