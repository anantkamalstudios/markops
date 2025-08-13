import React from "react";
import DataTable from "react-data-table-component";

const FeatureDataTable = ({ data }) => {
  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      width: "60px",
    },
    {
      name: "Page",
      cell: (row) => (
        <div className="d-flex align-items-center gap-2">
          <img
            src={row.page.logo}
            alt="logo"
            width={32}
            height={32}
            className="rounded-circle"
          />
          <div>
            <div className="fw-semibold">{row.page.title}</div>
            <small className="text-muted">{row.page.time}</small>
          </div>
        </div>
      ),
      grow: 2,
    },
    {
      name: "Likes",
      selector: (row) => row.likes,
      sortable: true,
    },
    {
      name: "Popularity",
      selector: (row) => row.popularity,
      sortable: true,
    },
    {
      name: "Ads",
      selector: (row) => row.ads,
      sortable: true,
    },
    {
      name: "Top Country",
      cell: (row) => (
        <div className="d-flex gap-1">
          {row.top_country.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Flag ${i}`}
              width={18}
              height={12}
              className="rounded-1"
              style={{ objectFit: "cover" }}
            />
          ))}
        </div>
      ),
    },
    {
      name: "Latest Ads",
      selector: (row) => row.latest_ads,
      cell: (row) => <span className="text-muted">{row.latest_ads}</span>,
    },
    {
      name: "Trend",
      cell: () => (
        <canvas
          width="206"
          height="66"
          style={{ backgroundColor: "#f0f0f0", borderRadius: "4px" }}
        ></canvas>
      ),
    },
    {
      name: "Promoted Product",
      cell: (row) => (
        <div className="d-flex align-items-center gap-2">
          <img
            src={row.promoted_product.logo}
            alt="prod"
            width={24}
            height={24}
            className="rounded"
          />
          <span>{row.promoted_product.title}</span>
        </div>
      ),
    },
    {
      name: "Subscribe",
      cell: () => <i className="bi bi-star-fill text-warning"></i>,
      width: "80px",
    },
  ];

  return (
    <div className="datatable-wrapper mt-3">
      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        pointerOnHover
        responsive
        striped
        pagination
        className="custom-datatable"
      />
    </div>
  );
};

export default FeatureDataTable;
