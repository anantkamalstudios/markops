import React from "react";

export default function FeatureSearchBar({ placeholder }) {
  return (
    <>
      <div className="custom-search__area">
        <div className="custom-zf-search zf-search clearfix zf-exact-search">
          <div className="zf-search__inner">
            <div className="zf-search-wrap">
              {/* Left: icon + input + button */}
              <div className="zf-search-left">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder={placeholder}
                  className="zf-search-input"
                />
                <button className="zf-search-btn">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
