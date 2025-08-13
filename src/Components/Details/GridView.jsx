import React, { useState } from "react";
import AdDetailModal from "./AdDetailModal";

const GridView = ({ ads, onClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);

  const handleCardClick = (ad) => {
    setSelectedAd(ad);
    setShowModal(true);
  };

  return (
    <>
      {ads.map((ad) => (
        <div className="col" key={ad.id} onClick={() => handleCardClick(ad)}>
          <div
            className="card border-0 h-100 shadow-sm"
            style={{ cursor: "pointer", transition: "box-shadow 0.3s" }}
            onMouseEnter={(e) => e.currentTarget.classList.add("shadow")}
            onMouseLeave={(e) => e.currentTarget.classList.remove("shadow")}
          >
            {/* Header */}
            <div
              className="card-body d-flex align-items-center gap-2 py-2 px-3"
              style={{ height: "60px" }}
            >
              <div style={{ width: 46, height: 46, flexShrink: 0 }}>
                <img
                  src={ad.avatar}
                  className="rounded-circle img-fluid"
                  alt="Avatar"
                />
              </div>
              <div className="flex-grow-1 position-relative">
                <div className="fw-semibold text-truncate">{ad.name}</div>
                <button className="btn btn-light btn-sm rounded-circle position-absolute top-0 end-0">
                  <i className="bi bi-three-dots"></i>
                </button>
                <div className="d-flex align-items-center gap-1 mt-1 text-nowrap text-truncate">
                  <i className="bi bi-display text-primary"></i>
                  <i className="bi bi-facebook"></i>
                  <a
                    href="//gi***om"
                    className="ms-1 text-decoration-none text-dark text-truncate"
                    style={{ maxWidth: "100px" }}
                  >
                    gi***om
                  </a>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="px-3 text-muted text-truncate small mb-2">
              {ad.title}
            </div>
            <div className="position-relative" style={{ paddingBottom: "60%" }}>
              <div className="position-absolute top-0 end-0 m-2 text-white">
                <i className="bi bi-star"></i>
              </div>
              <div className="position-absolute top-0 start-0 m-2 text-white">
                <i className="bi bi-image"></i>
              </div>
              <div className="position-absolute bottom-0 start-0 m-2 text-white small">
                <div className="bg-dark bg-opacity-50 px-1 rounded">
                  Re-delivery
                </div>
                <div className="bg-dark bg-opacity-50 px-1 rounded mt-1">
                  W2A
                </div>
              </div>
              <img
                src={ad.image}
                className="position-absolute w-100 h-100 object-fit-cover"
                alt="Ad Visual"
              />
            </div>

            {/* Description */}
            <div className="px-3 pt-2 pb-3">
              <div className="d-flex justify-content-between small text-muted mb-1">
                <span></span>
                <span>{ad.dateRange}</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div className="flex-grow-1 overflow-hidden">
                  <div className="fw-semibold text-truncate small">
                    {ad.heading}
                  </div>
                  <div className="text-truncate text-muted small">
                    {ad.desc}
                  </div>
                </div>
                <div
                  className="badge bg-light text-dark px-2 py-1"
                  style={{ maxWidth: 100 }}
                >
                  Shop Now
                </div>
              </div>
            </div>

            {/* Footer Metrics */}
            <div className="bg-light px-3 py-2 border-top">
              <div className="row text-muted text-center small">
                <div className="col">
                  <div className="fw-semibold">{ad.popularity}</div>
                  <div>Popularity</div>
                </div>
                <div className="col">
                  <div className="fw-semibold">{ad.impression}</div>
                  <div>Impression</div>
                </div>
                <div className="col">
                  <div className="fw-semibold">{ad.duration}</div>
                  <div>Duration</div>
                </div>
                <div className="col">
                  <div className="fw-semibold">2025-07-15</div>
                  <div className="d-none d-md-block">Last Seen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <AdDetailModal
        show={showModal}
        onHide={() => setShowModal(false)}
        data={selectedAd}
      />
    </>
  );
};

export default GridView;
