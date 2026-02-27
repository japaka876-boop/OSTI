import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white pt-12 mt-20">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-4">Ocean Springs Tech Inc</h3>
                    <p className="text-sm text-gray-300">Your trusted partner for pool construction and maintenance. We build dreams, one pool at a time.</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-accent-cyan">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-accent-cyan">Services</Link></li>
                        <li><Link href="/gallery" className="hover:text-accent-cyan">Gallery</Link></li>
                        <li><Link href="/contact" className="hover:text-accent-cyan">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>(228) 555-2500</li>
                        <li>info@oceanspringstech.com</li>
                        <li>Ocean Springs, MS</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        {/* Add social media icons here later */}
                    </div>
                </div>
            </div>
            <div className="text-center text-sm text-gray-400 mt-12 py-4 border-t border-gray-700">
                <p>&copy; {new Date().getFullYear()} Ocean Springs Tech Inc. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
