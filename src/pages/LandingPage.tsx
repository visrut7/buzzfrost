import { useState } from "react";
import { Button } from "../Button";
import { Card, CardContent } from "../Card";
import { Link } from "react-router-dom";
import { FaCode, FaRobot, FaRocket, FaServer, FaDesktop, FaGithub, FaCheck, FaComment, FaCalendarAlt } from "react-icons/fa";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex-1 flex flex-col items-center p-4 md:p-8 gap-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <header className="text-center mb-4 w-full py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
          Welcome to Buzz Frost
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto text-blue-100 mb-8">
          We transform complex ideas into elegant software solutions. Building the future, one line of code at a time.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link to="/contact">
            <Button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-800 shadow-md text-lg">
              Start Your Project
            </Button>
          </Link>
          <Link to="/about">
            <Button className="bg-transparent border-2 border-blue-400 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-800/20 shadow-md text-lg">
              About Us
            </Button>
          </Link>
        </div>
      </header>

      {/* About Section */}
      <section className="w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-200">Who We Are</h2>
        <p className="text-blue-100 text-center max-w-3xl mx-auto">
          We are a team of experienced developers with a strong technical background, specializing in delivering high-quality software solutions. 
          With over 3 years of experience, we focus on solving complex problems and effectively communicating with clients to achieve their business goals.
        </p>
      </section>

      {/* Services Section */}
      <section className="w-full max-w-4xl mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-xl hover:bg-white/20 transition-colors rounded-xl">
            <CardContent>
              <div className="flex items-center mb-4">
                <FaCode className="text-blue-300 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-blue-200">Custom Web Development</h3>
              </div>
              <p className="text-blue-100/80">
                Full-stack applications using Next.js, React, Angular, Nest.js, and Django, tailored to your business needs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-xl hover:bg-white/20 transition-colors rounded-xl">
            <CardContent>
              <div className="flex items-center mb-4">
                <FaRobot className="text-blue-300 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-blue-200">Web Scraping & Automation</h3>
              </div>
              <p className="text-blue-100/80">
                Efficient web scraping and automation using Python, BeautifulSoup, Selenium, and Playwright.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-xl hover:bg-white/20 transition-colors rounded-xl">
            <CardContent>
              <div className="flex items-center mb-4">
                <FaRocket className="text-blue-300 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-blue-200">MVP Development</h3>
              </div>
              <p className="text-blue-100/80">
                Need a rapid prototype? We specialize in MVP development to get your product to market quickly.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-xl hover:bg-white/20 transition-colors rounded-xl">
            <CardContent>
              <div className="flex items-center mb-4">
                <FaServer className="text-blue-300 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-blue-200">Back-End Development</h3>
              </div>
              <p className="text-blue-100/80">
                Secure, scalable APIs and back-end systems that ensure reliability and maintainability.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-xl hover:bg-white/20 transition-colors rounded-xl">
            <CardContent>
              <div className="flex items-center mb-4">
                <FaDesktop className="text-blue-300 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-blue-200">Front-End Development</h3>
              </div>
              <p className="text-blue-100/80">
                Transform Figma designs into responsive front-end apps and integrate them seamlessly with back-end systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How We Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="bg-blue-500/20 p-3 rounded-full mr-4">
              <FaGithub className="text-blue-300 text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-200">Version Control & Collaboration</h3>
              <p className="text-blue-100/80">We use Git and GitHub for version control, ensuring smooth collaboration.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500/20 p-3 rounded-full mr-4">
              <FaCheck className="text-blue-300 text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-200">Quality & Maintainability</h3>
              <p className="text-blue-100/80">Clean, maintainable code with a focus on future scalability and reliability.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500/20 p-3 rounded-full mr-4">
              <FaComment className="text-blue-300 text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-200">Communication</h3>
              <p className="text-blue-100/80">Regular updates to keep you informed and address any concerns.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-blue-500/20 p-3 rounded-full mr-4">
              <FaCalendarAlt className="text-blue-300 text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-200">Project Planning</h3>
              <p className="text-blue-100/80">We break down tasks, provide time estimates, and work to meet deadlines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full max-w-4xl mb-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Expertise</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Web Application Development",
            "Next.js, React, TypeScript",
            "Social Media Optimization",
            "Web Scraping & Automation",
            "Linux & Open-Source Projects",
            "Cloud & Serverless Solutions"
          ].map((expertise, i) => (
            <div key={i} className="bg-blue-800/30 rounded-lg p-4 text-center">
              <p className="text-blue-100 font-medium">{expertise}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-4xl text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg text-blue-100 mb-6">Join our waitlist to be notified when we launch new services</p>
        
        <div className="flex flex-wrap justify-center items-center gap-3">
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
      </section>
    </div>
  );
};

export default LandingPage; 