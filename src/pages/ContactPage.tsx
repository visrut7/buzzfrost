import { useState } from "react";
import { Button } from "../Button";

const ContactPage = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setContactSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center p-4 md:p-8 max-w-6xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
          We'd love to hear from you. Get in touch with our team.
        </p>
      </header>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <h2 className="text-2xl font-bold text-blue-200 mb-4">Our Office</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-blue-200">Address</h3>
                  <p className="text-blue-100/80">30 N GOULD ST STE 4000<br/>SHERIDAN WY</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-blue-200">Phone</h3>
                  <p className="text-blue-100/80">+91 9586670255</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-blue-200">Email</h3>
                  <p className="text-blue-100/80">visrut@buzzfrost.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <h2 className="text-2xl font-bold text-blue-200 mb-4">Business Hours</h2>
            <ul className="space-y-2 text-blue-100/80">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-semibold">9:00 AM - 6:00 PM IST</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <h2 className="text-2xl font-bold text-blue-200 mb-4">Send Us a Message</h2>
          {!contactSubmitted ? (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              {/* Add your Web3Forms access key */}
              <input 
                type="hidden" 
                name="access_key" 
                value="d18f06af-0e89-4f7e-8349-c0bee22e0688"
              />
              
              <div>
                <label htmlFor="name" className="block mb-1 text-blue-200">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1 text-blue-200">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-1 text-blue-200">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1 text-blue-200">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className={`bg-blue-600 text-white font-bold px-8 py-2 rounded-lg transition-colors relative ${
                    isLoading ? 'bg-blue-400 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <span className="opacity-0">Send Message</span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      </div>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center p-8">
              <div className="text-green-400 text-xl font-semibold mb-2">
                Thank you for your message!
              </div>
              <p className="text-blue-100">
                We'll get back to you as soon as possible.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 