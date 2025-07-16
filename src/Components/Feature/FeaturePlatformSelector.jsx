import React, { useState } from "react";
import FeatureSearchBar from "./FeatureSearchBar";
import FeatureFilterSection from "./FeatureFilterSection";

const FeaturePlatformSelector = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="about-section section-padding fix mt-4">
      <div className="px-5 bg-white p-3 pt-3 pb-2 rounded-2 shadow">
        <div className="mt-4">
          {/* Position Selector Wrap */}
          <div className="d-flex justify-content-between mb-3">
            <div className="position-selector-wrap">
              <div
                className={`position-selector-item ${
                  activeTab === "1" ? "active" : ""
                }`}
                onClick={() => handleTabClick("1")}
              >
                Page Info
              </div>
              <div
                className={`position-selector-item ${
                  activeTab === "2" ? "active" : ""
                }`}
                onClick={() => handleTabClick("2")}
              >
                Promoted Products
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "1" && (
              <div>
                {/* <h3>Page Info Content</h3> */}
                <FeatureSearchBar
                  placeholder={"Enter keywords/Page Name/Page ID/Page Account"}
                />
              </div>
            )}
            {activeTab === "2" && (
              <div className="">
                {/* <h3>Promoted Products Content</h3> */}
                <FeatureSearchBar
                  placeholder={
                    "Enter keywords/Promote App Package Name/Promote App Name"
                  }
                />
              </div>
            )}
          </div>
        </div>
        <div>
          <FeatureFilterSection />
        </div>
        <hr />
      </div>
      <div className="px-5 bg-white p-3 pt-3 pb-2 rounded-2 shadow"></div>
    </section>
  );
};

export default FeaturePlatformSelector;
