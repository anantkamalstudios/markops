import React from "react";
import { Modal, Button } from "react-bootstrap";

const AdDetailModal = ({ show, onHide, data }) => {
  if (!data) return null;

  return (
    <Modal show={show} onHide={onHide} size="xl" centered>
      <Modal.Body>
        <div className="row">
          {/* LEFT SIDE */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div
              className="position-relative mb-3"
              style={{ paddingBottom: "100%", backgroundColor: "#f8f9fa" }}
            >
              <h6 className="position-absolute top-0 start-0 m-2 text-black z-2">
                Acquista Ciclismo su Giro Sport Design
              </h6>

              <div
                className="position-absolute top-0 end-0 m-2 text-warning z-2"
                style={{ zIndex: 2 }}
              >
                <i className="fa-regular fa-star"></i>
              </div>

              <img
                src={data.image}
                alt="Ad Visual"
                className="position-absolute w-100 h-100 object-fit-cover rounded z-1"
                style={{ zIndex: 1 }}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="fw-semibold">{data.heading}</div>
              <div>
                <i className="bi bi-lock-fill me-1"></i>
                <a href="#" className="text-decoration-none">
                  Learn More
                </a>
              </div>
            </div>
            <div className="fw-semibold mb-2">Similar</div>
            <div className="d-flex gap-2 overflow-auto">
              {data.similar?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded"
                  style={{ width: "80px", height: "80px" }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6">
            <table className="table table-bordered table-sm text-center align-middle mb-3">
              <thead className="table-light">
                <tr>
                  <th>Impression</th>
                  <th>Duration</th>
                  <th>Popularity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.impression}</td>
                  <td>{data.duration}</td>
                  <td>{data.popularity}</td>
                </tr>
              </tbody>
            </table>

            <ul className="list-group list-group-flush small mb-3">
              <li className="list-group-item d-flex justify-content-between">
                <strong>Duration:</strong>
                <span>{data.dateRange}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>Network:</strong>
                <span>{data.network}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>Country:</strong>
                <span>{data.country}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>Language:</strong>
                <span>{data.language}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <strong>Size:</strong>
                <span>{data.size}</span>
              </li>
              <li className="list-group-item small">
                <strong>Disclaimer:</strong>
                <div className="text-muted">{data.disclaimer}</div>
              </li>
            </ul>

            <div className="d-flex justify-content-end gap-2">
              <Button variant="primary">Download</Button>
              <Button variant="outline-secondary">Details</Button>
              <Button variant="outline-dark">Copy Ideas</Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AdDetailModal;
