import parse from "html-react-parser";
import { Link } from "react-router-dom";
import HomeShimmerEffect from "../Shimmer/HomeShimmerEffect";

const HeroBanner1 = ({
  subtitle,
  title,
  content,
  subContent,
  btnname,
  btnurl,
  btntwo,
  btn2url,
  cusimg,
  cusnumber,
  cuscontent,
  rating,
  ratingcon,
  img,
}) => {
  return (
    <section className="intro-section">
      <div className="intro-container-wrapper style1">
        <div className="container">
          <div className="intro-wrapper style1 fix">
            <div className="shape1">
              <img src="/assets/images/shape/introShape1_1.png" alt="shape" />
            </div>
            <div className="shape2">
              <img src="/assets/images/shape/introShape1_2.png" alt="shape" />
            </div>
            <div className="shape3 d-none d-xxl-block cir36">
              <img src="assets/images/shape/introShape1_3.png" alt="shape" />
            </div>
            <div className="shape4 d-none d-xxl-block cir36">
              <img src="/assets/images/shape/introShape1_4.png" alt="shape" />
            </div>
            <div className="shape5 d-none d-xxl-block cir36">
              <img src="/assets/images/shape/introShape1_5.png" alt="shape" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-xl-7 order-2 order-lg-1 mt-5 mt-lg-0">
                  <div className="intro-content">
                    <div className="intro-section-title">
                      <div className="intro-subtitle">
                        {parse(subtitle)}{" "}
                        <img
                          src="/assets/images/icon/fireIcon.svg"
                          alt="icon"
                        />
                      </div>
                      <h1
                        className="intro-title wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        {title}
                      </h1>
                      <p
                        className="intro-desc wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        {content}
                      </p>
                      <p
                        className="intro-desc wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        {subContent}
                      </p>
                    </div>
                    <div
                      className="btn-wrapper style1 wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <Link className="theme-btn" to={btnurl}>
                        {btnname}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_22)">
                            <path
                              d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_22">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                      <Link
                        className="theme-btn style2 wow fadeInUp"
                        data-wow-delay=".2s"
                        to={btn2url}
                      >
                        {btntwo}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_11_27)">
                            <path
                              d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                              fill="#282C32"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_11_27">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-5 order-1 order-lg-2 text-center text-lg-end mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="intro-thumb">
                    <div className="thumbShape1">
                      <img
                        src="/assets/images/shape/introThumbShape1_1.png"
                        alt="thumbShape"
                      />
                    </div>
                    {/* <div className="thumbShape2">
                      <img
                        src="/assets/images/shape/introThumbShape1_2.png"
                        alt="thumbShape"
                      />
                    </div> */}
                    <img
                      className="main-thumb img-custom-anim-right wow fadeInUp translate-middle img-fluid"
                      style={{
                        top: "30rem",
                        position: "absolute",
                        left: "48%",
                      }}
                      data-wow-delay=".4s"
                      src={img}
                      alt="thumb"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner1;
