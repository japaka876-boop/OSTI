import Image from 'next/image';
import { CheckCircle, ShieldCheck, Users, Clock, Award } from 'lucide-react';

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
    </div>
  );
}
