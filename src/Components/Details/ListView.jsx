import React from "react";
import DataTable from "react-data-table-component";

const ListView = ({ ads, onClick }) => {
  const columns = [
    {
      name: "#",
      selector: (_, index) => index + 1,
      width: "60px",
    },
    {
      name: "Creative",
      cell: (ad) => (
        <div className="creative-container">
          <img src={ad.image} alt="Creative" className="creative-img" />
          <div className="creative-icon">
            <i className="bi bi-image"></i>
          </div>
          <div className="creative-badges">
            <span className="badge">Re-delivery</span>
            <span className="badge">W2A</span>
          </div>
        </div>
      ),
    },
    {
      name: "Advertiser",
      cell: (ad) => (
        <div className="d-flex align-items-center gap-2 w-100">
          <img
            src={ad.logo}
            alt="Advertiser Logo"
            className="advertiser-logo"
          />
          <div className="flex-grow-1">
            <div className="fw-semibold text-truncate">{ad.advertiser}</div>
            <div className="text-muted small text-truncate">{ad.domain}</div>
          </div>
          <i className="bi bi-three-dots-vertical text-secondary ms-auto"></i>
        </div>
      ),
      grow: 2,
    },
    {
      name: "Networks",
      cell: () => <i className="bi bi-facebook text-primary fs-5"></i>,
    },
    {
      name: "Impression",
      selector: (ad) => ad.impression,
    },
    {
      name: "Popularity",
      selector: (ad) => ad.popularity,
    },
    {
      name: "Engagement",
      selector: (ad) => ad.engagement || "N/A",
    },
    {
      name: "Duration",
      cell: (ad) => (
        <div>
          <strong>{ad.duration}</strong>
          <div className="text-muted small">{ad.dateRange}</div>
        </div>
      ),
    },
    {
      name: "Collect",
      cell: () => <i className="bi bi-star-fill text-warning fs-5"></i>,
    },
  ];

  return (
    <div className="datatable-wrapper mt-4">
      <DataTable
        columns={columns}
        data={ads}
        highlightOnHover
        pointerOnHover
        onRowClicked={onClick}
        responsive
        striped
        className="custom-datatable"
      />
    </div>
  );
};

export default ListView;
