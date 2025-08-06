import { useEffect, useState } from "react";
import axios from "axios";
import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";
const Feature1 = ({ featuresData }) => {
  if (!featuresData) {
    return <div>Loading features...</div>;
  }

  const heading = featuresData.find((item) => item.type === "heading");
  const features = featuresData.filter((item) => item.type === "feature");

  const leftFeatures = features.slice(0, 3);
  const rightFeatures = features.slice(3, 6);

  return (
    <section className="wcu-section section-padding fix">
      <div className="wcu-container-wrapper style1">
        <div className="container">
          <div
            className="section-title text-center mxw-685 mx-auto wow fadeInUp"
            data-wow-delay=".2s"
          >
            <SectionTitle
              SubTitle="Why Use Our App"
              Title={
                heading?.title ||
                "Powerful Marketing Tool for Individuals, Startups, and Enterprises"
              }
            />
          </div>
          <div className="wcu-wrapper style1">
            <div className="row gy-5 d-flex justify-content-center">
              {/* Left Column */}
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-content">
                  {leftFeatures.map((item) => (
                    <FeatureCard
                      key={item.id}
                      img={
                        item.icon.startsWith("uploads/")
                          ? `https://teal-sparrow-187679.hostingersite.com/public/${item.icon}`
                          : "/assets/images/icon/default.svg"
                      }
                      title={item.title}
                      content={
                        <div className="feature-card-description">
                          {item.description
                            .split("•")
                            .map((point) => point.trim())
                            .filter((point) => point.length > 0)
                            .map((point, index) => (
                              <div key={index} className="mb-1">
                                • {point}
                              </div>
                            ))}
                        </div>
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Center Image */}
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                  <div
                    className="main-thumb wow bounceInUp"
                    data-wow-delay=".6s"
                  >
                    <img
                      src={
                        heading?.image
                          ? `https://teal-sparrow-187679.hostingersite.com/public/${heading.image}`
                          : "/assets/images/wcu/vertical.jpg"
                      }
                      alt="thumb"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                <div className="wcu-content">
                  {rightFeatures.map((item) => (
                    <FeatureCard
                      key={item.id}
                      img={
                        item.icon.startsWith("uploads/")
                          ? `https://teal-sparrow-187679.hostingersite.com/public/${item.icon}`
                          : "/assets/images/icon/default.svg"
                      }
                      title={item.title}
                      content={
                        <div className="feature-card-description">
                          {item.description
                            .split("•")
                            .map((point) => point.trim())
                            .filter((point) => point.length > 0)
                            .map((point, index) => (
                              <div key={index} className="mb-1">
                                • {point}
                              </div>
                            ))}
                        </div>
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
