import Slider from "react-slick";
// import data from '../../Data/testimonial1.json';
import data from "../../Data/testimonialRv.json";
import SectionTitle from "../Common/SectionTitle";

const Testimonial = ({ td }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    draggable: true,
    swipe: true,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container-wrapper style1">
        <div className="container">
          <div className="testimonial-wrapper style1 section-padding fix">
            {/* <div className="shape1">
              <img
                src="/assets/images/shape/testimonialShape1_1.png"
                alt="shape"
              />
            </div>
            <div className="shape2">
              <img
                src="/assets/images/shape/testimonialShape1_2.png"
                alt="shape"
              />
            </div> */}
            <div className="container">
              <div className="section-title text-center mxw-685 mx-auto">
                <SectionTitle
                  SubTitle="Testimonial"
                  Title="What our clients say?"
                ></SectionTitle>
              </div>
              <div className="slider-area testimonialSliderOne">
                <div className="swiper gt-slider" id="testimonialSliderOne">
                  <div className="swiper-wrapper cs_slider_gap_301">
                    <Slider {...settings}>
                      {td.map((item, index) => (
                        <div key={index} className="swiper-slide">
                          <div className="testimonial-card style1">
                            <div className="testimonial-header">
                              <div className="profile-thumb">
                                <img
                                  src={`https://markopsadmin.markops.io/public/${item.image}`}
                                  alt="thumb"
                                  style={{
                                    width: "65px",
                                    height: "65px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div className="content">
                                <h5>{item.name}</h5>
                                <p className="text">{item.designation}</p>
                              </div>
                            </div>
                            <div className="testimonial-body">
                              <ul className="star-wrapper style1">
                                {[...Array(item.rating)].map((_, i) => (
                                  <li key={i}>
                                    <img
                                      src="/assets/images/icon/starIcon1_1.svg"
                                      alt="star"
                                    />
                                  </li>
                                ))}
                              </ul>
                              <p className="desc">{item.paragraph}</p>
                            </div>
                            <div className="quote-icon">
                              <img
                                src="/assets/images/icon/quoteIcon.svg"
                                alt="quote"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="slider-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
