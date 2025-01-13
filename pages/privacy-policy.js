import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-4">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Introduction
          </h2>
          <p className="text-gray-600">
            Welcome to our Job Matching Tool. We value your trust and are
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and share your personal information when you
            use our platform, including when you log in with LinkedIn and
            interact with our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              <strong>Profile Information:</strong> When you log in using
              LinkedIn, we collect your public profile data (e.g., name, job
              title, and LinkedIn profile URL).
            </li>
            <li>
              <strong>Contact Information:</strong> If you authorize, we may
              collect your email address for communication purposes.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact
              with our platform, such as search queries and job preferences.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>To provide personalized job-matching services.</li>
            <li>
              To generate professional summaries of companies and products.
            </li>
            <li>
              To connect you with relevant hiring managers or founders through
              LinkedIn profiles.
            </li>
            <li>To communicate updates and improvements to our services.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            How We Share Your Information
          </h2>
          <p className="text-gray-600">
            We do not sell your data to third parties. However, we may share
            your information in the following scenarios:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>
              With LinkedIn, as required to retrieve profile and job
              information.
            </li>
            <li>
              With trusted third-party APIs (e.g., job boards) to enhance
              matching services.
            </li>
            <li>
              When required by law, such as in response to legal requests or
              regulations.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Data Storage and Retention
          </h2>
          <p className="text-gray-600">
            We store your data securely and retain it only as long as necessary
            to provide our services. You may request data deletion at any time
            by contacting us at{" "}
            <a
              className="text-blue-500 underline"
              href="mailto:support@yourcompany.com"
            >
              support@yourcompany.com
            </a>
            .
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            You have the following rights regarding your data:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Access your data and understand how it’s being used.</li>
            <li>Request corrections to inaccurate or incomplete data.</li>
            <li>Request deletion of your data.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time to reflect
            changes to our practices or for other operational, legal, or
            regulatory reasons. Please check back periodically for updates.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy or our
            practices, please contact us at:
          </p>
          <address className="text-gray-600">
            Victory Labs <br />
            Email:{" "}
            <a
              className="text-blue-500 underline"
              href="mailto:john@victorylabs.io"
            >
              john@victorylabs.io
            </a>
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
