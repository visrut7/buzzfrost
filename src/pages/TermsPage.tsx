const TermsPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center p-4 md:p-8 max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
          Terms and Conditions
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </header>

      <div className="w-full bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-white/20 prose prose-invert prose-blue max-w-none mb-8">
        <section className="mb-8">
          <h2 className="text-blue-200">1. Introduction</h2>
          <p>
            Welcome to Buzz Frost. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-blue-200">2. Definitions</h2>
          <ul>
            <li><strong>"Services"</strong> refers to any products, software, services, or content provided by Buzz Frost.</li>
            <li><strong>"User"</strong> refers to the individual or entity that has agreed to these Terms to use our Services.</li>
            <li><strong>"Content"</strong> refers to all text, information, data, images, and other material that may be available through the Services.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-blue-200">3. Use of Services</h2>
          
          <h3 className="text-blue-300">3.1 Eligibility</h3>
          <p>
            You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use our Services. If you are using our Services on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms.
          </p>

          <h3 className="text-blue-300">3.2 User Accounts</h3>
          <p>
            Some of our Services may require you to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account.
          </p>
          <p>
            You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We cannot and will not be liable for any loss or damage arising from your failure to comply with this section.
          </p>

          <h3 className="text-blue-300">3.3 Acceptable Use</h3>
          <p>
            You agree not to use our Services to:
          </p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Send unsolicited communications or spam</li>
            <li>Distribute malware or other harmful code</li>
            <li>Interfere with or disrupt the Services</li>
            <li>Attempt to gain unauthorized access to any portion of the Services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-blue-200">4. Intellectual Property Rights</h2>
          <p>
            The Services and all associated Content are protected by copyright, trademark, and other intellectual property laws. Unless explicitly stated otherwise, all rights, title, and interest in and to the Services and Content are owned by Buzz Frost or its licensors.
          </p>
          <p>
            You are granted a limited, non-exclusive, non-transferable license to access and use the Services for their intended purposes in accordance with these Terms. You may not reproduce, modify, distribute, or create derivative works based on the Services or Content without our express prior written consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-blue-200">5. Payment Terms</h2>
          <p>
            Certain Services may require payment. All payments are processed through our designated payment processors. By providing payment information, you represent and warrant that you are authorized to use the payment method.
          </p>
          <p>
            Prices for our Services are subject to change without notice. We reserve the right to modify or discontinue any Service without notice at any time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-blue-200">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, in no event shall Buzz Frost, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use the Services</li>
            <li>Any conduct or content of any third party on the Services</li>
            <li>Any content obtained from the Services</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-blue-200">7. Disclaimer of Warranties</h2>
          <p>
            Our Services are provided on an "as is" and "as available" basis. Buzz Frost expressly disclaims all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p>
            Buzz Frost makes no warranty that the Services will meet your requirements, be available on an uninterrupted, secure, or error-free basis, or that defects will be corrected.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-blue-200">8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Buzz Frost, its officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from your use of and access to the Services, your violation of any term of these Terms, or your violation of any third-party right.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-blue-200">9. Termination</h2>
          <p>
            We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
          </p>
          <p>
            All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-blue-200">10. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-blue-200">11. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last Updated" date.
          </p>
          <p>
            By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new terms, please stop using the Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-blue-200">12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
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

export default TermsPage; 