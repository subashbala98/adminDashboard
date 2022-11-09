/** @format */

import React from "react";
import Chart from "../../components/Chart";
import FeaturedInfo from "../../components/FeaturedInfo";
import "./index.css";
const widgetsList = [
  { title: "Revenue", price: "3,235", growth: "-11.2" },
  { title: "Sales", price: "4,566", growth: "-1.2" },
  { title: "Cost", price: "6,343", growth: "+2" },
];
const Home = () => {
  return (
    <div className="home">
      <div className="homeWidgets">
        {widgetsList.map((props, idx) => {
          return (
            <div key={idx}>
              <FeaturedInfo {...props} />
            </div>
          );
        })}
      </div>
      <div className="homeChart">
        <h3>Active User Deatils</h3>
        <Chart />
      </div>
    </div>
  );
};

export default Home;
