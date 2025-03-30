import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-gradient-to-r from-blue-950 to-indigo-950 text-white/80 py-8 px-4 border-t border-blue-500/30 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        {/* Top section with company info and navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 pb-6 border-b border-blue-500/20">
          {/* Company info */}
          <div>
            <h3 className="font-bold text-blue-300 text-xl mb-3">BUZZ FROST LLC</h3>
            <p className="text-sm mb-4">Providing innovative solutions since 2020</p>
            <div className="flex space-x-4 mt-4">
              {/* <FaFacebook className="text-blue-300 hover:text-white cursor-pointer transition-colors text-xl" />
              <FaTwitter className="text-blue-300 hover:text-white cursor-pointer transition-colors text-xl" />
              <FaInstagram className="text-blue-300 hover:text-white cursor-pointer transition-colors text-xl" /> */}
              <a href="https://www.linkedin.com/in/visrut7/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-300 hover:text-white cursor-pointer transition-colors text-xl" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-blue-300 text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-300 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-300 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300 transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-300 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-blue-300 text-lg mb-3">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-300 flex-shrink-0" />
                <span className="text-sm">30 N GOULD ST STE 4000 SHERIDAN WY</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-300 flex-shrink-0" />
                <span className="text-sm">+91 9586670255</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-300 flex-shrink-0" />
                <span className="text-sm">visrut@buzzfrost.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright and EIN */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-2">
          <p className="text-sm">&copy; {new Date().getFullYear()} Buzz Frost LLC. All rights reserved.</p>
          <div className="bg-blue-900/30 px-4 py-1.5 rounded-full mt-3 md:mt-0">
            <span className="text-sm">EIN: 61-2244664</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 