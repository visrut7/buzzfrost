import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full mt-auto bg-gradient-to-r from-blue-950 to-indigo-950 text-white/80 py-4 px-4 border-t border-blue-500/30 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-3 md:mb-0">
          <p className="font-bold text-blue-300 text-lg">BUZZ FROST LLC</p>
          <p className="text-xs">&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm">
          <div className="bg-blue-900/40 p-2 rounded-lg shadow-inner flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>30 N GOULD ST STE 4000 SHERIDAN WY</span>
          </div>
          
          <div className="flex gap-3">
            <div className="bg-blue-900/40 p-2 rounded-lg shadow-inner flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9586670255</span>
            </div>
            
            <div className="bg-blue-900/40 p-2 rounded-lg shadow-inner flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>visrut@buzzfrost.com</span>
            </div>
          </div>
        </div>
        
        <div className="mt-3 md:mt-0 grid grid-cols-2 gap-2 text-xs">
          <Link to="/privacy-policy" className="hover:text-blue-300">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-blue-300">Terms & Conditions</Link>
          <div className="col-span-2 text-center bg-blue-900/30 px-3 py-1 rounded-full mt-1">
            EIN: 61-2244664
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 