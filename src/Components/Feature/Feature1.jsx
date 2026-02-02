import SectionTitle from "../Common/SectionTitle";

const Feature1 = ({ featuresData }) => {
  if (!featuresData) {
    return <div>Loading features...</div>;
  }

  const heading = featuresData.find((item) => item.type === "heading");
  const allFeatures = featuresData.filter((item) => item.type === "feature");

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
            <div className="row gy-4">
              {allFeatures.map((item) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                  <div className="card feature-card shadow-sm h-100 border-0">
                    <div className="card-body d-flex flex-column  shadow-lg rounded-3">
                      <div className="d-flex align-items-center justify-content-center mb-2">
                        <img
                          src={
                            item.icon.startsWith("uploads/")
                              ? `https://markopsadmin.markops.io/public/${item.icon}`
                              : item.icon
                          }
                          alt={item.title}
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "contain",
                            marginRight: "10px",
                          }}
                        />
                        <h5 className="fw-bold mb-0">{item.title}</h5>
                      </div>

                      <div className="mt-2">
                        <div>
                          {item.description &&
                            item.description
                              .split(/[\r\n•]+/)
                              .map((point) => point.trim())
                              .filter((point) => point.length > 0)
                              .map((point, index) => (
                                <div
                                  key={index}
                                  className="mb-1"
                                  style={{ fontSize: "16px" }}
                                >
                                  <i
                                    className="fa-regular fa-circle-check me-2"
                                    style={{ color: "#875efd" }}
                                  ></i>
                                  {point}
                                </div>
                              ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
