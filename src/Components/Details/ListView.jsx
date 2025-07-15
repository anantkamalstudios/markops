import React from "react";

const ListView = ({ ads, onClick }) => {
  return (
    <div>
      <table className="table table-bordered table-hover align-middle text-center mt-5">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Creative</th>
            <th>Advertiser</th>
            <th>Networks</th>
            <th>Impression</th>
            <th>Popularity</th>
            <th>Engagement</th>
            <th>Duration</th>
            <th>Collect</th>
          </tr>
        </thead>
        <tbody>
          {ads.map((ad, index) => (
            <tr
              key={ad.id}
              onClick={() => onClick(ad)}
              style={{ cursor: "pointer" }}
            >
              <td>{index + 1}</td>

              {/* Creative */}
              <td>
                <div
                  className="position-relative"
                  style={{ width: 100, height: 100 }}
                >
                  {/* Image */}
                  <img
                    src={ad.image}
                    alt="Creative"
                    className="img-fluid w-100 h-100 object-fit-cover rounded"
                    style={{ zIndex: 1 }}
                  />

                  {/* Top Left Icon */}
                  <div
                    className="position-absolute top-0 start-0 text-white m-1 z-2"
                    style={{ zIndex: 2 }}
                  >
                    <i className="bi bi-image"></i>
                  </div>

                  {/* Bottom Left Badges */}
                  <div
                    className="position-absolute bottom-0 start-0 text-white small m-1 gap-1 z-2"
                    style={{ zIndex: 2 }}
                  >
                    <div
                      className="bg-dark bg-opacity-50 px-1 rounded mb-1"
                      style={{ fontSize: "12px" }}
                    >
                      Re-delivery
                    </div>
                    <div
                      className="bg-dark bg-opacity-50 px-1 rounded"
                      style={{ fontSize: "12px" }}
                    >
                      W2A
                    </div>
                  </div>
                </div>
              </td>

              {/* Advertiser */}
              <td>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={ad.logo}
                    alt="Advertiser"
                    className="rounded"
                    style={{ width: 48, height: 48, objectFit: "cover" }}
                  />
                  <div className="text-start">
                    <div className="fw-semibold text-truncate">
                      {ad.advertiser}
                    </div>
                    <div className="text-muted small text-truncate">
                      {ad.domain}
                    </div>
                  </div>
                  <div className="ms-auto">
                    <i className="bi bi-three-dots-vertical text-secondary"></i>
                  </div>
                </div>
              </td>

              {/* Networks */}
              <td>
                <i className="bi bi-facebook text-primary fs-5"></i>
              </td>

              {/* Impression */}
              <td>{ad.impression}</td>

              {/* Popularity */}
              <td>{ad.popularity}</td>

              {/* Engagement */}
              <td>{ad.engagement || "N/A"}</td>

              {/* Duration */}
              <td>
                <div>
                  <strong>{ad.duration}</strong>
                  <div className="text-muted small">{ad.dateRange}</div>
                </div>
              </td>

              {/* Collect */}
              <td>
                <i className="bi bi-star-fill text-warning fs-5"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
