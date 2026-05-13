/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  ArrowRight, 
  ArrowLeft,
  MousePointer2, 
  Shield,
  ShieldCheck, 
  Droplets, 
  Home, 
  Warehouse, 
  Building2,
  TrainFront, 
  Layers,
  Clock,
  Briefcase,
  Users,
  CheckCircle,
  MessageCircle,
  Award,
  Ship,
  BarChart3,
  Handshake,
  Container,
  Headphones,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Globe2,
  Utensils,
  Settings,
  Send,
  MapPin,
  Mail,
  User,
  Pencil,
  ChevronDown,
  Play,
  Anchor
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="/img/watertight_logo.png" 
            alt="Watertight Consultants Logo" 
            className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-bold text-sm ${isScrolled ? 'text-slate-700' : 'text-white'}`}>
          <a href="#home" className="text-brand relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand uppercase tracking-widest">Home</a>
          <a href="#about" className="hover:text-brand transition-colors uppercase tracking-widest">About Us</a>
          <a href="#services" className="hover:text-brand transition-colors uppercase tracking-widest">Services</a>
          <a href="#projects" className="hover:text-brand transition-colors uppercase tracking-widest">Projects</a>
          <a href="#contact" className="hover:text-brand transition-colors uppercase tracking-widest">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled || isMenuOpen ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
        >
          {isMenuOpen ? <ArrowRight className="w-6 h-6 rotate-90" /> : <div className="space-y-1.5"><div className="w-6 h-0.5 bg-current"></div><div className="w-6 h-0.5 bg-current"></div><div className="w-6 h-0.5 bg-current"></div></div>}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 font-bold text-sm text-slate-700">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-brand transition-colors uppercase tracking-widest">Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand transition-colors uppercase tracking-widest">About Us</a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-brand transition-colors uppercase tracking-widest">Services</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-brand transition-colors uppercase tracking-widest">Projects</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-brand transition-colors uppercase tracking-widest">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#040911]">
      {/* Right Side Image Section */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-2/3 z-0">
        <img 
          src="/Final.png" 
          alt="Maritime Industrial Platform" 
          className="w-full h-full object-cover object-center lg:object-right"
        />
        {/* Deep gradient to blend the image into the dark left section */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040911] via-[#040911]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-32 md:mt-20 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl flex flex-col items-center md:items-start"
        >
          <h1 className="text-white text-3xl md:text-[3.25rem] font-black leading-[1.1] mb-6 tracking-tight">
            Built for <span className="text-brand">Offshore.</span><br />
            Trusted <span className="text-brand">Worldwide.</span>
          </h1>
          <div className="w-12 h-[3px] bg-brand mb-6 rounded-full" />
          <p className="text-white/70 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
            Powering Marine Operations{' '}<br className="hidden md:block" />
            with <span className="text-brand">Precision & Expertise.</span>
          </p>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3">
        <div className="w-6 h-10 border-[1.5px] border-white/20 rounded-full flex justify-center p-1.5">
          <motion.div 
            animate={{ 
              y: [0, 14, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1 h-2 bg-brand rounded-full shadow-[0_0_10px_rgba(249,115,22,0.4)]"
          />
        </div>
        <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] select-none">
          Scroll Down
        </span>
      </div>
    </section>
  );
};

const About = () => {
  const [currentMedia, setCurrentMedia] = useState(0);
  
  const mediaItems = [
    { type: 'image', src: '/img/Final.png', alt: 'Offshore Platform' },
    { type: 'video', src: '/Video/video_1.mp4' },
    { type: 'video', src: '/Video/2.mp4' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % mediaItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] border-[1px] border-slate-100 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] border-[1px] border-slate-50 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Text & Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-orange-500 font-bold tracking-[0.2em] text-[11px] uppercase mb-4 block">
                About Us
              </span>
              <h2 className="text-slate-900 text-4xl md:text-[2.75rem] font-black mb-6 leading-[1.1] tracking-tight">
                We Deliver Reliable &<br />High-Impact Offshore Solutions
              </h2>
              <div className="w-14 h-[3px] bg-orange-500 mb-8 rounded-full" />
              <div className="space-y-6 text-slate-500 text-[1.05rem] leading-relaxed font-medium max-w-xl">
                <p>
                  Watertight Consultants is a specialized marine and offshore consulting firm delivering strategic solutions across chartering, asset transactions, and project logistics in global markets. 
                </p>
                <p>
                  We combine industry expertise, market intelligence, and execution precision to support complex offshore operations with confidence, efficiency, and long-term value.
                </p>
              </div>
            </div>

            {/* Video Section */}
            <div className="relative group max-w-lg">
              <div className="relative rounded-[2rem] overflow-hidden aspect-video shadow-2xl bg-slate-900 border-4 border-white">
                <iframe
                  src="https://www.youtube.com/embed/HIyDu1kdz2I"
                  title="Watertight Marine & Energy Consultants"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Subtitle */}
              <a 
                href="https://youtu.be/HIyDu1kdz2I" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-3 text-slate-900 font-bold text-sm cursor-pointer hover:text-orange-500 transition-colors"
              >
                <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 text-orange-500 fill-orange-500 ml-0.5" />
                </div>
                Click on video and know us in 60 seconds!
              </a>
            </div>
          </motion.div>

          {/* Right Column: Media Slider with Feature Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] aspect-[10/11] bg-[#040911]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMedia}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  {mediaItems[currentMedia].type === 'image' ? (
                    <img
                      src={mediaItems[currentMedia].src}
                      alt={mediaItems[currentMedia].alt}
                      className="w-full h-full object-cover opacity-80"
                    />
                  ) : (
                    <video
                      src={mediaItems[currentMedia].src}
                      className="w-full h-full object-cover opacity-80"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                </motion.div>
              </AnimatePresence>
              
              {/* Bottom Gradient for Text Legibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#040911] via-[#040911]/60 to-transparent" />

              {/* Features Overlay */}
              <div className="absolute bottom-12 left-0 right-0 px-8">
                <div className="grid grid-cols-3 gap-4">
                  {/* Item 1 */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                      <Ship className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-white text-[12px] md:text-[14px] font-bold leading-tight mb-2">Marine & Offshore Experts</div>
                    <div className="w-8 h-[2px] bg-orange-500 rounded-full mx-auto" />
                  </div>
                  
                  {/* Item 2 */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                      <Globe2 className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-white text-[12px] md:text-[14px] font-bold leading-tight mb-2">Global Reach Local Insight</div>
                    <div className="w-8 h-[2px] bg-orange-500 rounded-full mx-auto" />
                  </div>

                  {/* Item 3 */}
                  <div className="flex flex-col items-center text-center group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                      <Handshake className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="text-white text-[12px] md:text-[14px] font-bold leading-tight mb-2">Trusted by Clients Worldwide</div>
                    <div className="w-8 h-[2px] bg-orange-500 rounded-full mx-auto" />
                  </div>
                </div>
              </div>

              {/* Slider Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                {mediaItems.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentMedia(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentMedia === idx ? 'bg-orange-500 w-6' : 'bg-white/40 w-1.5 hover:bg-white'}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative Element Behind Image */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-orange-500/10 rounded-[2.5rem] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Chartering desk",
    description: "Focusing on Indian Sub-Continent and Africa",
    icon: <Globe2 className="w-6 h-6 text-slate-800" />,
    points: [
      "Our team of Brokers monitor markets worldwide and feed this information to our clients to ensure that they are fully aware of market conditions",
      "We provide turnkey solutions including negotiating, pricing, drawing up contracts and monitoring the performance of a unit throughout the charter period",
      "Ensuring that all parties to the agreement remain comfortable throughout the duration of the contract",
      "We have extended our scope of competencies to the growing Offshore Wind Power sector & emerging Marine Renewable Energies (MRE)"
    ],
    image: "https://images.unsplash.com/photo-1559139225-300456543b56?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Market intelligence and Chartering reports",
    description: "",
    icon: <BarChart3 className="w-6 h-6 text-slate-800" />,
    points: [
      "Trends, Competition and Pricing",
      "Support Charterers during their project budgetary assessments with Market Surveys and Request For Quotation",
      "Provide Clients with accurate information about competition in the Market",
      "Advise Owners about applicable rules, laws and taxes in countries of Operations",
      "Assist Clients in finding most appropriate local support"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Sale and purchase of assets",
    description: "",
    icon: <Handshake className="w-6 h-6 text-slate-800" />,
    points: [
      "We handle all aspects related to sale and purchase of Marine assets, demolition tonnage and newbuildings",
      "Platform Supply Vessels (PSV)",
      "Anchor-Handling Tug Supply vessels (AHTS)",
      "Subsea Construction Vessels, ROV & Diving Support Vessels",
      "SOV / W2W Vessels",
      "Research and Seismic Vessels",
      "Standby & Emergency Response Vessels",
      "Tugs and Barges",
      "Tonnage For Recycling",
      "Fishing Vessels"
    ],
    image: "https://images.unsplash.com/photo-1566232392379-afd9298e6a46?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "End to End Solutions for movement of Heavy Lift & Project Cargo",
    description: "",
    icon: <Container className="w-6 h-6 text-slate-800" />,
    points: [
      "Whether you are moving a single unit from point A to B or moving an entire industrial plant",
      "We have the staff, knowledge, and carriers to create an end-to-end logistics solution to get the job done",
      "We are capable of handling any shipment for import or export cargo"
    ],
    image: "https://images.unsplash.com/photo-1494412574743-01958ee16519?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Project Management",
    description: "",
    icon: <ShieldCheck className="w-6 h-6 text-slate-800" />,
    points: [
      "Intelligence",
      "Strategic Business Planning",
      "Audits and Inspections",
      "Risk Management",
      "Safety Consultancy & Training",
      "Seminars & Conferences",
      "Legal and Regulatory Consultancy"
    ],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Catering Management",
    description: "",
    icon: <Utensils className="w-6 h-6 text-slate-800" />,
    points: [
      "We have been providing catering services for Offshore project within India",
      "Catering Services to Accommodation Work Barge, Rigs, Anchor Handling Tugs (250 to 425 Pax)",
      "Provision Supplies to Main Fleet and Offshore Vessels in Mumbai and other ports in India"
    ],
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Agency Management",
    description: "",
    icon: <Shield className="w-6 h-6 text-slate-800" />,
    points: [
      "We provide entire spectrum of Agency Services for our clients as Owners Protective Agents",
      "Clearances of Vessels, Cargo and others associated permissions from Authorities for Offshore Projects in India"
    ],
    image: "https://images.unsplash.com/photo-1505155485761-f097ff29fa85?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Technical Management",
    description: "",
    icon: <Settings className="w-6 h-6 text-slate-800" />,
    points: [
      "We undertake complete Technical Management of Offshore vessels",
      "Well versed with Local and International requirements for vessels operating in India or overseas"
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Crew Management",
    description: "",
    icon: <Users className="w-6 h-6 text-slate-800" />,
    points: [
      "Our sister company is a fully licensed Crew Management entity that can provide Marine and Project Crew for all kinds of assets"
    ],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
  }
];

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isPaused || isExpanded) return;
    
    const timer = setInterval(() => {
      setStartIndex(prev => {
        if (prev + 3 >= services.length) return 0;
        return prev + 1;
      });
    }, 4000); // Slightly faster for better visibility

    return () => clearInterval(timer);
  }, [isPaused, isExpanded]);

  // Auto-collapse logic when scrolling away
  useEffect(() => {
    if (!isExpanded || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsExpanded(false);
          setStartIndex(0);
        }
      },
      { threshold: 0 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isExpanded]);

  const next = () => {
    setStartIndex(prev => {
      if (prev + 3 >= services.length) return 0;
      return prev + 1;
    });
  };

  const prev = () => {
    setStartIndex(prev => {
      if (prev === 0) return Math.max(0, services.length - 3);
      return prev - 1;
    });
  };

  const toggleExpand = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsExpanded(false);
      setStartIndex(0);
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const displayedServices = isExpanded ? services : services.slice(startIndex, startIndex + 3);

  return (
    <section 
      ref={sectionRef}
      id="services"
      className="py-24 bg-[#FAFAFA]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand font-bold tracking-[0.15em] text-[10px] uppercase mb-3 block">
              Our Services
            </span>
            <h2 className="text-slate-900 text-3xl md:text-[2.5rem] font-black tracking-tight leading-tight mb-4">
              End-to-End Offshore &<br />Marine Solutions
            </h2>
            <div className="w-10 h-[2px] bg-brand mb-6" />
            <p className="text-slate-500 text-[0.95rem] leading-relaxed font-medium">
              From chartering to cargo and asset solutions, we deliver offshore<br className="hidden lg:block" /> 
              excellence with precision, market insight and global reach.
            </p>
          </div>
          
          <div className={`flex gap-3 transition-opacity duration-300 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all bg-white shadow-sm text-slate-900 hover:border-slate-900 hover:bg-slate-50"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg bg-[#040911] text-white hover:bg-slate-800"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {displayedServices.map((service) => (
            <motion.div
              key={service.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col group hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500"
            >
              <div className="p-8 flex-1">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3 leading-tight">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-slate-500 text-[0.85rem] leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>
                )}
                <ul className="space-y-4 mb-4">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[0.8rem] font-bold text-slate-700">
                      <div className="w-4 h-4 rounded-full border border-brand/30 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-2.5 h-2.5 text-brand" strokeWidth={3} />
                      </div>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={toggleExpand}
            className="bg-[#040911] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-slate-800 transition-all text-sm shadow-xl shadow-slate-900/10"
          >
            {isExpanded ? 'Show Slider' : 'Explore All Services'}
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (project.type !== 'slider' || !project.images) return;
    
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [project.type, project.images]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] group min-h-full"
    >
      <div className={`relative ${project.points.length === 0 ? 'h-full w-full' : (project.type === 'video' ? 'aspect-[3/4]' : 'aspect-[4/3] m-4 rounded-2xl')} overflow-hidden bg-slate-100`}>
        {project.type === 'video' ? (
          <video 
            src={project.video} 
            className={`w-full h-full object-cover ${project.rotation || ''} scale-[1.8]`}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : project.type === 'slider' ? (
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImage}
              src={project.images[currentImage]} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        ) : (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1566232392379-afd9298e6a46?auto=format&fit=crop&q=80&w=800';
            }}
          />
        )}
      </div>

      {/* Content Section - Only for cards with text */}
      {project.points.length > 0 && (
        <div className="px-6 pb-8 pt-2">
          <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-4">
            {project.icon}
          </div>
          <h3 className="text-slate-900 font-bold text-[0.95rem] mb-3 leading-tight min-h-[2.5rem] flex items-center">
            {project.title}
          </h3>
          <div className="w-8 h-[2px] bg-brand mb-6 opacity-60" />
          
          <ul className="space-y-4">
            {project.points.map((point: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-[0.8rem] font-medium text-slate-500">
                <CheckCircle className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                <span className="leading-tight">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Chartering Operations",
      type: "video",
      video: "/Video/P1.mp4",
      rotation: "-rotate-90",
      points: []
    },
    {
      title: "GENESIS ALPHA",
      icon: <Anchor className="w-5 h-5 text-blue-600" />,
      type: "image",
      image: "/img/Projects/Genesis Alpha.png",
      points: [
        "Year of Built: 2006",
        "Flag: St. Kitts & Nevis",
        "Class: IRS",
        "GRT: 1316 T",
        "Remarks: Chemical/ Oil Product Tanker, DWT: 1722 T"
      ]
    },
    {
      title: "AJR WB1 – 4730 BHP",
      icon: <Anchor className="w-5 h-5 text-blue-600" />,
      type: "slider",
      images: ["/img/Projects/AJRWB-1.jpg", "/img/Projects/AJRWB-1(1).jpg"],
      points: [
        "Year of Built: 2007",
        "Flag: INDIAN",
        "Class: IRS",
        "GRT: 1320 T",
        "Remarks: First vessel to be registered under Indian Flag as IP Code Work Boat, 4 point mooring with crane, total accomodation for 59 passengers"
      ]
    },
    {
      title: "DRA 1 – 3200 BHP",
      icon: <Anchor className="w-5 h-5 text-blue-600" />,
      type: "slider",
      images: ["/img/Projects/DRA-1.jpg", "/img/Projects/dra-1(1).jpg"],
      points: [
        "Year of Built: 2006",
        "Flag: INDIAN",
        "Class: IRS",
        "GRT: 467 T",
        "Remarks: 40 T Bollard Pull, Anchor Handling and Towing Tug."
      ]
    },
    {
      title: "FAIRMACS NICOBAR - 3200 BHP",
      icon: <Anchor className="w-5 h-5 text-blue-600" />,
      type: "slider",
      images: ["/img/Projects/FairmacsNicobar.jpg", "/img/Projects/FairmacsNicobar(1).jpg"],
      points: [
        "Year of Built: 2006",
        "Flag / Port of Registry: INDIAN / MUMBAI",
        "Class: NKK / IRS",
        "GRT: 467 T",
        "Remarks: 40 T Bollard Pull, Anchor Handling and Towing Tug."
      ]
    },
    {
      title: "AQUA TOW – 3600 BHP",
      icon: <Anchor className="w-5 h-5 text-blue-600" />,
      type: "image",
      image: "/img/Projects/Aqua-tow.jpg",
      points: [
        "Year of Built: 2010",
        "Flag / Port of Registry: INDIAN / MUMBAI",
        "Class: NKK / IRS",
        "GRT: 476 T",
        "Remarks: 50 T Bollard Pull, Anchor Handling and Towing Tug."
      ]
    },
    {
      title: "DRA 2",
      icon: <Anchor className="w-5 h-5 text-blue-600" />,
      type: "image",
      image: "/img/Projects/DRA-2.jpg",
      points: [
        "Year of Built: 2006",
        "Flag / Port of Registry: INDIAN / MUMBAI",
        "Class: IRS",
        "GRT: 1959 T",
        "Remarks: Flat top barge with side walls, 12 T/m^2 deck strength, DWT: 4765 T"
      ]
    },
    {
      title: "OCEAN MANTRA",
      icon: <Anchor className="w-5 h-5 text-blue-600" />,
      type: "slider",
      images: ["/img/Projects/Ocean-mantra(1).jpg", "/img/Projects/Ocean-mantra2.jpg"],
      points: [
        "Year of Built: 2022",
        "Flag: Indian Flag",
        "Class: IRS",
        "GRT: 380 T",
        "Remarks: Flat top barge, 8 T/m^2 deck strength, DWT: 750 T"
      ]
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold tracking-[0.15em] text-[10px] uppercase mb-4 block">
            Our Projects
          </span>
          <h2 className="text-slate-900 text-3xl md:text-[2.75rem] font-black tracking-tight leading-[1.1] mb-6">
            Projects That Deliver Offshore Excellence
          </h2>
          <div className="w-12 h-[3px] bg-brand mx-auto mb-8 rounded-full" />
          <p className="text-slate-500 text-[1rem] leading-relaxed font-medium">
            We take pride in every project we deliver. From chartering and asset transactions to complex cargo logistics, our expertise drives successful outcomes across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Years of Experience", value: "10+", icon: <Award className="w-10 h-10 text-slate-900" strokeWidth={1} /> },
    { label: "Projects Completed", value: "50+", icon: <Briefcase className="w-10 h-10 text-slate-900" strokeWidth={1} /> },
    { label: "Skilled Professionals", value: "10+", icon: <Users className="w-10 h-10 text-slate-900" strokeWidth={1} /> },
    { label: "Quality Assurance", value: "100%", icon: <ShieldCheck className="w-10 h-10 text-slate-900" strokeWidth={1} /> },
  ];

  return (
    <section className="py-16 border-t border-slate-100 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="shrink-0">
              {stat.icon}
            </div>
            <div>
              <div className="text-[2rem] font-black text-[#1e293b] tracking-tight leading-none mb-1">{stat.value}</div>
              <div className="text-[0.8rem] text-slate-500 font-semibold">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('user_name'),
          email: formData.get('user_email'),
          phone: formData.get('user_phone'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      });

      if (!response.ok) throw new Error('Failed to send');

      setIsSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error('Email Error:', error);
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-32 bg-[#040911] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0A192F]/60 backdrop-blur-xl p-16 rounded-[3rem] border border-brand/20 shadow-2xl shadow-brand/10"
          >
            <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-white text-4xl font-black mb-4 uppercase tracking-tight">Message Sent!</h2>
            <p className="text-white/60 text-lg mb-10 font-medium">Thank you for reaching out. Our team will review your inquiry and get back to you shortly.</p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="text-brand font-bold uppercase tracking-widest border-b border-brand hover:border-brand/40 transition-all pb-1"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#040911]">
      {/* Background Image restricted to the right */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0">
        <img 
          src="/img/contact_bg.png" 
          alt="Contact Background" 
          className="w-full h-full object-cover object-right opacity-90"
        />
        {/* Horizontal gradient to fade from dark background into the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040911] via-[#040911]/60 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
            Get in touch
          </span>
          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">Contact Us</h2>
          <div className="w-16 h-[3px] bg-brand mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
          <p className="text-white/70 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            We are here to assist you. Reach out to our team for any inquiries, collaborations or support.
          </p>
        </div>

        <div className="bg-[#0A192F]/40 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row">
          {/* Left Section - Contact Info */}
          <div className="lg:w-[45%] bg-[#0A192F]/60 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="space-y-12">
              {/* Address */}
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-brand/30 flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5 text-brand" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-4 tracking-wider">OUR ADDRESS</h3>
                  <div className="flex gap-3">
                    <MapPin className="w-4 h-4 text-brand shrink-0 mt-1" />
                    <div className="text-white/60 text-[0.95rem] leading-relaxed font-medium">
                      Town Centre II, Village Sahar Cargo,<br />
                      Andheri - Kurla Road, Andheri East,<br />
                      Near - Marol Metro Station,<br />
                      Mumbai - 400 059, Maharashtra, India.
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[1px] bg-white/5 w-full" />

              {/* Contact Person 1 */}
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-brand/30 flex items-center justify-center shrink-0 group-hover:bg-brand/10 transition-colors">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[0.85rem] mb-2 tracking-widest opacity-80 uppercase">Capt. Anupam Raizada</h3>
                  <a href="tel:+919833090019" className="text-white text-2xl font-black block mb-2 hover:text-brand transition-colors">+91 98330 90019</a>
                  <a href="mailto:info@watertightconsultants.com" className="text-white/50 text-sm font-medium flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5 text-brand" />
                    info@watertightconsultants.com
                  </a>
                </div>
              </div>

              <div className="h-[1px] bg-white/5 w-full" />

              {/* Contact Person 2 */}
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-full border border-brand/30 flex items-center justify-center shrink-0 group-hover:bg-brand/10 transition-colors">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-[0.85rem] mb-2 tracking-widest opacity-80 uppercase">Ms. Zehen Shorey</h3>
                  <a href="tel:+919619265512" className="text-white text-2xl font-black block mb-2 hover:text-brand transition-colors">+91 96192 65512</a>
                  <a href="mailto:services@watertightconsultants.com" className="text-white/50 text-sm font-medium flex items-center gap-2 hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5 text-brand" />
                    services@watertightconsultants.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="lg:w-[55%] bg-white p-8 md:p-12">
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-slate-900 font-black text-xl uppercase tracking-tight">Send Us a Message</h3>
              </div>
              <div className="w-10 h-[2.5px] bg-brand rounded-full" />
            </div>

            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    name="user_name"
                    placeholder="Your Name *" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="email" 
                    name="user_email"
                    placeholder="Your Email *" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="tel" 
                  name="user_phone"
                  placeholder="Your Phone" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="relative">
                <select 
                  name="subject"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-4 text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all appearance-none text-slate-400"
                >
                  <option value="">Subject *</option>
                  <option value="Chartering Operations">Chartering Operations</option>
                  <option value="Marine Asset Transactions">Marine Asset Transactions</option>
                  <option value="Project Cargo Handling">Project Cargo Handling</option>
                  <option value="Offshore Logistics Execution">Offshore Logistics Execution</option>
                  <option value="Other Inquiry">Other Inquiry</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>

              <div className="relative">
                <Pencil className="absolute left-4 top-5 w-4 h-4 text-slate-400" />
                <textarea 
                  name="message"
                  rows={4}
                  placeholder="Your Message *" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all placeholder:text-slate-400 resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-xl shadow-brand/20 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    SENDING...
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] py-10 text-center border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-white/40 text-[0.8rem] font-bold tracking-[0.1em] uppercase">
          © {new Date().getFullYear()} WATERTIGHT CONSULTANTS. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}
