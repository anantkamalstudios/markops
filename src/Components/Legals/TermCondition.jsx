import React from "react";
import BreadCumb from "../Common/BreadCumb";

const TermCondition = () => {
  return (
    <section className="about-section section-padding fix">
      <div className="d-flex justify-content-center legal-heading">
        <h1>Terms &amp; Conditions</h1>
      </div>
      <div className="container">
        <div className="mb-4">
          <h5 className="fw-semibold">1. Acceptance of Terms</h5>
          <p>
            By accessing or using MarkOps, you agree to be bound by these Terms
            & Conditions. If you do not agree, please do not use the platform.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">2. Use of the Platform</h5>
          <p>
            MarkOps offers tools for tracking marketing campaigns, analyzing
            performance data, and accessing platform insights. You agree to use
            these services lawfully and in accordance with our policies.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">3. User Responsibilities</h5>
          <ul className="ps-3">
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You agree not to misuse the platform or attempt unauthorized
              access.
            </li>
            <li>
              You must ensure that your content and usage comply with all
              applicable laws.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">4. Intellectual Property</h5>
          <p>
            All content, branding, and features of MarkOps are the property of
            MarkOps or its licensors. You may not reproduce, distribute, or
            create derivative works without permission.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">5. Limitation of Liability</h5>
          <p>
            MarkOps is provided “as is” without warranties. We are not liable
            for any indirect, incidental, or consequential damages arising from
            your use of the platform.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">6. Termination</h5>
          <p>
            We reserve the right to suspend or terminate your access to MarkOps
            at any time for violation of these terms or harmful activity on the
            platform.
          </p>
        </div>

        <div>
          <h5 className="fw-semibold">7. Contact Us</h5>
          <p>
            If you have questions about these terms, please contact us at{" "}
            <strong>support@markops.io</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermCondition;
