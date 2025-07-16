import { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";
import dayjs from "dayjs";

const languages = ["English", "Spanish", "French", "German"];
const countries = ["United States", "India", "Germany", "France", "Japan"];

const timeRanges = [
  { label: "30 Days", value: 30 },
  { label: "60 Days", value: 60 },
  { label: "90 Days", value: 90 },
  { label: "1 Year", value: 365 },
];

export default function FeatureFilterSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", formState);
  };

  const [formState, setFormState] = useState({
    timeFrom: "",
    timeTo: "",
    selectedTimeRange: null,
    onlyNew: false,
    original: false,
    dynamic: false,
  });

  const handleRangeSelect = (days) => {
    const toDate = dayjs().format("YYYY-MM-DD");
    const fromDate = dayjs().subtract(days, "day").format("YYYY-MM-DD");

    setFormState((prev) => ({
      ...prev,
      selectedTimeRange: days,
      timeFrom: fromDate,
      timeTo: toDate,
    }));
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      selectedTimeRange: null, // Reset selection if manual date changed
    }));
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
    <form onSubmit={handleSubmit} className="px-2">
      <div>
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
                  <span className="text-truncate" style={{ maxWidth: "140px" }}>
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
                  <span className="text-truncate" style={{ maxWidth: "130px" }}>
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

        {/* Time */}
        <div className="row g-3 my-4 align-items-center">
          <div className="col-md-2 fw-semibold">Ad Time</div>
          <div className="col-md-10">
            <div className="d-flex flex-wrap align-items-center gap-3">
              {/* Square Radio Buttons */}
              <div className="d-flex flex-wrap gap-2">
                {timeRanges.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    className={`btn btn-sm border rounded text-nowrap ${
                      formState.selectedTimeRange === item.value
                        ? "btn-primary text-white"
                        : "btn-light"
                    }`}
                    style={{ width: "80px" }}
                    onClick={() => handleRangeSelect(item.value)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Date Range */}
              <div className="d-flex align-items-center gap-2 ms-3">
                <input
                  type="date"
                  name="timeFrom"
                  value={formState.timeFrom}
                  onChange={handleChange}
                  className="form-control form-control-sm"
                  style={{ maxWidth: "140px" }}
                />
                <span className="fw-semibold">-</span>
                <input
                  type="date"
                  name="timeTo"
                  value={formState.timeTo}
                  onChange={handleChange}
                  className="form-control form-control-sm"
                  style={{ maxWidth: "140px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
