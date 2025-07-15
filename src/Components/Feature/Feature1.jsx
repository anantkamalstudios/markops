import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";

const Feature1 = () => {
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
              Title="Powerful Marketing Tool for Individuals, Startups, and Enterprises"
            />
          </div>
          <div className="wcu-wrapper style1">
            <div className="row gy-5 d-flex justify-content-center">
              {/* Left Column */}
              <div className="col-xl-4 d-flex justify-content-center">
                <div className="wcu-content">
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_1.svg"
                    title="High Usability"
                    content="Our intuitive UI makes campaign creation and lead tracking effortless for everyone — no learning curve required."
                  />
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_2.svg"
                    title="Smart Notifications"
                    content="Get real-time alerts on campaign performance, lead activity, and optimization opportunities."
                  />
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_3.svg"
                    title="Integrated Data Tools"
                    content="Easily merge data from multiple channels for clearer insights and smarter decision-making."
                  />
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
                      src="/assets/images/wcu/about-us-trans.png"
                      alt="thumb"
                    />
                  </div>
                  <div className="shape">
                    <img
                      src="/assets/images/shape/wcuThumbShape1_1.png"
                      alt="shape"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-xl-4 d-flex justify-content-center justify-content-xl-end">
                <div className="wcu-content">
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_4.svg"
                    title="Live Support"
                    content="Access 24/7 chat assistance to solve your issues and optimize your campaigns quickly."
                  />
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_5.svg"
                    title="Social Integration"
                    content="Easily connect to Facebook, Google, TikTok, and more for multi-platform campaign management."
                  />
                  <FeatureCard
                    img="/assets/images/icon/wcuIcon1_6.svg"
                    title="Custom Workflows"
                    content="Set up automation and shortcuts tailored to your marketing process for faster execution."
                  />
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
