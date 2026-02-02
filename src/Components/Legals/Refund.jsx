import React from "react";
import BreadCumb from "../Common/BreadCumb";

const Refund = () => {
  return (
    <section className="about-section section-padding fix">
      <div className="d-flex justify-content-center legal-heading">
        <h1>Refund Policies</h1>
      </div>
      <div className="container">
        <div className="mb-4">
          <h5 className="fw-semibold">MarkOps Refund Policy</h5>
          <p>
            As a SaaS provider, all products and services offered by Markops are
            non-tangible and irrevocable. Therefore, we do not issue refunds
            once an order is completed and delivered. We encourage you to
            carefully read the terms and understand our product before making
            any payment.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">1. Acceptance of Refund Policy</h5>
          <p>
            It is highly recommended to review the functionality and features of
            our product before placing an order to avoid refund requests.
          </p>
          <p>
            By ordering our products, you confirm that you have read and fully
            accept this refund policy.
          </p>
          <p>
            If you do not agree with this policy, please contact us to share
            your comments, suggestions, or concerns.
          </p>
          <p>
            For any request or general query, please allow up to 48 hours for a
            response.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">2. Rare Refund Circumstances</h5>
          <p>Refunds are only considered in the following cases:</p>
          <ul>
            <li>Errors occur due to a system bug.</li>
            <li>
              Users request a refund within 24 hours of their first payment.
            </li>
          </ul>
          <p>
            <strong>Notes:</strong>
          </p>
          <ul>
            <li>
              First payment refers to the initial payment for a new account; it
              does not include renewals, plan upgrades, or repurchases.
            </li>
            <li>
              Please provide thorough and supported reasons for the refund
              request.
            </li>
            <li>
              Refunds are not guaranteed for lack of usage or dissatisfaction.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">3. Subscription Terms</h5>
          <p>
            Your subscription begins as soon as your initial payment is
            processed.
          </p>
          <p>
            Subscriptions automatically renew at the end of each period until
            canceled.
          </p>
          <p>
            By subscribing, you authorize us to store your payment method and
            automatically charge it for each renewal period.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">4. Cancellation Terms</h5>
          <p>
            You may cancel your subscription at any time via Profile → My Plan →
            "Cancel Subscription" or by contacting our customer service before
            the next renewal.
          </p>
          <p>
            Cancellation is effective at the end of the current paid period. No
            refund will be issued for the current period, and you may continue
            using the subscription until the cancellation takes effect.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">5. Contact Us</h5>
          <p>For refund requests or questions, contact us:</p>
          <ul>
            <li>
              Email: <a href="mailto:support@markops.io">support@markops.io</a>
            </li>
            <li>Phone: +91 96734 58567</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Refund;
