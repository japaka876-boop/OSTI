import Image from 'next/image';
import { CheckCircle, ShieldCheck, Users, Clock, Award, Droplet, Sun, Wrench, Star } from 'lucide-react';
import { FadeIn } from './components/FadeIn';

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent-cyan" />,
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent-cyan" />,
    title: 'Expert Team',
    description: 'Highly trained professionals with years of experience.',
  },
  {
    icon: <Clock className="h-8 w-8 text-accent-cyan" />,
    title: 'On-Time Delivery',
    description: 'Projects completed on schedule, every time.',
  },
  {
    icon: <Award className="h-8 w-8 text-accent-cyan" />,
    title: 'Quality Materials',
    description: 'Premium materials for lasting results.',
  },
];

const services = [
  {
    icon: <Droplet className="h-10 w-10 text-accent-cyan" />,
    title: 'Custom Pool Design',
    description: 'We design stunning pools that match your vision and lifestyle.',
  },
  {
    icon: <Sun className="h-10 w-10 text-accent-cyan" />,
    title: 'Pool Construction',
    description: 'Expert construction services to bring your dream pool to life.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-accent-cyan" />,
    title: 'Renovation & Remodeling',
    description: 'Update your existing pool with modern features and designs.',
  },
  {
    icon: <Star className="h-10 w-10 text-accent-cyan" />,
    title: 'Maintenance & Repair',
    description: 'Comprehensive maintenance plans to keep your pool pristine.',
  },
];

const testimonials = [
    {
        avatar: 'https://i.pravatar.cc/150?img=68',
        name: 'Jessica L.',
        rating: 5,
        testimonial: 'Ocean Springs Tech transformed our backyard! The team was professional, and the result exceeded our wildest dreams. Our new pool is the talk of the neighborhood!'
    },
    {
        avatar: 'https://i.pravatar.cc/150?img=75',
        name: 'Mike & Sarah P.',
        rating: 5,
        testimonial: 'From the initial design to the final tile, the process was seamless. We couldn\'t be happier with the craftsmanship and attention to detail. Highly recommend!'
    },
    {
        avatar: 'https://i.pravatar.cc/150?img=79',
        name: 'Emily R.',
        rating: 5,
        testimonial: 'The maintenance service is fantastic. Our pool has never looked better, and the team is always friendly and reliable. It\'s completely hassle-free.'
    }
];

export default function HomePage() {
  return (
    <div className="bg-white">
      <section 
        className="relative bg-cover bg-center text-white py-40 px-4"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586953208448-315f48395597?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Your Dream Pool Awaits</h1>
          <p className="text-xl mb-8">Professional pool construction, renovation, and maintenance services in Ocean Springs and beyond.</p>
          <div className="space-x-4">
            <button className="bg-accent-cyan text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
              Get Free Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-blue transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <FadeIn>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-primary-blue mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-primary-blue mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-primary-blue mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image src="https://images.unsplash.com/photo-1543087920-b0185994f271?q=80&w=1974&auto=format&fit=crop" alt="Pool construction team" width={600} height={400} className="rounded-lg shadow-2xl" />
              </div>
              <div>
                <h2 className="text-4xl font-extrabold text-primary-blue mb-6">Why Choose Ocean Springs Tech?</h2>
                <p className="text-gray-600 mb-6">With years of experience and a passion for creating beautiful, functional pools, we are the top choice for pool services in the region. Our commitment to quality and customer satisfaction is unmatched.</p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-accent-cyan mr-3" />
                    <span className="text-lg text-gray-700">Uncompromising Quality & Craftsmanship</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-accent-cyan mr-3" />
                    <span className="text-lg text-gray-700">Transparent Pricing & Communication</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-accent-cyan mr-3" />
                    <span className="text-lg text-gray-700">Dedicated Project Management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-accent-cyan mr-3" />
                    <span className="text-lg text-gray-700">Long-Term Customer Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

    <FadeIn>
        <section className="py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold text-primary-blue mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <Image src={testimonial.avatar} alt={testimonial.name} width={80} height={80} className="rounded-full mx-auto mb-4 border-4 border-accent-cyan" />
                            <p className="text-gray-600 italic mb-4">\"{testimonial.testimonial}\"</p>
                            <div className="flex justify-center mb-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                                ))}
                            </div>
                            <p className="font-bold text-primary-blue">{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </FadeIn>

    <FadeIn>
        <section className="py-20 bg-primary-blue text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold mb-4">Ready to Start Your Pool Project?</h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Contact us today for a free, no-obligation consultation. Let\'s build the pool of your dreams together.</p>
                <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg text-left">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                            <input type="text" id="name" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-accent-cyan" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" id="email" className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-accent-cyan" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                            <textarea id="message" rows={4} className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-accent-cyan"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-accent-cyan text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </FadeIn>

    </div>
  );
}
