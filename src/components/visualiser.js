import React, { useState, useEffect } from "react";

export const Visuals = ({ elements }) => {
  return (
    <div id="visualAreaStart">
      {elements.map((value, index) => {
        return <Bars key={index} index={index} value={value}></Bars>;
      })}
    </div>
  );
};

const Bars = (props) => {
  const { value, index } = props;
  return (
    <div key={index} style={{ height: value + "px" }} className="visual"></div>
  );
};
