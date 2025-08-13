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
          <h2 className="title">Choose The Plans That Suits You!</h2>
          <p className="text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
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
                  />
                ))}
              </div>
            </div>
          </div>

          {/* <div className="tab-content" id="pills-tabContent">
            <div
              className={`tab-pane ${isActive === "monthly" ? "active" : ""}`}
              id="pills-monthly"
              role="tabpanel"
              aria-labelledby="pills-monthly-tab"
            >
              <div className="row gy-5">
                <PricingCard
                  name="Basic Plan"
                  price="$14.99"
                  monthly="Per Month"
                  content="There are many variations of passages of Lorem Ipsum available, but the majority"
                  FeatureList={[
                    "7 days free access",
                    "Maximum of 5 collaborators",
                    "Cloud backup 1GB",
                    "Maximum 50 tasks per week",
                    "Updates for 1 Year",
                  ]}
                  btnname="Get You Free plan"
                  btnurl="/pricing"
                ></PricingCard>

                <PricingCard
                  name="Standard Plan"
                  price="$19.99"
                  monthly="Per Month"
                  content="There are many variations of passages of Lorem Ipsum available, but the majority"
                  FeatureList={[
                    "7 days free access",
                    "Maximum of 5 collaborators",
                    "Cloud backup 1GB",
                    "Maximum 50 tasks per week",
                    "Updates for 1 Year",
                  ]}
                  btnname="Get You Free plan"
                  btnurl="/pricing"
                ></PricingCard>

                <PricingCard
                  name="Premium Plan Plan"
                  price="$24.99"
                  monthly="Per Month"
                  content="There are many variations of passages of Lorem Ipsum available, but the majority"
                  FeatureList={[
                    "7 days free access",
                    "Maximum of 5 collaborators",
                    "Cloud backup 1GB",
                    "Maximum 50 tasks per week",
                    "Updates for 1 Year",
                  ]}
                  btnname="Get You Free plan"
                  btnurl="/pricing"
                ></PricingCard>
              </div>
            </div>
            <div
              className={`tab-pane ${isActive === "yearly" ? "active" : ""}`}
              id="pills-yearly"
              role="tabpanel"
              aria-labelledby="pills-yearly-tab"
            >
              <div className="row gy-5">
                <PricingCard
                  name="Basic Plan"
                  price="$34.99"
                  monthly="Per Month"
                  content="There are many variations of passages of Lorem Ipsum available, but the majority"
                  FeatureList={[
                    "7 days free access",
                    "Maximum of 5 collaborators",
                    "Cloud backup 1GB",
                    "Maximum 50 tasks per week",
                    "Updates for 1 Year",
                  ]}
                  btnname="Get You Free plan"
                  btnurl="/pricing"
                ></PricingCard>

                <PricingCard
                  name="Standard Plan"
                  price="$64.99"
                  monthly="Per Month"
                  content="There are many variations of passages of Lorem Ipsum available, but the majority"
                  FeatureList={[
                    "7 days free access",
                    "Maximum of 5 collaborators",
                    "Cloud backup 1GB",
                    "Maximum 50 tasks per week",
                    "Updates for 1 Year",
                  ]}
                  btnname="Get You Free plan"
                  btnurl="/pricing"
                ></PricingCard>

                <PricingCard
                  name="Premium Plan Plan"
                  price="$84.99"
                  monthly="Per Month"
                  content="There are many variations of passages of Lorem Ipsum available, but the majority"
                  FeatureList={[
                    "7 days free access",
                    "Maximum of 5 collaborators",
                    "Cloud backup 1GB",
                    "Maximum 50 tasks per week",
                    "Updates for 1 Year",
                  ]}
                  btnname="Get You Free plan"
                  btnurl="/pricing"
                ></PricingCard>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Pricing1;
