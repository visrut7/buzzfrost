import { useState } from "react";
import { Button } from "./Button";
import { Card, CardContent } from "./Card";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white">
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 gap-8 max-w-6xl mx-auto">
        {/* Header Section - More compact */}
        <header className="text-center mb-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
            Welcome to Buzz Frost
          </h1>
          <p className="text-base md:text-xl max-w-2xl mx-auto text-blue-100">
            Building innovative SaaS solutions for the modern world.
          </p>
        </header>

        {/* Call to Action - Streamlined */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          <Button className="bg-white text-blue-800 font-bold px-5 py-2 rounded-lg hover:bg-blue-200 shadow-lg transform hover:scale-105 transition-transform">
            Learn More
          </Button>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex gap-2 items-center bg-blue-800/30 p-1 rounded-lg backdrop-blur-sm"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-3 py-2 rounded-md text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 w-44 md:w-auto"
              />
              <Button
                type="submit"
                className="bg-blue-600 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-800 shadow-md"
              >
                Join Waitlist
              </Button>
            </form>
          ) : (
            <p className="text-green-400 font-semibold bg-blue-900/50 px-4 py-2 rounded-lg">
              Thank you! You're on the waitlist.
            </p>
          )}
        </div>

        {/* Features Section - Compacted */}
        <section className="w-full max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Innovative SaaS", desc: "Powerful tools designed to boost productivity" },
              { title: "Custom Solutions", desc: "Tailored software for your specific needs" },
              { title: "Scalability", desc: "Tools that grow alongside your business" }
            ].map((feature, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 shadow-xl hover:bg-white/20 transition-colors rounded-lg">
                <CardContent>
                  <h3 className="text-lg font-semibold mb-1 text-blue-200">{feature.title}</h3>
                  <p className="text-sm text-blue-100/80">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Enhanced Footer Section */}
      <footer className="w-full mt-6 bg-gradient-to-r from-blue-950 to-indigo-950 text-white/80 py-4 px-4 border-t border-blue-500/30 backdrop-blur-lg">
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
          
          <div className="mt-3 md:mt-0 text-xs bg-blue-900/30 px-3 py-1 rounded-full">
            EIN: 61-2244664
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
