import React from "react";

const Snowfall = () => (
  <div className="snowfall">
    {Array.apply(null, Array(250)).map((index) => (
      <div className="snowflake" key={index}></div>
    ))}
  </div>
);

export default Snowfall;
