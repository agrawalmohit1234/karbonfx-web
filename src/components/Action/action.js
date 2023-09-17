import React from "react";

const Action = ({ type, className, handleClick, disabled = false }) => {
  if (disabled) {
    return (
      <span
        className={className}
        onClick={handleClick}
        style={{
          backgroundColor: "grey",
          padding: "6px",
          border: "none",
          margin: "2px",
          borderRadius: "5px",
          pointerEvents: "none",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {type}
      </span>
    );
  } else {
    return (
      <span
        className={className}
        onClick={handleClick}
        style={{
          backgroundColor: "#0096FF",
          padding: "6px",
          border: "none",
          margin: "2px",
          borderRadius: "5px",
          cursor: "pointer",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {type}
      </span>
    );
  }
};

export default Action;
