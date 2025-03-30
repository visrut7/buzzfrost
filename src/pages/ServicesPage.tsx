import { FaCode, FaRobot, FaRocket, FaServer, FaDesktop, FaLaptopCode, FaPython, FaDatabase, FaCloudUploadAlt, FaGithub, FaCalendarAlt, FaComment, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../Button";

const ServicesPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center p-4 md:p-8 max-w-6xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
          Our Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
          We deliver high-quality solutions tailored to your business needs. Explore our service offerings below.
        </p>
      </header>

      {/* Main Services Section */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-800/50 p-4 rounded-lg mr-4">
              <FaCode className="text-blue-300 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-blue-200">Custom Web Development</h2>
          </div>
          <p className="text-blue-100 mb-4">
            We build full-stack applications tailored to your specific business requirements, using modern frameworks and technologies.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <FaLaptopCode className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Next.js and React for dynamic frontends</span>
            </li>
            <li className="flex items-center">
              <FaLaptopCode className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Angular for enterprise applications</span>
            </li>
            <li className="flex items-center">
              <FaLaptopCode className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Nest.js and Django for robust backends</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-800/50 p-4 rounded-lg mr-4">
              <FaRobot className="text-blue-300 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-blue-200">Web Scraping & Automation</h2>
          </div>
          <p className="text-blue-100 mb-4">
            Automate data collection and processes with our efficient web scraping and automation solutions.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <FaPython className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Python-based scrapers with BeautifulSoup</span>
            </li>
            <li className="flex items-center">
              <FaPython className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Browser automation with Selenium</span>
            </li>
            <li className="flex items-center">
              <FaPython className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Headless browser scripting with Playwright</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-800/50 p-4 rounded-lg mr-4">
              <FaRocket className="text-blue-300 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-blue-200">MVP Development</h2>
          </div>
          <p className="text-blue-100 mb-4">
            Launch your idea quickly with our Minimum Viable Product development service. We help you get to market fast while maintaining quality.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <FaRocket className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Rapid prototype development</span>
            </li>
            <li className="flex items-center">
              <FaRocket className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Essential features implementation</span>
            </li>
            <li className="flex items-center">
              <FaRocket className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Iterative development approach</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-800/50 p-4 rounded-lg mr-4">
              <FaServer className="text-blue-300 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-blue-200">Back-End Development</h2>
          </div>
          <p className="text-blue-100 mb-4">
            We build secure, scalable back-end systems and APIs that ensure reliability and maintainability.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <FaDatabase className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">RESTful API development</span>
            </li>
            <li className="flex items-center">
              <FaDatabase className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Database design and optimization</span>
            </li>
            <li className="flex items-center">
              <FaDatabase className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Authentication and authorization systems</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-800/50 p-4 rounded-lg mr-4">
              <FaDesktop className="text-blue-300 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-blue-200">Front-End Development</h2>
          </div>
          <p className="text-blue-100 mb-4">
            We transform designs into responsive, interactive front-end applications and seamlessly integrate them with back-end systems.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <FaDesktop className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Figma to code implementation</span>
            </li>
            <li className="flex items-center">
              <FaDesktop className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Responsive UI for all devices</span>
            </li>
            <li className="flex items-center">
              <FaDesktop className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Modern, accessible interfaces</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
          <div className="flex items-center mb-4">
            <div className="bg-blue-800/50 p-4 rounded-lg mr-4">
              <FaCloudUploadAlt className="text-blue-300 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-blue-200">Cloud & Serverless Solutions</h2>
          </div>
          <p className="text-blue-100 mb-4">
            Leverage the power of cloud computing with our serverless and cloud-based solutions.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <FaCloudUploadAlt className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">AWS and Azure deployment</span>
            </li>
            <li className="flex items-center">
              <FaCloudUploadAlt className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Serverless function development</span>
            </li>
            <li className="flex items-center">
              <FaCloudUploadAlt className="text-blue-300 mr-2" />
              <span className="text-blue-100/80">Cloud infrastructure management</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="w-full max-w-4xl bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-200">Our Development Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-800/40 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-200">1</span>
            </div>
            <h3 className="font-semibold mb-2 text-blue-200">Discovery</h3>
            <p className="text-sm text-blue-100/80">Understanding your requirements and project goals</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-800/40 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-200">2</span>
            </div>
            <h3 className="font-semibold mb-2 text-blue-200">Planning</h3>
            <p className="text-sm text-blue-100/80">Creating a detailed roadmap with milestones</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-800/40 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-200">3</span>
            </div>
            <h3 className="font-semibold mb-2 text-blue-200">Development</h3>
            <p className="text-sm text-blue-100/80">Building your solution with regular updates</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-800/40 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-200">4</span>
            </div>
            <h3 className="font-semibold mb-2 text-blue-200">Delivery</h3>
            <p className="text-sm text-blue-100/80">Launching your product and providing support</p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">How We Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
            <div className="bg-blue-500/20 p-3 rounded-full mr-4">
              <FaGithub className="text-blue-300 text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-200">Version Control & Collaboration</h3>
              <p className="text-blue-100/80">We use Git and GitHub for version control, ensuring smooth collaboration and code quality.</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
            <div className="bg-blue-500/20 p-3 rounded-full mr-4">
              <FaCheck className="text-blue-300 text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-200">Quality & Maintainability</h3>
              <p className="text-blue-100/80">Clean, maintainable code with a focus on future scalability and reliability. We follow best practices and coding standards.</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
            <div className="bg-blue-500/20 p-3 rounded-full mr-4">
              <FaComment className="text-blue-300 text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-200">Communication</h3>
              <p className="text-blue-100/80">Regular updates to keep you informed and address any concerns. We believe in transparent and open communication.</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6">
            <div className="bg-blue-500/20 p-3 rounded-full mr-4">
              <FaCalendarAlt className="text-blue-300 text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-blue-200">Project Planning</h3>
              <p className="text-blue-100/80">We break down tasks, provide time estimates, and work to meet deadlines. Our organized approach ensures project success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="w-full max-w-4xl mb-12 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-200">Our Expertise</h2>
        
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
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your idea into reality?</h2>
        <p className="text-lg text-blue-100 mb-6">Let's discuss how we can help you achieve your goals.</p>
        <Link to="/contact">
          <Button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-800 shadow-md text-lg">
            Get in Touch
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default ServicesPage; 