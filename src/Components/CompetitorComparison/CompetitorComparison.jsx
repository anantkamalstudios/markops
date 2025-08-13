import React from "react";

const CompetitorComparison = ({ competitor }) => {
  const renderIcon = (value) => {
    if (!value) return null;
    return value.toLowerCase() === "yes" ? (
      <div className="icon-wrapper success">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M9.00002 16.2L4.80002 12L3.40002 13.4L9.00002 19L21 7.00001L19.6 5.60001L9.00002 16.2Z"
            fill="#10B981"
          />
        </svg>
      </div>
    ) : (
      <div className="icon-wrapper error">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M18.3 5.71C18.1134 5.52273 17.8598 5.41751 17.595 5.41751C17.3302 5.41751 17.0766 5.52273 16.89 5.71L12 10.59L7.11 5.71C6.92339 5.52273 6.66982 5.41751 6.405 5.41751C6.14019 5.41751 5.88662 5.52273 5.7 5.71C5.31 6.1 5.31 6.73 5.7 7.12L10.59 12L5.7 16.88C5.31 17.27 5.31 17.9 5.7 18.29C6.09 18.68 6.72 18.68 7.11 18.29L12 13.41L16.89 18.29C17.28 18.68 17.91 18.68 18.3 18.29C18.69 17.9 18.69 17.27 18.3 16.88L13.41 12L18.3 7.12C18.68 6.73 18.68 6.09 18.3 5.71Z"
            fill="#EF4444"
          />
        </svg>
      </div>
    );
  };

  return (
    <div className="comparison-container">
      <div className="header-section">
        <h1 className="title">
          <span className="highlight">Competitor</span> Comparison
        </h1>
        <p className="subtitle">
          See how MarkOps outperforms the competition with superior features
        </p>
      </div>

      <div className="table-container table-responsive">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature / Tool</th>
              <th>Ad Creative Library</th>
              <th>BigSpy SocialPeta</th>
              <th>AdSpy / PowerAdSpy</th>
              <th>MarkOps</th>
            </tr>
          </thead>
          <tbody>
            {competitor.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                <td>{item.featuretool}</td>
                <td>{renderIcon(item.adcreativelibrary)}</td>
                <td>{renderIcon(item.bigspysocialpeta)}</td>
                <td>{renderIcon(item.adspypowersdspy)}</td>
                <td>
                  <div className="markops-feature">
                    {renderIcon(item.markops)}
                    {item.markops?.toLowerCase() === "advantage" && (
                      <span className="feature-tag">Advantage</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompetitorComparison;
