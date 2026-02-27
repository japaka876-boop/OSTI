
import Image from 'next/image';
import { Check, ArrowRight, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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

export default function HomePage() {
  return (
    <div className="bg-white text-dark-gray font-sans">
      <main>
        <section className="relative h-[60vh] flex items-center justify-center text-white">
          <div className="absolute inset-0">
            <Image 
              src="/hero-background.jpg" 
              alt="Your Dream Pool Awaits" 
              layout="fill" 
              objectFit="cover" 
              className="brightness-50"
            />
            <div className="absolute inset-0 bg-primary-blue/30"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-heading font-bold">Your Dream Pool Awaits</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">Professional pool construction, renovation, and maintenance services in Ocean Springs and beyond</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="bg-accent-cyan text-white font-bold py-3 px-8 rounded-md flex items-center hover:bg-opacity-90 transition-all">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white/20 text-white font-bold py-3 px-8 rounded-md backdrop-blur-sm hover:bg-white/30 transition-all">
                View Our Work
              </button>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-light-gray">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-heading font-bold text-primary-blue">Our Services</h2>
            <p className="mt-2 text-lg text-medium-gray max-w-3xl mx-auto">Comprehensive pool solutions tailored to your needs</p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.title} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                    <div className="relative h-56 w-full">
                        <Image src={service.image} alt={service.title} layout="fill" objectFit="cover" />
                    </div>
                  <div className="p-8 text-left">
                    <h3 className="text-2xl font-heading font-bold mb-2 text-primary-blue">{service.title}</h3>
                    <p className="text-medium-gray mb-4">{service.description}</p>
                    <a href="#" className="text-accent-cyan font-bold hover:underline">Learn More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="py-20 bg-primary-blue text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-heading font-bold mb-6">Why Choose Ocean Springs Tech?</h2>
                        <ul className="space-y-4">
                            {whyChooseUsFeatures.map((feature) => (
                                <li key={feature} className="flex items-center">
                                    <Check className="h-6 w-6 text-accent-cyan mr-3 flex-shrink-0" />
                                    <span className="text-lg">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-8 bg-accent-cyan text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all">
                            Learn More About Us
                        </button>
                    </div>
                    <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
                         <Image src="https://images.unsplash.com/photo-1593442436579-23c8e45a054a?q=80&w=1974&auto=format&fit=crop" alt="Beautiful resort pool" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
