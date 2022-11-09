/** @format */

import React from "react";
import "./index.css";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { IoAnalyticsOutline, IoAnalytics } from "react-icons/io5";
import { BsGraphUp, BsShop, BsCurrencyDollar } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";
import { MdOutlineDynamicFeed, MdReport } from "react-icons/md";
import { BiMessageAlt } from "react-icons/bi";
import { TfiBag } from "react-icons/tfi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Dashboard */}
      <div className="sidebarWrapper">
        <h5>Dashboard</h5>
        <ul className="sidebarList">
          <li className="active">
            <AiOutlineHome /> Home
          </li>
          <li>
            <IoAnalyticsOutline /> Analytics
          </li>
          <li>
            <BsGraphUp /> Sales
          </li>
        </ul>
      </div>
      {/* Quick Menu */}
      <div className="sidebarWrapper">
        <h5>Quick Menu</h5>
        <ul className="sidebarList">
          <li className="active">
            <FiUsers /> Users
          </li>
          <li>
            <BsShop /> Products
          </li>
          <li>
            <BsCurrencyDollar /> Transactions
          </li>
          <li>
            <VscGraph /> Reports
          </li>
        </ul>
      </div>
      {/* Notification */}
      <div className="sidebarWrapper">
        <h5>Notification</h5>
        <ul className="sidebarList">
          <li className="active">
            <AiOutlineMail /> Mail
          </li>
          <li>
            <MdOutlineDynamicFeed /> Feedback
          </li>
          <li>
            <BiMessageAlt /> Messages
          </li>
        </ul>
      </div>
      {/* Staff */}
      <div className="sidebarWrapper">
        <h5>Staff</h5>
        <ul className="sidebarList">
          <li className="active">
            <AiOutlineHome /> Manage
          </li>
          <li>
            <IoAnalytics /> Analytics
          </li>
          <li>
            <TfiBag /> Reports
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
