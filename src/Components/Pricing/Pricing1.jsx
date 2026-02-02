import { useState } from "react";
import PricingCard from "../Card/PricingCard";
import { parseHTMLList } from "../../utils/utils";

const Pricing1 = ({ pricing }) => {
  const [isActive, setIsActive] = useState("monthly");

  return (
    <section className="pricing-section section-padding fix">
      <div className="container">
        <div className="section-title text-center mxw-700 mx-auto">
          <div className="subtitle">
            Our Pricing{" "}
            <img src="/assets/images/icon/fireIcon.svg" alt="icon" />
          </div>
          <h2 className="title">Simple, Transparent Pricing</h2>
          <p className="text">No hidden fees. Annual plans get 20% off.</p>
        </div>
        <div className="pricing-wrapper style1">
          <div className="tab-section d-flex justify-content-center align-items-center">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li
                className="nav-item"
                onClick={() => setIsActive("monthly")}
                role="presentation"
              >
                <button
                  className={`nav-link ${
                    isActive === "monthly" ? "active" : ""
                  }`}
                  type="button"
                  role="tab"
                >
                  Monthly
                </button>
              </li>
              <li
                className="nav-item"
                onClick={() => setIsActive("yearly")}
                role="presentation"
              >
                <button
                  className={`nav-link ${
                    isActive === "yearly" ? "active" : ""
                  }`}
                  type="button"
                  role="tab"
                >
                  Yearly
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content" id="pills-tabContent">
            <div
              className={`tab-pane active`}
              id="pills-pricing"
              role="tabpanel"
            >
              <div className="row gy-5">
                {pricing.map((plan) => (
                  <PricingCard
                    key={plan.id}
                    name={plan.plan_name}
                    price={
                      isActive === "monthly"
                        ? `$${plan.monthly_price}`
                        : `$${plan.yearly_price}`
                    }
                    monthly={isActive === "monthly" ? "Per Month" : "Per Year"}
                    content={plan.description}
                    FeatureList={parseHTMLList(plan.features)}
                    btnname="Get Your Free Plan"
                    btnurl="/pricing"
                    popular={plan.popular}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing1;
