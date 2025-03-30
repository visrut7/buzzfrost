import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-950 text-white shadow-md py-4 px-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-3 md:mb-0">
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
            Buzz Frost
          </Link>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-6">
          <Link to="/" className="px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">
            Home
          </Link>
          <Link to="/services" className="px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">
            Services
          </Link>
          <Link to="/about" className="px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">
            About Us
          </Link>
          <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-blue-800 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 