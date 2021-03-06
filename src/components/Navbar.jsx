import React from "react";
import { Button, Menu, Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import icon from "../images/dp.png";
import {
  HomeOutlined,
  MoneyCollectOutlinedm,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large"></Avatar>
        <Typography.Title level={2} className="logo">
          <Link to="/">LB</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/property">Property</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
