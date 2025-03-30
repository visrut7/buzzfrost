const AboutPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center p-4 md:p-8 max-w-6xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
          About Buzz Frost
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
          Transforming businesses with innovative SaaS solutions and agile technology.
        </p>
      </header>

      <div className="w-full max-w-4xl space-y-12 mb-8">
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <h2 className="text-2xl font-bold text-blue-200 mb-4">Our Story</h2>
          <p className="text-blue-100/90 mb-4">
            Founded in 2025, Buzz Frost was born from the belief that business software should be both powerful and intuitive. Our founders—seasoned tech professionals—identified a need for SaaS solutions that deliver enterprise-level performance while remaining user-friendly.
          </p>
          <p className="text-blue-100/90">
            What began as a small startup has evolved into a trusted technology partner for businesses around the globe. Our ongoing commitment to innovation and excellence fuels the growth of our dynamic product suite.
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <h2 className="text-2xl font-bold text-blue-200 mb-4">Our Mission</h2>
          <p className="text-blue-100/90 mb-6">
            At Buzz Frost, we empower businesses with intelligent software solutions that streamline operations, boost productivity, and drive sustainable growth. We believe technology should adapt to your business needs—not the other way around.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-900/30 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-200 mb-2">Vision</h3>
              <p className="text-blue-100/80">
                To become a global leader in innovative SaaS solutions, redefining how businesses operate in the digital era.
              </p>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-200 mb-2">Values</h3>
              <ul className="list-disc list-inside text-blue-100/80 space-y-1">
                <li>Innovation at every step</li>
                <li>Client-centric approach</li>
                <li>Integrity and transparency</li>
                <li>Continuous improvement</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage; 