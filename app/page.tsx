
import Image from 'next/image';
import { Check, ArrowRight, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Users, Truck, Gem } from 'lucide-react';

const services = [
  {
    image: "https://images.unsplash.com/photo-1559138618-2e34f605b1b4?q=80&w=2070&auto=format&fit=crop",
    title: 'Pool Construction',
    description: 'Custom-designed pools built to your specifications and lifestyle.',
  },
  {
    image: "https://images.unsplash.com/photo-1598002236128-04f76718018d?q=80&w=2070&auto=format&fit=crop",
    title: 'Pool Renovation',
    description: 'Transform your existing pool into a modern oasis of relaxation.',
  },
  {
    image: "https://images.unsplash.com/photo-1542848133-4f7f9e212954?q=80&w=2070&auto=format&fit=crop",
    title: 'Pool Maintenance',
    description: 'Keep your pool crystal clear and ready for enjoyment year-round.',
  },
];

const whyChooseUsFeatures = [
    'Over 20 years of experience in pool construction and maintenance',
    'Licensed, insured, and certified professionals',
    'Custom designs tailored to your lifestyle and budget',
    'Premium materials and equipment from trusted brands',
    'Exceptional customer service from start to finish',
    'Comprehensive warranty on all our work',
    'Energy-efficient and eco-friendly options available',
    'Serving Ocean Springs, Biloxi, Gulfport, and surrounding areas',
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
    title: 'Quality Materials',
    description: 'Only the best materials for a long-lasting, beautiful pool.',
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-dark-gray font-sans">
      <header className="sticky top-0 z-50 shadow-lg">
        <div className="bg-primary-blue text-white text-sm py-2">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(228) 555-2500</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@oceanspringstech.com</span>
              </div>
            </div>
            <div>
              <span>Licensed & Insured | Serving Ocean Springs & Beyond</span>
            </div>
          </div>
        </div>

        <div className="bg-white text-dark-gray py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="bg-gradient-to-r from-cyan-400 to-sky-600 text-white p-3 rounded-lg shadow-md text-center w-52">
                    <div className="font-bold text-xl leading-tight">Ocean Springs Tech Inc</div>
                    <div className="text-xs tracking-wide">Pool Construction & Maintenance</div>
                </div>

                <nav className="hidden md:flex items-center space-x-5 font-medium">
                    <a href="#" className="bg-primary-blue text-white px-4 py-2 rounded-md shadow-sm text-base">Home</a>
                    <a href="#about" className="hover:text-accent-cyan transition-colors">About</a>
                    <a href="#services" className="hover:text-accent-cyan transition-colors">Services</a>
                    <a href="#gallery" className="hover:text-accent-cyan transition-colors">Gallery</a>
                    <a href="#blog" className="hover:text-accent-cyan transition-colors">Blog</a>
                    <a href="#faq" className="hover:text-accent-cyan transition-colors">FAQ</a>
                    <a href="#reviews" className="hover:text-accent-cyan transition-colors">Reviews</a>
                    <a href="#contact" className="hover:text-accent-cyan transition-colors">Contact</a>
                </nav>

                <button className="bg-accent-cyan text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all shadow-md">
                    Get a Quote
                </button>
            </div>
        </div>
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <video
              src="https://cdn.pixabay.com/video/2018/09/13/18224-284890696_large.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-primary-blue/60 -z-10"></div>
          <div className="relative text-center px-4 animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-heading font-extrabold tracking-tight">Building Your Personal Oasis</h1>
            <p className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto">Where luxury meets tranquility, we create the backyard of your dreams.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="bg-accent-cyan text-white font-bold py-4 px-10 rounded-full flex items-center hover:bg-opacity-90 transition-all shadow-lg transform hover:scale-105">
                Get a Free Estimate <ArrowRight className="ml-2 h-6 w-6" />
              </button>
              <button className="bg-white/20 text-white font-bold py-4 px-10 rounded-full backdrop-blur-md hover:bg-white/30 transition-all shadow-lg transform hover:scale-105">
                Explore Our Gallery
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {features.map((feature) => (
                        <div key={feature.title} className="p-6">
                            {feature.icon}
                            <h3 className="text-xl font-bold mt-4 text-primary-blue">{feature.title}</h3>
                            <p className="text-medium-gray mt-2">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="services" className="py-24 bg-light-gray">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-heading font-bold text-primary-blue">Our Services</h2>
            <p className="mt-2 text-lg text-medium-gray max-w-3xl mx-auto">Comprehensive pool solutions tailored to your needs</p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
                    <div className="relative h-64 w-full">
                        <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  <div className="p-8 text-left">
                    <h3 className="text-2xl font-heading font-bold mb-3 text-primary-blue">{service.title}</h3>
                    <p className="text-medium-gray mb-6">{service.description}</p>
                    <a href="#" className="text-accent-cyan font-bold hover:underline flex items-center">
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="py-24 bg-primary-blue text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-heading font-bold mb-8">Why Choose Ocean Springs Tech?</h2>
                        <ul className="space-y-5">
                            {whyChooseUsFeatures.map((feature) => (
                                <li key={feature} className="flex items-center">
                                    <Check className="h-7 w-7 text-accent-cyan mr-4 flex-shrink-0" />
                                    <span className="text-lg">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-10 bg-accent-cyan text-white font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition-all shadow-lg transform hover:scale-105">
                            More About Our Commitment
                        </button>
                    </div>
                    <div className="relative w-full h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                         <Image src="https://images.unsplash.com/photo-1593442436579-23c8e45a054a?q=80&w=1974&auto=format&fit=crop" alt="Beautiful resort pool" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
        </section>
      </main>

      <footer id="contact" className="bg-dark-gray text-white py-16">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 className="font-heading text-2xl font-bold mb-4">OSTI</h3>
                    <p className="text-medium-gray">Creating backyard oases in Ocean Springs, MS and beyond. Let us build your dream pool.</p>
                </div>
                <div>
                    <h3 className="font-heading text-xl font-bold mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-medium-gray">
                        <li className="flex items-center"><Phone className="h-5 w-5 mr-3 text-accent-cyan" /> (228) 555-0101</li>
                        <li className="flex items-center"><Mail className="h-5 w-5 mr-3 text-accent-cyan" /> contact@ostipools.com</li>
                        <li className="flex items-center">Ocean Springs, MS, USA</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-heading text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-medium-gray hover:text-accent-cyan transition-colors"><Facebook className="h-6 w-6" /></a>
                        <a href="#" className="text-medium-gray hover:text-accent-cyan transition-colors"><Twitter className="h-6 w-6" /></a>
                        <a href="#" className="text-medium-gray hover:text-accent-cyan transition-colors"><Instagram className="h-6 w-6" /></a>
                        <a href="#" className="text-medium-gray hover:text-accent-cyan transition-colors"><Linkedin className="h-6 w-6" /></a>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-700 text-center text-medium-gray text-sm">
                <p>&copy; {new Date().getFullYear()} OSTI Pool Services. All Rights Reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
