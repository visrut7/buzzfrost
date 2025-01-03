import { Code2, Database, Rocket, Layout, Terminal, GitBranch, ClipboardCheck, MessageSquare, Timer } from 'lucide-react';

const services = [
  {
    title: 'Custom Web Development',
    icon: <Code2 className="w-6 h-6" />,
    description: 'Full-stack applications using Next.js, React, Angular, Nest.js, and Django, tailored to your business needs.'
  },
  {
    title: 'Web Scraping & Automation',
    icon: <Terminal className="w-6 h-6" />,
    description: 'Efficient web scraping and automation using Python, BeautifulSoup, Selenium, and Playwright.'
  },
  {
    title: 'MVP Development',
    icon: <Rocket className="w-6 h-6" />,
    description: 'Need a rapid prototype? We specialize in MVP development to get your product to market quickly.'
  },
  {
    title: 'Back-End Development',
    icon: <Database className="w-6 h-6" />,
    description: 'Secure, scalable APIs and back-end systems that ensure reliability and maintainability.'
  },
  {
    title: 'Front-End Development',
    icon: <Layout className="w-6 h-6" />,
    description: 'Transform Figma designs into responsive front-end apps and integrate them seamlessly with back-end systems.'
  }
];

const workProcess = [
  {
    title: 'Version Control & Collaboration',
    icon: <GitBranch className="w-6 h-6" />,
    description: 'We use Git and GitHub for version control, ensuring smooth collaboration.'
  },
  {
    title: 'Quality & Maintainability',
    icon: <ClipboardCheck className="w-6 h-6" />,
    description: 'Clean, maintainable code with a focus on future scalability and reliability.'
  },
  {
    title: 'Communication',
    icon: <MessageSquare className="w-6 h-6" />,
    description: 'Regular updates to keep you informed and address any concerns.'
  },
  {
    title: 'Project Planning',
    icon: <Timer className="w-6 h-6" />,
    description: 'We break down tasks, provide time estimates, and work to meet deadlines.'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Ship Epic Stuff
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            We transform complex ideas into elegant software solutions.
            Building the future, one line of code at a time.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Start Your Project
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            <p>
              We are a team of experienced developers with a strong technical background, 
              specializing in delivering high-quality software solutions. With over 3 years 
              of experience, we focus on solving complex problems and effectively communicating 
              with clients to achieve their business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-700/50 transition-colors duration-200"
              >
                <div className="bg-blue-500/10 p-3 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((process, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="bg-blue-500/10 p-4 rounded-full w-fit mx-auto mb-4">
                  {process.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{process.title}</h3>
                <p className="text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              'Web Application Development',
              'Next.js, React, TypeScript',
              'Social Media Optimization',
              'Web Scraping & Automation',
              'Linux & Open-Source Projects',
              'Cloud & Serverless Solutions'
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-4 rounded-lg text-center hover:bg-gray-700/50 transition-colors duration-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Start Your Project</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Ship Epic Stuff. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;