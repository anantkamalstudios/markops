import React from "react";
import BreadCumb from "../Common/BreadCumb";

const Refund = () => {
  return (
    <section className="about-section section-padding fix">
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Refund Policy"
      ></BreadCumb>
      <div className="container">
        <h2 className="mb-4 fw-bold">Refund Policy</h2>

        <div className="mb-4">
          <h5 className="fw-semibold">Acceptance of Refund Policy</h5>
          <p>
            By subscribing to MarkOps, you agree to this Refund Policy. We aim
            to provide high-quality services and transparency in all
            transactions. Refunds are only considered in limited, exceptional
            cases.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">
            In Rare Cases, We ACCEPT Refund Requests For the Following Reasons
            ONLY:
          </h5>
          <ul className="ps-3">
            <li>You were charged more than once for the same subscription.</li>
            <li>
              You experienced a complete service outage (verified by our support
              team).
            </li>
            <li>You cancelled before renewal but were still billed.</li>
          </ul>
          <p className="text-muted mt-2">
            <strong>Note:</strong> Refunds are not offered for user
            dissatisfaction, unused time, or incorrect plan selection.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">Subscription Terms</h5>
          <p>
            All MarkOps subscriptions renew automatically unless cancelled
            before the billing date. You can manage or cancel your subscription
            from your account settings.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold">Cancellation Terms</h5>
          <p>
            Cancellation of your plan stops future billing. Access to premium
            features will remain active until the current billing cycle ends. No
            partial refunds are provided for unused time.
          </p>
        </div>

        <div>
          <h5 className="fw-semibold">Contact Us</h5>
          <p>
            If you believe you’re eligible for a refund or have questions,
            please contact us at <strong>support@markops.io</strong>. Our team
            will respond within 2–3 business days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Refund;
