/** @format */

import React, { Children } from "react";
import "./index.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";

const WrapperItem = ({ children, count }) => {
  return (
    <div className="topbarLeft">
      <div className="topbarIcon">{children}</div>
      {count && <span className="topbarAlert">{count}</span>}
    </div>
  );
};
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarName">Admin Dashboard</div>
      <div className="topbarWrapper">
        <WrapperItem count={10}>
          <IoMdNotificationsOutline />
        </WrapperItem>
        <WrapperItem count={4}>
          <TbWorld />
        </WrapperItem>
        <WrapperItem>
          <AiOutlineSetting />
        </WrapperItem>
        <div className="topbarAvatar">
          <img
            width={30}
            height={30}
            src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
