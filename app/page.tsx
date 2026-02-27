
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
        <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/hero-background.jpg" 
              alt="Building Your Personal Oasis" 
              layout="fill" 
              objectFit="cover" 
              className="brightness-50"
            />
            <div className="absolute inset-0 bg-primary-blue/40"></div>
          </div>
          <div className="relative z-10 text-center px-4 animate-fadeInUp">
            <h1 className="text-5xl md:text-8xl font-heading font-extrabold tracking-tight">Building Your Personal Oasis</h1>
            <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto">Where luxury meets tranquility, we create the backyard of your dreams.</p>
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
    </div>
  );
}
