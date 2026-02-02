import { useRef, useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";

const Faq1 = ({ faqData }) => {
  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(0);

  const mainContent = faqData?.find((item) => item.type === "main");
  const faqItems = faqData?.filter((item) => item.type === "point");

  const handleItemClick = (index) => {
    setOpenItemIndex(index === openItemIndex ? -1 : index);
  };

  const smallImage = `https://markopsadmin.markops.io/public/${mainContent.image1}`;
  const largeImage = `https://markopsadmin.markops.io/public/${mainContent.image2}`;

  return (
    <section className="faq-section section-padding fix">
      <div className="container">
        <div className="faq-wrapper style1">
          <div className="row gy-5 gy-xl-0 gx-60 d-flex align-items-start">
            {/* Left Section */}
            <div className="col-xl-6">
              <div className="faq-content style1">
                <div className="section-title">
                  <SectionTitle
                    SubTitle="FAQs"
                    Title={mainContent?.title || "Frequently Asked Questions"}
                  />
                  <p className="section-desc wow fadeInUp" data-wow-delay=".6s">
                    {mainContent?.paragraph}
                  </p>
                </div>

                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    {faqItems?.slice(0, 3).map((item, index) => (
                      <div
                        key={item.id}
                        className={`accordion-item mb-3 wow fadeInUp ${
                          index === openItemIndex ? "active" : ""
                        }`}
                        data-wow-delay={`.${index + 3}s`}
                      >
                        <h5
                          onClick={() => handleItemClick(index)}
                          className="accordion-header"
                        >
                          <button
                            className={`accordion-button ${
                              index === openItemIndex ? "" : "collapsed"
                            }`}
                            type="button"
                          >
                            {item.heading}
                          </button>
                        </h5>
                        <div
                          ref={accordionContentRef}
                          className={`accordion-collapse collapse ${
                            index === openItemIndex ? "show" : ""
                          }`}
                        >
                          <div className="accordion-body">{item.paragraph}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-xl-6">
              <div className="faq-thumb">
                {largeImage && (
                  <img
                    className="main-thumb wow fadeInUp"
                    data-wow-delay=".2s"
                    src={largeImage}
                    alt="thumb"
                  />
                )}
                {smallImage && (
                  <div className="absolute-thumb float-bob-x">
                    <img src={smallImage} alt="thumb" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq1;
