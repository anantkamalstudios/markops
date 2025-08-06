import React from "react";

const CompetitorComparison = () => {
  const features = [
    {
      name: "Multi-Platform Support",
      adCreative: "✅ (5–6)",
      bigSpy: "❌",
      adSpy: "✅ (70+)",
      markOps: "✅",
    },
    {
      name: "Real-Time Competitor Alerts",
      adCreative: "✅",
      bigSpy: "❌",
      adSpy: "✅",
      markOps: "✅",
    },
    {
      name: "Own Campaign Performance Dashboard",
      adCreative: "❌",
      bigSpy: "❌",
      adSpy: "✅",
      markOps: "✅",
    },
    {
      name: "Side-by-Side Comparison",
      adCreative: "❌",
      bigSpy: "❌",
      adSpy: "❌",
      markOps: "✅",
    },
    {
      name: "Planning Assistant / Recommendations",
      adCreative: "❌",
      bigSpy: "❌",
      adSpy: "❌",
      markOps: "✅",
    },
    {
      name: "WordPress MVP (Freemium potential)",
      adCreative: "❌",
      bigSpy: "❌",
      adSpy: "❌",
      markOps: "✅",
    },
    {
      name: "Designed for Agencies + SaaS",
      adCreative: "❌",
      bigSpy: "❌",
      adSpy: "✅",
      markOps: "✅",
    },
    {
      name: "Price Point (Early-stage friendly)",
      adCreative: "❌",
      bigSpy: "❌ (high)",
      adSpy: "✅",
      markOps: "✅",
    },
  ];

  const renderIcon = (value) => {
    return value.includes("✅") ? (
      <div className="icon-wrapper success">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.00002 16.2L4.80002 12L3.40002 13.4L9.00002 19L21 7.00001L19.6 5.60001L9.00002 16.2Z"
            fill="#10B981"
          />
        </svg>
        {/* <span>{value}</span> */}
      </div>
    ) : (
      <div className="icon-wrapper error">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3 5.71C18.1134 5.52273 17.8598 5.41751 17.595 5.41751C17.3302 5.41751 17.0766 5.52273 16.89 5.71L12 10.59L7.11 5.71C6.92339 5.52273 6.66982 5.41751 6.405 5.41751C6.14019 5.41751 5.88662 5.52273 5.7 5.71C5.31 6.1 5.31 6.73 5.7 7.12L10.59 12L5.7 16.88C5.31 17.27 5.31 17.9 5.7 18.29C6.09 18.68 6.72 18.68 7.11 18.29L12 13.41L16.89 18.29C17.28 18.68 17.91 18.68 18.3 18.29C18.69 17.9 18.69 17.27 18.3 16.88L13.41 12L18.3 7.12C18.68 6.73 18.68 6.09 18.3 5.71Z"
            fill="#EF4444"
          />
        </svg>
        {/* <span>{value}</span> */}
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

      <div className="table-container">
        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-header">Feature / Tool</th>
                <th>Ad Creative Library</th>
                <th>BigSpy SocialPeta</th>
                <th>AdSpy / PowerAdSpy</th>
                <th className="markops-column">MarkOps</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  <td className="feature-name">{feature.name}</td>
                  <td>{renderIcon(feature.adCreative)}</td>
                  <td>{renderIcon(feature.bigSpy)}</td>
                  <td>{renderIcon(feature.adSpy)}</td>
                  <td className="markops-cell">
                    <div className="markops-feature">
                      {renderIcon(feature.markOps)}
                      {feature.markOps.includes("✅") && (
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
    </div>
  );
};

export default CompetitorComparison;
