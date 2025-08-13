import React from "react";
import { CircleLoader } from "react-spinners";

const Loader = ({ size = 120, color = "#3583e8ff" }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      <CircleLoader size={size} color={color} />
    </div>
  );
};

export default Loader;
