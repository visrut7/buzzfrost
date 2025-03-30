import { useState } from "react";
import { Button } from "../Button";
import { Card, CardContent } from "../Card";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      {/* Footer included in main App.tsx */}
    </div>
  );
};

export default LandingPage; 