import Slider from "react-slick";
import data from "../../Data/brand1.json";

const Brand1 = ({ client }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
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
    <div className="brand-slider-section section-padding fix">
      <div className="brand-slider-container-wrapper style1">
        <div className="container">
          <div className="brand-slider-wrapper style1">
            <h2
              className="single-section-title wow fadeInUp"
              data-wow-delay=".2s"
            >
              Millions of clients trust us.
            </h2>
            <div className="row">
              <div className="slider-area brandSliderOne">
                <div className="swiper gt-slider" id="brandSliderOne">
                  <div className="swiper-wrapper">
                    <Slider {...settings}>
                      {client.map((item) => (
                        <div key={item.id} className="swiper-slide">
                          <div className="brand-logo">
                            <img
                              src={`https://markopsadmin.markops.io/public/uploads/clients/${item.image}`}
                              alt="Client Logo"
                              style={{
                                filter: "grayscale(100%)",
                                opacity: 0.8,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand1;
