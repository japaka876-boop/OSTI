import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="bg-primary-blue text-white py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-4">
            <span>(228) 555-2500</span>
            <span>info@oceanspringstech.com</span>
          </div>
          <div>
            <span>Licensed & Insured | Serving Ocean Springs & Beyond</span>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          <div className="text-2xl font-bold text-primary-blue">
            <Link href="/">
              Ocean Springs Tech Inc
              <span className="block text-xs text-gray-500">Pool Construction & Maintenance</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-accent-cyan">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-accent-cyan">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-accent-cyan">Services</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-accent-cyan">Gallery</Link>
            <Link href="/blog" className="text-gray-600 hover:text-accent-cyan">Blog</Link>
            <Link href="/faq" className="text-gray-600 hover:text-accent-cyan">FAQ</Link>
            <Link href="/reviews" className="text-gray-600 hover:text-accent-cyan">Reviews</Link>
            <Link href="/contact" className="text-gray-600 hover:text-accent-cyan">Contact</Link>
          </div>
          <div>
            <Link href="/quote">
              <button className="bg-accent-cyan text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-colors">
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
