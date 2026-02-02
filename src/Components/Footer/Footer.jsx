import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section position-relative">
      <div className="footer-widgets-wrapper style1 fix">
        <div className="shape1">
          <img src="/assets/images/shape/footerShape1_1.png" alt="shape" />
        </div>
        <div className="shape2">
          <img src="/assets/images/shape/footerShape1_2.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/assets/images/shape/footerShape1_3.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link to="/">
                    <img
                      src="/dark-logo.png"
                      alt="logo-img"
                      style={{
                        width: "240px",
                        height: "110px",
                      }}
                    />
                    {/* <h1>MarkOps</h1> */}
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    MarkOps is a unified marketing operations platform that
                    helps teams plan, execute, and analyze campaigns with
                    data-driven automation and complete visibility — all in one
                    place.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3> Product </h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/features">Features</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3> Legal </h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/refund">Refund Policy</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3> Contact </h3>
                </div>
                <ul className="list-area">
                  <li>
                    <a href="mailto:contact.tech@gmail.com">
                      contact.tech@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@markops.com">info@markops.com</a>
                  </li>
                  <li>
                    <a href="tel:21314234323543">+880 123 654 789 00</a>
                  </li>
                  <li>
                    <a href="tel:35234523452345">+001 6520 698 00</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style1">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © {new Date().getFullYear()} MarkOps. All rights reserved.
            </p>
            <ul className="social-links" data-wow-delay=".5s">
              <li>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
