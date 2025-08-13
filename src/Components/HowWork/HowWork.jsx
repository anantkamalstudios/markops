import { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "../Common/SectionTitle";

const HowWork = ({ howItWorkData }) => {
  if (!howItWorkData) {
    return <div>Loading...</div>;
  }

  const headingItem = howItWorkData.find((item) => item.type === "heading");
  const stepItems = howItWorkData
    .filter((item) => item.type === "step")
    .sort((a, b) => a.position - b.position);

  return (
    <section className="work-process-section section-padding fix">
      <div className="work-process-container-wrapper style1">
        <div className="container">
          <div className="section-title text-center mxw-565 mx-auto">
            <SectionTitle
              SubTitle="How It Work"
              Title={headingItem?.title || "Loading..."}
            />
          </div>
          <div className="work-process-wrapper style1">
            <div className="shape">
              <img
                src="/assets/images/shape/workProcessShape1_1.png"
                alt="shape"
              />
            </div>
            <div className="row">
              {stepItems.map((step, index) => (
                <div key={step.id} className="col-xl-4">
                  <div
                    className={`work-process-box style1 ${
                      index === 1 ? "child2" : ""
                    } wow fadeInUp`}
                    data-wow-delay={`.${(index + 1) * 2}s`}
                  >
                    <div className="step">STEP - 0{step.position}</div>
                    <div className="title">{step.title}</div>
                    <div className="text">{step.paragraph}</div>
                  </div>
                </div>
              ))}
              {stepItems.length === 0 && (
                <div className="text-center w-100 text-danger">
                  No data available
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowWork;
