import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSeller";


const Home = () => {
  
  return (
    <>
    
      <div className="jumbotron text-danger h1 font-weight-bold text-center">
        <Jumbotron text={["SALE SALE SALE"]} />
      </div>

      <h4 className="text-center h2 font-weight-bold p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className=" text-center  h2 font-weight-bold p-3 mt-5 mb-5 display-4 jumbotron ">
        Best Sellers
      </h4>
      <BestSellers />

      <br />
      <br />
  
    </>
  );
};

export default Home;
