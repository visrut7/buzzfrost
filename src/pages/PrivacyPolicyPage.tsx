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

      <div className="w-full bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20 prose prose-invert prose-blue max-w-none">
        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="text-blue-200">1. Introduction</h2>
          <p>
            Buzz Frost is a mixed service and product–based company providing cutting-edge software solutions and innovative products. This Privacy Policy is designed to inform you about the types of information we collect, how we use it, and the measures we take to protect it. By using our products or engaging our services, you agree to the practices described in this policy.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="mb-8">
          <h2 className="text-blue-200">2. Information We Collect</h2>
          <p>
            To deliver our services and products, we collect various types of information, including:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Personal Information:</strong> Such as your name, email address, phone number, and billing or shipping details when you purchase products or request our services.
            </li>
            <li>
              <strong>Usage Data:</strong> Details on how you interact with our website, products, and services (e.g., IP address, browser type, device information, etc.).
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies to improve your browsing experience, analyze trends, and administer the site.
            </li>
          </ul>
        </section>

        {/* 3. How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-blue-200">3. How We Use Your Information</h2>
          <p>
            We use your information in order to:
          </p>
          <ul className="list-disc list-inside">
            <li>Provide and improve our products and services.</li>
            <li>Process transactions and manage your orders.</li>
            <li>Communicate important updates, offers, and support information.</li>
            <li>Personalize and enhance your experience on our platform.</li>
            <li>Ensure the security and functionality of our systems.</li>
          </ul>
        </section>

        {/* 4. Sharing Your Information */}
        <section className="mb-8">
          <h2 className="text-blue-200">4. Sharing Your Information</h2>
          <p>
            Your privacy is important to us. We do not sell or rent your personal information. However, we may share your information with trusted third-party service providers who assist us in:
          </p>
          <ul className="list-disc list-inside">
            <li>Processing payments and orders.</li>
            <li>Analyzing website usage and performance.</li>
            <li>Providing customer support.</li>
          </ul>
          <p>
            In addition, we may disclose your information when required by law or to protect our rights.
          </p>
        </section>

        {/* 5. Data Security */}
        <section className="mb-8">
          <h2 className="text-blue-200">5. Data Security</h2>
          <p>
            We adopt a variety of industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. While we work hard to safeguard your data, no transmission method over the internet is 100% secure.
          </p>
        </section>

        {/* 6. Your Rights and Choices */}
        <section className="mb-8">
          <h2 className="text-blue-200">6. Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have certain rights in relation to your personal information, including:
          </p>
          <ul className="list-disc list-inside">
            <li>Accessing and updating your personal data.</li>
            <li>Requesting the deletion of your information.</li>
            <li>Opting out of certain communications.</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the details provided in Section 9 below.
          </p>
        </section>

        {/* 7. Retention of Information */}
        <section className="mb-8">
          <h2 className="text-blue-200">7. Retention of Information</h2>
          <p>
            We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected,
            to comply with our legal obligations, resolve disputes, and enforce our agreements.
          </p>
        </section>

        {/* 8. Changes to This Privacy Policy */}
        <section className="mb-8">
          <h2 className="text-blue-200">8. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date.
          </p>
          <p>
            It is your responsibility to review this Privacy Policy periodically. Your continued use of our products and services implies acceptance of any updates.
          </p>
        </section>

        {/* 9. Contact Us */}
        <section className="mb-8">
          <h2 className="text-blue-200">9. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy, please reach out to us:
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