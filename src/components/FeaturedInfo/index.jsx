/** @format */

import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import "./index.css";
const FeaturedInfo = ({ title, price, growth, info }) => {
  return (
    <div className="featureInfo">
      <p>{title}</p>
      <div>
        <h1>${price}</h1>
        <span>
          {growth}
          {growth?.includes("-") ? (
            <AiOutlineArrowDown className="arrow_down" />
          ) : (
            <AiOutlineArrowUp className="arrow_up" />
          )}
        </span>
      </div>
      <span>Compared to last month</span>
    </div>
  );
};

export default FeaturedInfo;
