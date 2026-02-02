import About4 from "../Components/About/About4";
import Team1 from "../Components/Team/Team1";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamData = [
    {
      img: "/assets/images/team/teamThumb1_1.png",
      title: "Jane Doe",
      desc: "CEO & Co-Founder",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      pinterest: "#",
    },
    {
      img: "/assets/images/team/teamThumb1_2.png",
      title: "John Smith",
      desc: "CTO",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      pinterest: "#",
    },
    {
      img: "/assets/images/team/teamThumb1_3.png",
      title: "Sarah Lee",
      desc: "Head of Marketing",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      pinterest: "#",
    },
  ];

  return (
    <div>
      {/* Hero Mission Statement */}
      <About4
        img1="/assets/images/about/about-image.png"
        img2="/assets/images/about/aboutThumb1_2.png"
        subtitle="Our Mission"
        title="Marketing Ops, Evolved"
        content="At MarkOps, we believe marketing should be simple and measurable. Founded by veterans of marketing and tech, our mission is to marry technology, data, and creativity so that teams can grow smarter."
        FeatureList={[
          "Technology, Data, and Creativity united.",
          "Simple and measurable marketing.",
          "Helping teams grow smarter.",
        ]}
        btnname="Join our Newsletter"
        btnurl="/contact"
      />

      {/* Company Story / Values */}
      <section className="story-section section-padding fix bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-title mb-5">
                <span className="subtitle wow fadeInUp">Our Story</span>
                <h2 className="title wow fadeInUp" data-wow-delay=".2s">
                  Why MarkOps Exists
                </h2>
                <p
                  className="text-center mt-3 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  MarkOps was created when our founders realized that marketers
                  were drowning in tools and data. We set out to build one
                  platform that connects everything, from budgets to campaigns
                  to CRM.
                </p>
              </div>
            </div>
          </div>

          {/* Simple Timeline */}
          <div className="row mt-5 position-relative">
            <div className="col-lg-10 mx-auto">
              <div
                className="timeline-wrapper d-flex flex-column flex-md-row justify-content-between align-items-center position-relative"
                style={{ gap: "2rem" }}
              >
                {/* Connecting Line (Desktop) */}
                <div
                  className="d-none d-md-block position-absolute top-50 start-0 w-100 border-top border-2 border-primary"
                  style={{ zIndex: 0, opacity: 0.3 }}
                ></div>

                {[
                  { year: "2020", title: "Founded", icon: "bi-lightbulb" },
                  {
                    year: "2021",
                    title: "First Product",
                    icon: "bi-code-slash",
                  },
                  { year: "2023", title: "Global Scale", icon: "bi-globe" },
                  { year: "2025", title: "Market Leader", icon: "bi-trophy" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="timeline-item text-center bg-white p-4 rounded shadow-sm position-relative"
                    style={{ zIndex: 1, minWidth: "180px" }}
                  >
                    <div className="icon-box mb-3 text-primary fs-3">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h4 className="h5 fw-bold mb-1">{item.year}</h4>
                    <p className="mb-0 text-muted">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <div className="section-padding pb-0">
        <div className="container text-center mb-4">
          <div className="subtitle wow fadeInUp">Meet the Team</div>
          <h2 className="title wow fadeInUp" data-wow-delay=".2s">
            The Minds Behind MarkOps
          </h2>
        </div>
        <Team1 data={teamData} />
      </div> */}

      {/* Culture & Careers / Secondary CTA */}
      <section className="cta-section section-padding fix">
        <div className="container">
          <div className="cta-wrapper style1 bg-theme rounded-4 p-5 text-center text-white position-relative overflow-hidden">
            <div className="position-relative z-2">
              <h2 className="text-white mb-4 wow fadeInUp">Join Our Journey</h2>
              <p
                className="text-white opacity-75 mb-4 mx-auto wow fadeInUp"
                data-wow-delay=".2s"
                style={{ maxWidth: "600px" }}
              >
                We are always looking for passionate individuals to join our
                team. Check out our open positions or subscribe to our
                newsletter to stay updated.
              </p>
              <div
                className="d-flex justify-content-center gap-3 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <Link
                  to="/contact"
                  className="theme-btn bg-white text-primary border-0"
                >
                  View Careers
                </Link>
                <Link
                  to="/blog"
                  className="theme-btn style2 border-white text-white hover-white"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
            {/* Decorative circles */}
            <div
              className="circle-shape1 position-absolute top-0 start-0 translate-middle rounded-circle bg-white opacity-10 d-none d-md-block"
              style={{ width: "300px", height: "300px" }}
            ></div>
            <div
              className="circle-shape2 position-absolute bottom-0 end-0 translate-middle rounded-circle bg-white opacity-10 d-none d-md-block"
              style={{ width: "150px", height: "150px" }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
