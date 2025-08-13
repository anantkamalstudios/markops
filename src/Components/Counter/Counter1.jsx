import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Counter1 = ({ counters }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="counter-section fix">
      <div className="counter-container-wrapper style1">
        <div className="container">
          <div
            className="counter-wrapper style1 counter-section-padding"
            data-background="/assets/images/shape/counterShape1_1.png"
          >
            <div className="shape"></div>
            <div className="container">
              <div className="row gy-5">
                {counters?.map((item, index) => (
                  <div
                    className="col-xl-3 col-md-6 d-flex justify-content-center"
                    key={item.id}
                  >
                    <div
                      className="counter-box style1 wow fadeInUp"
                      data-wow-delay={`.${index + 2}s`}
                    >
                      <div className="counter">
                        <span className="counter-number">
                          {item.value.replace(/[+]+$/, "")}
                        </span>
                        {item.value.includes("+") && (
                          <span className="plus">+</span>
                        )}
                      </div>
                      <p className="text">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter1;
