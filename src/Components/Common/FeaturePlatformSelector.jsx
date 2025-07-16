import React, { useState } from "react";
import FeatureSearchBar from "../Feature/FeatureSearchBar";
import FeatureFilterSection from "../Feature/FeatureFilterSection";
import FeatureDataTable from "../Feature/FeatureDataTable";

const FeaturePlatformSelector = () => {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const data = [
    {
      page: {
        logo: "https://sp2cdn-logo-global.zingfront.com/sp_opera/7cf06141d587342a037a3516a4aaa433.jpg?x-oss-process=image/resize,h_100, lfit",
        title: "Facebook Page 1",
        time: "2025-07-15",
      },
      likes: "5.5M",
      popularity: "78M",
      ads: "1,111,111",
      top_country: [
        "https://media.istockphoto.com/id/1635537217/vector/indian-flag-tricolour-flag-of-india-in-rectangular-standard-shape-tricolor-tri-color-vector.jpg?s=612x612&w=0&k=20&c=M8w-39infbC-Whoa9-kUYh-SGnu5fpFIACQM_Q6DwFc=",
        "https://media.istockphoto.com/id/1635537217/vector/indian-flag-tricolour-flag-of-india-in-rectangular-standard-shape-tricolor-tri-color-vector.jpg?s=612x612&w=0&k=20&c=M8w-39infbC-Whoa9-kUYh-SGnu5fpFIACQM_Q6DwFc=",
      ],
      latest_ads: "2025-07-15",
      day_treads: [
        <canvas
          data-zr-dom-id="zr_0"
          width="185"
          height="66"
          style="position: absolute; left: 0px; top: 0px; width: 185px; height: 66px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"
        ></canvas>,
      ],
      promoted_product: {
        logo: "https://appcdn-global.zingfront.com/imgs/98b6e1b31dce741b0edd59dc6823afc7.jpg?x-oss-process=image/resize,h_100, lfit",
        title: "Product A",
      },
      subscribe: true,
    },
    {
      page: {
        logo: "https://sp2cdn-logo-global.zingfront.com/sp_opera/7cf06141d587342a037a3516a4aaa433.jpg?x-oss-process=image/resize,h_100, lfit",
        title: "Facebook Page 1",
        time: "2025-07-15",
      },
      likes: "1.5M",
      popularity: "18M",
      ads: "11,111",
      top_country: [
        "https://media.istockphoto.com/id/1635537217/vector/indian-flag-tricolour-flag-of-india-in-rectangular-standard-shape-tricolor-tri-color-vector.jpg?s=612x612&w=0&k=20&c=M8w-39infbC-Whoa9-kUYh-SGnu5fpFIACQM_Q6DwFc=",
        "https://media.istockphoto.com/id/1635537217/vector/indian-flag-tricolour-flag-of-india-in-rectangular-standard-shape-tricolor-tri-color-vector.jpg?s=612x612&w=0&k=20&c=M8w-39infbC-Whoa9-kUYh-SGnu5fpFIACQM_Q6DwFc=",
      ],
      latest_ads: "2025-07-01",
      day_treads: [
        <canvas
          data-zr-dom-id="zr_0"
          width="185"
          height="66"
          style="position: absolute; left: 0px; top: 0px; width: 185px; height: 66px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"
        ></canvas>,
      ],
      promoted_product: {
        logo: "https://appcdn-global.zingfront.com/imgs/98b6e1b31dce741b0edd59dc6823afc7.jpg?x-oss-process=image/resize,h_100, lfit",
        title: "Product A",
      },
      subscribe: true,
    },
  ];

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
      </div>
      <div className="px-5 bg-white p-3 pt-3 pb-2 rounded-2 shadow">
        <FeatureDataTable data={data} />
      </div>
    </section>
  );
};

export default FeaturePlatformSelector;
