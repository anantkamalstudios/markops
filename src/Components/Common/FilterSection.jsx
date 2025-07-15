import { useState } from "react";
import FilteredData from "./FilteredData";
import { Dropdown, Form } from "react-bootstrap";

const languages = ["English", "Spanish", "French", "German"];
const countries = ["United States", "India", "Germany", "France", "Japan"];

const networkOptions = [
  { id: "facebook", label: "Facebook", icon: "bi-facebook", enabled: true },
  { id: "instagram", label: "Instagram", icon: "bi-instagram", enabled: false },
  { id: "youtube", label: "YouTube", icon: "bi-youtube", enabled: false },
  { id: "tiktok", label: "TikTok", icon: "bi-tiktok", enabled: false },
  { id: "twitter", label: "Twitter", icon: "bi-twitter-x", enabled: false },
];

export default function FilterSection() {
  const [formState, setFormState] = useState({
    selectedTab: "ads",
    query: "",
    timeFrom: "",
    timeTo: "",
    onlyNew: false,
    original: false,
    dynamic: false,
    timeFrom: "",
    timeTo: "",
    onlyNew: false,
    original: false,
    dynamic: false,
    facebook: false,
    instagram: false,
    admob: false,
    youtube: false,
    tiktok: false,
    twitter: false,
    pinterest: false,
    yahoo: false,
    unity: false,
  });

  const tabs = [
    { id: "ads", label: "Ads" },
    { id: "infoAds", label: "InfoAds" },
    { id: "textSocial", label: "TextSocial" },
    { id: "pageEcom", label: "PageEcom" },
    { id: "infoDomain", label: "InfoDomain" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", formState);
  };

  const toggleNetwork = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((n) => n !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selected, setSelected] = useState(["facebook"]);

  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };
  const toggleCountry = (country) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country]
    );
  };

  return (
    <section className="about-section section-padding fix mt-4">
      <form onSubmit={handleSubmit} className="px-2">
        <div className="bg-white p-3 pt-3 pb-2 rounded-2 shadow">
          {/* Tabs */}
          <div className="row align-items-center mb-3 g-2">
            {/* Tabs */}
            <div className="col-md-6">
              <div className="d-flex gap-2 flex-wrap align-items-center h-100">
                {tabs.map((tab) => (
                  <label
                    key={tab.id}
                    className={`btn btn-outline-primary btn-sm py-1 ${
                      formState.selectedTab === tab.id ? "active" : ""
                    }`}
                    style={{
                      width: "120px",
                      height: "50px",
                      justifyContent: "center",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="radio"
                      name="selectedTab"
                      value={tab.id}
                      checked={formState.selectedTab === tab.id}
                      onChange={handleChange}
                      hidden
                    />
                    {tab.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="col-md-6">
              <form className="d-flex">
                <div className="input-group input-group-sm">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search"
                    name="query"
                    value={formState.query}
                    onChange={handleChange}
                  />
                  <button className="btn btn-primary" type="submit">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Time + Checkboxes */}
          <div className="row g-3 my-4 align-items-center">
            <div className="col-md-2 fw-semibold">Time</div>
            <div className="col-md-10">
              <div className="d-flex flex-wrap align-items-center gap-3">
                {/* Date From */}
                <input
                  type="date"
                  name="timeFrom"
                  value={formState.timeFrom}
                  onChange={handleChange}
                  className="form-control form-control-sm"
                  style={{ maxWidth: "160px" }}
                />

                {/* Dash Separator */}
                <span className="fw-semibold">-</span>

                {/* Date To */}
                <input
                  type="date"
                  name="timeTo"
                  value={formState.timeTo}
                  onChange={handleChange}
                  className="form-control form-control-sm"
                  style={{ maxWidth: "160px" }}
                />

                {/* Checkboxes */}
                {["onlyNew", "original", "dynamic"].map((key) => (
                  <div
                    className="form-check d-flex align-items-center mb-0"
                    key={key}
                  >
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      id={key}
                      name={key}
                      checked={formState[key]}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={key}>
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (s) => s.toUpperCase())}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Networks */}
          <div className="row g-3 align-items-start my-4">
            <div className="col-md-2 fw-semibold">Networks</div>
            <div className="col-md-10">
              <div className="d-flex flex-wrap gap-2">
                {networkOptions.map(({ id, label, icon, enabled }) => {
                  const isChecked = formState[id];

                  return (
                    <label
                      key={id}
                      className={`btn btn-sm rounded-pill d-flex align-items-center gap-2 ${
                        enabled
                          ? isChecked
                            ? "btn-primary text-white"
                            : "btn-outline-primary"
                          : "btn-outline-primary disabled text-primary border-primary"
                      }`}
                      style={{
                        backgroundColor:
                          enabled && isChecked ? "#4441ecff" : "", // Purple when selected
                        borderColor: !enabled ? "#220080ff" : "",
                        opacity: enabled ? 1 : 0.7,
                        cursor: enabled ? "pointer" : "not-allowed",
                      }}
                    >
                      {enabled && (
                        <input
                          type="checkbox"
                          name={id}
                          checked={formState[id] || false}
                          onChange={handleChange}
                          hidden
                        />
                      )}
                      <i className={`bi ${icon}`}></i>
                      {label}
                    </label>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Site Type */}
          <div className="row g-3 my-4 align-items-start">
            <div className="col-md-2 fw-semibold">Site Type</div>
            <div className="col-md-10">
              <div className="d-flex flex-wrap gap-2">
                {[
                  "Shopify",
                  "WooCommerce",
                  "WordPress",
                  "Magento",
                  "BigCommerce",
                  "OpenCart",
                  "PrestaShop",
                  "Wix",
                  "Squarespace",
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    className="btn btn-outline-secondary btn-sm rounded-pill px-3"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Basic */}
          <div className="row g-3 my-3 align-items-start">
            <div className="col-md-2 fw-semibold">Basic</div>
            <div className="col-md-10">
              <div className="d-flex gap-2">
                <Dropdown className="w-25" autoClose="outside">
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    className="form-control text-start bg-white d-flex justify-content-between align-items-center"
                    style={{ height: "38px" }}
                    id="filter_language"
                  >
                    <span
                      className="text-truncate"
                      style={{ maxWidth: "140px" }}
                    >
                      {selectedLanguages.length > 0
                        ? selectedLanguages.join(", ")
                        : "Language"}
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="w-100 rounded"
                    style={{ maxHeight: "200px", overflowY: "auto" }}
                  >
                    {languages.map((lang) => (
                      <Dropdown.Item as="div" key={lang} className="px-2">
                        <Form.Check
                          type="checkbox"
                          id={`lang-${lang}`}
                          label={lang}
                          checked={selectedLanguages.includes(lang)}
                          onChange={() => toggleLanguage(lang)}
                        />
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="w-25" autoClose="outside" id="filter_geo">
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    className="form-control text-start bg-white d-flex justify-content-between align-items-center"
                    style={{ height: "38px" }}
                  >
                    <span
                      className="text-truncate"
                      style={{ maxWidth: "130px" }}
                    >
                      {selectedCountries.length > 0
                        ? selectedCountries.join(", ")
                        : "Country/Region"}
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="w-100"
                    style={{ maxHeight: "200px", overflowY: "auto" }}
                  >
                    {countries.map((country) => (
                      <Dropdown.Item as="div" key={country} className="px-2">
                        <Form.Check
                          type="checkbox"
                          id={`geo-${country}`}
                          label={country}
                          checked={selectedCountries.includes(country)}
                          onChange={() => toggleCountry(country)}
                        />
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>

          {/* Select */}
          <div className="row g-3 my-4 align-items-start">
            <div className="col-md-2 fw-semibold">Selected</div>
            <div className="col-md-10 d-flex flex-wrap gap-2">
              {/* Selected Languages */}
              {selectedLanguages.map((lang) => (
                <span
                  key={lang}
                  className="badge bg-primary text-white rounded-pill px-3 py-1 d-flex align-items-center"
                >
                  {lang}
                  <button
                    type="button"
                    className="btn-close btn-close-white btn-sm ms-2"
                    aria-label="Remove"
                    onClick={() => toggleLanguage(lang)}
                    style={{ fontSize: "0.6rem" }}
                  ></button>
                </span>
              ))}

              {networkOptions
                .filter(({ key }) => formState[key])
                .map(({ key, label, icon }) => (
                  <span
                    key={key}
                    className="badge bg-light text-dark border rounded-pill d-flex align-items-center gap-1 px-3 py-1"
                  >
                    <i className={`bi ${icon}`}></i>
                    {label}
                    <button
                      type="button"
                      className="btn-close btn-close-white btn-sm ms-2"
                      aria-label="Remove"
                      style={{ fontSize: "0.6rem" }}
                      onClick={() =>
                        setFormState((prev) => ({
                          ...prev,
                          [key]: false,
                        }))
                      }
                    ></button>
                  </span>
                ))}

              {/* Selected Countries */}
              {selectedCountries.map((country) => (
                <span
                  key={country}
                  className="badge bg-success text-white rounded-pill px-3 py-1 d-flex align-items-center"
                >
                  {country}
                  <button
                    type="button"
                    className="btn-close btn-close-white btn-sm ms-2"
                    aria-label="Remove"
                    onClick={() => toggleCountry(country)}
                    style={{ fontSize: "0.6rem" }}
                  ></button>
                </span>
              ))}

              {/* Selected Checkboxes */}
              {["onlyNew", "original", "dynamic"]
                .filter((key) => formState[key])
                .map((key) => (
                  <span
                    key={key}
                    className="badge bg-warning text-dark rounded-pill px-3 py-1 d-flex align-items-center"
                  >
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (s) => s.toUpperCase())}
                    <button
                      type="button"
                      className="btn-close btn-sm ms-2"
                      aria-label="Remove"
                      onClick={() =>
                        setFormState((prev) => ({
                          ...prev,
                          [key]: false,
                        }))
                      }
                      style={{ fontSize: "0.6rem" }}
                    ></button>
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Filtered Data Display */}
        <div className="bg-white p-3 pt-3 pb-2 rounded-2 shadow mt-3">
          <FilteredData />
        </div>
      </form>
    </section>
  );
}
