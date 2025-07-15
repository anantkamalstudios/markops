import { useEffect, useState } from "react";
import AdDetailModal from "../Details/AdDetailModal";
import GridView from "../Details/GridView";
import ListView from "../Details/ListView";

export default function FilteredData() {
  const dummyAds = [
    {
      id: 1,
      name: "Giro***esign",
      title: "Casco Helios Sphericalsss",
      avatar:
        "https://sp2cdn-logo-global.zingfront.com/sp_opera/e9a2c83e5aa78859f10daa95fcdbab04.png",
      image:
        "https://sp.dataideaglobal.com/sp_opera/f1f3074c6b56a67dee6814a240b00d89.jpg",
      impression: "10K",
      duration: "1",
      popularity: "500",
      heading: "Acquista Ciclismo su Giro Sport Design",
      desc: "Attrezzatura premium per ciclismo e MTB, creata perportare la tua esperienza su due ruote al livello successivo",
      dateRange: "2025-07-15 ~ 2025-07-15",
      network: "Facebook",
      country: "Nashik",
      language: "Italian",
      size: "1200x628",
      disclaimer: "Sample disclaimer text",
      similar: [
        "https://via.placeholder.com/80",
        "https://via.placeholder.com/81",
      ],
    },
    {
      id: 2,
      name: "Giro***esign",
      title: "Casco Helios Spherical",
      avatar:
        "https://sp2cdn-logo-global.zingfront.com/sp_opera/e9a2c83e5aa78859f10daa95fcdbab04.png",
      image:
        "https://sp.dataideaglobal.com/sp_opera/8b3b224877c32ee238405ca7f217a969.jpg",
      impression: "10K",
      duration: "1",
      popularity: "5000",
      heading: "Acquista Ciclismo su Giro Sport Design",
      desc: "Attrezzatura premium per ciclismo e MTB, creata perportare la tua esperienza su due ruote al livello successivo",
      dateRange: "2025-07-15 ~ 2025-07-15",
      network: "Facebook",
      country: "Pune",
      language: "Italian",
      size: "1200x628",
      disclaimer: "Sample disclaimer text",
      similar: [
        "https://via.placeholder.com/80",
        "https://via.placeholder.com/81",
      ],
    },
    {
      id: 3,
      name: "Giro***esign",
      title: "Casco Helios Sphericalzzzz",
      avatar:
        "https://sp2cdn-logo-global.zingfront.com/sp_opera/e9a2c83e5aa78859f10daa95fcdbab04.png",
      image:
        "https://sp.dataideaglobal.com/sp_opera/f56823c9a19c620e0164d05a1af7f26f.jpg",
      impression: "10K",
      duration: "1",
      popularity: "5",
      heading: "Acquista Ciclismo su Giro Sport Design",
      desc: "Attrezzatura premium per ciclismo e MTB, creata perportare la tua esperienza su due ruote al livello successivo",
      dateRange: "2025-07-15 ~ 2025-07-15",
      network: "Facebook",
      country: "Mumbai",
      language: "Italian",
      size: "1200x628",
      disclaimer: "Sample disclaimer text",
      similar: [
        "https://via.placeholder.com/80",
        "https://via.placeholder.com/81",
      ],
    },
  ];

  const ads = [
    {
      id: 1,
      image:
        "https://sp.dataideaglobal.com/sp_opera/f1f3074c6b56a67dee6814a240b00d89.jpg",
      logo: "https://sp2cdn-logo-global.zingfront.com/sp_opera/e9a2c83e5aa78859f10daa95fcdbab04.png",
      advertiser: "Giro***esign",
      domain: "gi***om",
      impression: "10K",
      popularity: 50,
      engagement: "N/A",
      duration: 1,
      dateRange: "2025-07-15 ~ 2025-07-15",
    },
    {
      id: 2,
      image:
        "https://sp.dataideaglobal.com/sp_opera/f1f3074c6b56a67dee6814a240b00d89.jpg",
      logo: "https://sp2cdn-logo-global.zingfront.com/sp_opera/e9a2c83e5aa78859f10daa95fcdbab04.png",
      advertiser: "Giro***esign",
      domain: "gi***om",
      impression: "10K",
      popularity: 500,
      engagement: "N/A",
      duration: 1,
      dateRange: "2025-07-15 ~ 2025-07-15",
    },
    {
      id: 3,
      image:
        "https://sp.dataideaglobal.com/sp_opera/f1f3074c6b56a67dee6814a240b00d89.jpg",
      logo: "https://sp2cdn-logo-global.zingfront.com/sp_opera/e9a2c83e5aa78859f10daa95fcdbab04.png",
      advertiser: "Giro***esign",
      domain: "gi***om",
      impression: "10K",
      popularity: 5000,
      engagement: "N/A",
      duration: 1,
      dateRange: "2025-07-15 ~ 2025-07-15",
    },
  ];

  const [viewMode, setViewMode] = useState("industry");
  const [sortOption, setSortOption] = useState("latest");
  const [dedupOption, setDedupOption] = useState("strict");
  const [sortedGrid, setSortedGrid] = useState([...dummyAds]);
  const [sortedList, setSortedList] = useState([...ads]);
  const [selectedAd, setSelectedAd] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (ad) => {
    setSelectedAd(ad);
    setShowModal(true);
  };

  useEffect(() => {
    let sortedGrid = [...dummyAds];
    let sortedList = [...ads];
    switch (sortOption) {
      case "popular":
        sortedGrid.sort((a, b) => b.popularity - a.popularity);
        sortedList.sort((a, b) => b.popularity - a.popularity);
        break;
      case "longest":
        sortedGrid.sort((a, b) => b.duration - a.duration);
        sortedList.sort((a, b) => b.duration - a.duration);
        break;
      case "latest":
      default:
        sortedGrid.sort(
          (a, b) =>
            new Date(b.dateRange.split("~")[1]) -
            new Date(a.dateRange.split("~")[1])
        );
        sortedList.sort(
          (a, b) =>
            new Date(b.dateRange.split("~")[1]) -
            new Date(a.dateRange.split("~")[1])
        );
        break;
    }
    setSortedGrid(sortedGrid);
    setSortedList(sortedList);
  }, [sortOption, ads]);

  return (
    <section className="about-section fix">
      <div
        className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center text-secondary gap-2"
        style={{ fontSize: "14px", lineHeight: "1.5" }}
      >
        {/* Left: Text Summary */}
        <div className="text-start">
          <span className="text-dark fw-semibold">296M</span> ads found,{" "}
          <span className="text-dark fw-semibold">141M</span> after{" "}
          <span className="text-primary fw-semibold">
            Default Deduplication
          </span>
          , <span className="text-dark fw-semibold">44M</span> after{" "}
          <span className="text-primary fw-semibold">Strict Deduplication</span>
        </div>

        {/* Right: Controls */}
        <div className="d-flex flex-wrap align-items-center gap-2 justify-content-md-end w-100 w-md-auto">
          {/* View Mode Buttons */}
          <div
            className="btn-group"
            role="group"
            style={{ height: "36px", marginTop: "7px" }}
          >
            <input
              type="radio"
              className="btn-check"
              name="viewMode"
              id="industryView"
              value="industry"
              checked={viewMode === "industry"}
              onChange={(e) => setViewMode(e.target.value)}
            />
            <label
              className="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center"
              htmlFor="industryView"
              style={{
                width: "36px",
                height: "36px",
                padding: 0,
                lineHeight: "1",
              }}
            >
              <i className="bi bi-grid"></i>
            </label>

            <input
              type="radio"
              className="btn-check"
              name="viewMode"
              id="detailView"
              value="detail"
              checked={viewMode === "detail"}
              onChange={(e) => setViewMode(e.target.value)}
            />
            <label
              className="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center"
              htmlFor="detailView"
              style={{
                width: "36px",
                height: "36px",
                padding: 0,
                lineHeight: "1",
              }}
            >
              <i className="bi bi-list-ul"></i>
            </label>
          </div>

          {/* Sort Dropdown */}
          <select
            className="form-select form-select-sm"
            style={{
              width: "160px",
              height: "36px",
              lineHeight: "1.5",
              padding: "6px 12px",
            }}
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="latest">Latest ↓</option>
            <option value="popular">Popularity</option>
            <option value="longest">Longest Run</option>
          </select>

          {/* Deduplication Dropdown */}
          <select
            className="form-select form-select-sm"
            style={{
              width: "160px",
              height: "36px",
              lineHeight: "1.5",
              padding: "6px 12px",
            }}
            value={dedupOption}
            onChange={(e) => setDedupOption(e.target.value)}
          >
            <option value="strict">Strict</option>
            <option value="default">Default</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>

      {viewMode === "industry" ? (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
          <GridView ads={sortedGrid} onClick={handleCardClick} />
        </div>
      ) : (
        <ListView ads={sortedList} onClick={handleCardClick} />
      )}

      <AdDetailModal
        show={showModal}
        onHide={() => setShowModal(false)}
        data={selectedAd}
      />
    </section>
  );
}
