import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSeller";
import { CopyrightOutlined, createFromIconfontCN } from "@ant-design/icons";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";

import { Menu } from "antd";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const Home = () => {
  return (
    <>
      <div className=" text-danger h1 p-5 mt-5 mb-5  font-weight-bold text-center"


      
      
      >
        <Jumbotron text={["SALE SALE SALE"]} />
      </div>

      <h4 className="text-center  font-weight-bold p-3 mt-4  mb-5 display-4 bg-info text-white "
      
      
      
      >
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className=" text-center  font-weight-bold p-3 mt-4  mb-5 display-4 bg-info text-white">
       Best Sellers
      </h4>
      <BestSellers />

      <br />
      <br />

      <h4 className="text-center  font-weight-bold p-3 mt-4  mb-5 display-4 bg-info text-white">
        Categories
      </h4>
      <CategoryList />

      <h4 className="text-center  font-weight-bold p-3 mt-4  mb-5 display-4 bg-info text-white">
        Sub Categories
      </h4>
      <SubList />

      <Menu theme="dark">
        <div>
          <p className="icons-list text-center font-small p-3 mt-5 mb-5  ">
            <a>Conditions of Use</a> <a>Privacy Notice</a>{" "}
            <a>Interest-Based Ads</a> <CopyrightOutlined />
            2020-2021, Cerjam.com, Inc. or its affiliates{" "}
            <IconFont
              type="icon-facebook"
              className="float-right h2 p-2 "/>{" "}
            <IconFont type="icon-twitter" className="float-right h2 p-2" />
          </p>
        </div>
      </Menu>
    </>
  );
};

export default Home;
