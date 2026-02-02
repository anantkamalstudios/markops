import React from 'react';

const FeatureTable = () => {
  const features = [ 
    {
      category: "Financial Features",
      items: [
        {
          label: "Create Receivables and Past Receivables",
          basic: false,
          pro: true,
          enterprise: true
        },
        {
          label: "Generate Receipts",
          basic: false,
          pro: true,
          enterprise: true
        },
        {
          label: "Track Payments",
          basic: false,
          pro: true,
          enterprise: true
        },
        {
          label: "Analytics",
          basic: false,
          pro: true,
          enterprise: true
        },
        {
          label: "Cash Flow Reports",
          basic: false,
          pro: false,
          enterprise: true
        }
      ]
    }
  ];

  const renderCell = (value) => {
    if (typeof value === 'string') {
      const parts = value.split('|');
      return (
        <div className="d-flex flex-column">
          {parts.map((part, index) => (
            <span key={index} className="fw-medium text-dark">{part.trim()}</span>
          ))}
        </div>
      );
    }
    if (value) {
      return (
        <div className="d-flex justify-content-center">
          <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill">
            <i className="bi bi-check-circle-fill me-2"></i>Included
          </span>
        </div>
      );
    }
    return (
      <div className="d-flex justify-content-center">
        <span className="badge bg-light bg-opacity-50 text-muted px-3 py-2 rounded-pill">
          <i className="bi bi-x-circle me-2"></i>Not included
        </span>
      </div>
    );
  };

  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5 mb-3">Features Plan </h2>
        <p className="text-muted lead">Compare features across our different plan tiers</p>
      </div>
      
      <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-borderless align-middle mb-0">
              <thead>
                <tr className="border-bottom">
                  <th className="text-start ps-5 py-4 fw-semibold fs-5 border-end" style={{width: '40%'}}>Feature</th>
                  <th className="text-center py-4 fw-semibold fs-5 border-end">
                    <div className="d-flex flex-column align-items-center">
                      <span>Basic</span>
                      <span className="text-muted small fw-normal">Essential features</span>
                    </div>
                  </th>
                  <th className="text-center py-4 fw-semibold fs-5 border-end">
                    <div className="d-flex flex-column align-items-center">
                      <span>Pro</span>
                      <span className="text-muted small fw-normal">Advanced tools</span>
                    </div>
                  </th>
                  <th className="text-center py-4 fw-semibold fs-5 border-end">
                    <div className="d-flex flex-column align-items-center">
                      <span>Enterprise</span>
                      <span className="text-muted small fw-normal">Complete solution</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    {/* <tr className="bg-light">
                      <th colSpan="4" className="ps-5 py-3 fw-semibold text-uppercase small text-muted">
                        {category.category}
                      </th>
                    </tr> */}
                    {category.items.map((item, itemIndex) => (
                      <tr key={`${categoryIndex}-${itemIndex}`} className="border-bottom">
                        <td className="text-start ps-5 py-4 fw-medium border-end">{item.label}</td>
                        <td className="text-center py-4 border-end">{renderCell(item.basic)}</td>
                        <td className="text-center py-4 border-end">{renderCell(item.pro)}</td>
                        <td className="text-center py-4 border-end">{renderCell(item.enterprise)}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="mt-5 text-center">
        <div className="d-inline-flex align-items-center bg-light rounded-pill px-4 py-2">
          <span className="text-muted me-2">Legend:</span>
          <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill me-2">
            <i className="bi bi-check-circle-fill me-1"></i>Included
          </span>
          <span className="badge bg-light bg-opacity-50 text-muted px-3 py-2 rounded-pill">
            <i className="bi bi-x-circle me-1"></i>Not included
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeatureTable;