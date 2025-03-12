'use client'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">Privacy Policy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to our website. We are committed to safeguarding your privacy. This Privacy Policy
          outlines how we collect, use, disclose, and protect your personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <p>
          We may collect the following information:
        </p>
        <ul className="list-disc ml-6">
          <li>Personal details like name, email address, and phone number</li>
          <li>Information provided when contacting us or filling out forms</li>
          <li>Technical data such as IP address, browser type, and device information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p>
          Your information helps us:
        </p>
        <ul className="list-disc ml-6">
          <li>Respond to your inquiries and provide customer support</li>
          <li>Improve our website and services</li>
          <li>Send you updates, promotional materials, and important notices</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement security measures to protect your personal data. However, no method of
          transmission over the Internet or electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to outside parties
          without your consent, except as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data. Contact us if you wish
          to exercise these rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated revision date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>Email: support@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </section>
    </div>
  );
}
