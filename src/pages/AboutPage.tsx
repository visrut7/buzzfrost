const AboutPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center p-4 md:p-8 max-w-6xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
          About Buzz Frost
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
          Transforming businesses through innovative SaaS solutions
        </p>
      </header>

      <div className="w-full max-w-4xl space-y-12 mb-8">
        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <h2 className="text-2xl font-bold text-blue-200 mb-4">Our Story</h2>
          <p className="text-blue-100/90 mb-4">
            Founded in 2021, Buzz Frost emerged from a simple idea: business software should be powerful yet intuitive. Our founders, experienced tech industry professionals, recognized a gap in the market for SaaS solutions that combined enterprise-level capabilities with user-friendly interfaces.
          </p>
          <p className="text-blue-100/90">
            What began as a small startup with a handful of clients has rapidly grown into a trusted technology partner for businesses across multiple industries worldwide. Our dedication to innovation and client success continues to drive our expansion and product development.
          </p>
        </section>

        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <h2 className="text-2xl font-bold text-blue-200 mb-4">Our Mission</h2>
          <p className="text-blue-100/90">
            At Buzz Frost, our mission is to empower businesses with intelligent software solutions that simplify complex processes, increase productivity, and drive sustainable growth. We believe that the right technology tools should adapt to how you work, not the other way around.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-900/30 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-200 mb-2">Vision</h3>
              <p className="text-blue-100/80">To become the global leader in innovative SaaS solutions that transform how businesses operate in the digital age.</p>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-200 mb-2">Values</h3>
              <ul className="list-disc list-inside text-blue-100/80 space-y-1">
                <li>Innovation at every level</li>
                <li>Client-centered approach</li>
                <li>Integrity and transparency</li>
                <li>Continuous improvement</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
          <h2 className="text-2xl font-bold text-blue-200 mb-4">Our Team</h2>
          <p className="text-blue-100/90 mb-6">
            Our diverse team of engineers, designers, and industry experts brings together decades of combined experience in software development, UX design, and business process optimization. United by a passion for solving complex problems, our team works tirelessly to create solutions that make a real difference for our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-900/50 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-3xl">👨‍💼</span>
              </div>
              <h4 className="font-bold text-blue-200">Leadership</h4>
              <p className="text-sm text-blue-100/70">Visionary experts guiding our strategic direction</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-900/50 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-3xl">👩‍💼</span>
              </div>
              <h4 className="font-bold text-blue-200">Innovation</h4>
              <p className="text-sm text-blue-100/70">Creative minds driving technological advancements</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-900/50 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-3xl">👩‍💼</span>
              </div>
              <h4 className="font-bold text-blue-200">Innovation</h4>
              <p className="text-sm text-blue-100/70">Creative minds driving technological advancements</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage; 