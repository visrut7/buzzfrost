const PrivacyPolicyPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center p-4 md:p-8 max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </header>

      <div className="w-full bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20 prose prose-invert prose-blue max">
        <section className="mb-8">
          <h2 className="text-blue-200">8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-blue-200">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>By email: visrut@buzzfrost.com</li>
            <li>By phone: +91 9586670255</li>
            <li>By mail: 30 N GOULD ST STE 4000, SHERIDAN WY</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 