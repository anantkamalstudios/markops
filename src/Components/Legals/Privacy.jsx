import React from "react";
import BreadCumb from "../Common/BreadCumb";

const Privacy = () => {
  return (
    <section className="about-section section-padding fix">
      <div className="d-flex justify-content-center legal-heading">
        <h1>Privacy Policy</h1>
      </div>
      <div className="container">
        <div className="mb-4">
          <h5 className="fw-semibold">1. Information We Collect</h5>
          <p>
            MarkOps does not collect personal information such as email, name,
            or payment details. We only access publicly available advertising
            data from platforms like Facebook for analytical purposes.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">2. How We Use Data</h5>
          <ul className="ps-3">
            <li>To display trends and insights from public ad campaigns.</li>
            <li>To improve user experience and feature relevance.</li>
            <li>No personal targeting or profiling is conducted.</li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">3. Data Sharing & Storage</h5>
          <p>
            We do not share or sell your data. All information shown is sourced
            from public domain and stored securely for performance optimization.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">4. Cookies & Tracking</h5>
          <ul className="ps-3">
            <li>We use minimal cookies for basic analytics and preferences.</li>
            <li>No third-party advertising cookies are used.</li>
          </ul>
        </div>

        <div>
          <h5 className="fw-semibold">5. Contact</h5>
          <p>
            For privacy-related questions, please reach out to us at{" "}
            <strong>support@markops.io</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
