import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  CrownTwoTone,
  UserOutlined,
  UserAddOutlined,
  SettingTwoTone,
  ShoppingCartOutlined,
  ShopTwoTone,
  SafetyCertificateTwoTone,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();

  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });

    history.push("/login");
  };

  return (
    <Menu
      theme="dark"
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Item key="home" icon={<CrownTwoTone />} className=" font-weight-bold" >
        <Link to="/">CerJam</Link>
      </Item>

      <Item key="shop" icon={<ShopTwoTone />}className="font-weight-bold">
        <Link to="/shop">Shop</Link>
      </Item>

      <Item key="cart" icon={<ShoppingCartOutlined />} className="text-success font-weight-bold ">
        <Link to="/cart">
<Badge count={cart.length} offset={[9, 0]} className="text-white">Cart</Badge>


        </Link>
      </Item>

      {!user && (
        <Item key="register" icon={<UserAddOutlined /> }className="float-right  font-weight-bold">
          <Link to="/register">Register</Link>
        </Item>
      )}

      {!user && (
        <Item key="login" icon={<UserOutlined />} className="float-right font-weight-bold">
          <Link to="/login">Login</Link>
        </Item>
      )}

      {user && (
        <SubMenu
          key="SubMenu"
          icon={<SafetyCertificateTwoTone />}
          title={user.email && user.email.split("@")[0]}
          className="float-right font-weight-bold"
        >
          {user && user.role === "subscriber" && (
            <Item icon={<SettingTwoTone />}className="font-weight-bold">
              <Link to="user/history">Dashboard</Link>
            </Item>
          )}

          {user && user.role === "admin" && (
            <Item icon={<SettingTwoTone />}className="font-weight-bold">
              <Link to="admin/dashboard">Dashboard</Link>
            </Item>
          )}

          <Item icon={<LogoutOutlined />} onClick={logout}className="font-weight-bold">
            Log Out
          </Item>
        </SubMenu>
      )}

      <span className="float-right p-1">
        <Search />
      </span>
    </Menu>
  );
};

export default Header;
