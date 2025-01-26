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
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center justify-center text-white p-8">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to Buzz Frost
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto">
          Building innovative SaaS solutions for the modern world. Stay tuned as
          we launch cutting-edge tools to simplify your life and business.
        </p>
      </header>

      {/* Call to Action */}
      <div className="flex flex-col items-center md:flex-row gap-4">
        <Button className="bg-white text-blue-800 font-bold px-6 py-3 rounded-2xl hover:bg-blue-200">
          Learn More
        </Button>
        {!submitted && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-2 items-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 rounded-lg text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="submit"
              className="bg-blue-600 text-white font-bold px-6 py-3 rounded-2xl hover:bg-blue-800"
            >
              Join Our Waitlist
            </Button>
          </form>
        )}
        {submitted && (
          <p className="text-green-400 font-semibold">
            Thank you! You’re on the waitlist.
          </p>
        )}
      </div>

      {/* Features Section */}
      <section className="mt-20 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white text-blue-900 p-4 shadow-lg">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Innovative SaaS</h3>
              <p>
                Explore powerful SaaS tools designed to make your business more
                productive and efficient.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white text-blue-900 p-4 shadow-lg">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p>
                Tailored software solutions to fit your specific business needs
                and goals.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white text-blue-900 p-4 shadow-lg">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Scalability</h3>
              <p>
                Tools that grow with your business, ensuring you’re always one
                step ahead.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-20 text-center text-sm opacity-75">
        <p>
          &copy; {new Date().getFullYear()} Buzz Frost. All rights reserved.
          Built with ❤️ and innovation.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
