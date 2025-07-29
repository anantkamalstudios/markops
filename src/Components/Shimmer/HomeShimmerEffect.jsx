import React from "react";
import { ShimmerContentBlock } from "shimmer-effects-react";

const HomeShimmerEffect = () => {
  return (
    <section className="intro-section">
      <div className="intro-container-wrapper style1 section-padding">
        <div className="container">
          <div className="intro-wrapper style1 fix">
            <div className="container">
              <div className="py-5 order-2 order-lg-1 mt-5 mt-lg-0">
                <ShimmerContentBlock
                  mode="dark"
                  rounded={1}
                  items={1}
                  itemsGap={20}
                  thumbnailHeight={300}
                  thumbnailWidth={300}
                  thumbnailRounded={1}
                  contentDetailsPosition="start"
                  contentDetailTextLines={8}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeShimmerEffect;
