import React from "react";

export function Card({ id, index, backgroundImageUrl }) {
  return (
    <div
      className="card"
      style={
        backgroundImageUrl
          ? { backgroundImage: `url('${backgroundImageUrl}')` }
          : { backgroundColor: "#CCC" }
      }
    ></div>
  );
}
