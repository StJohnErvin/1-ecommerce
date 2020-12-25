import React, { useState } from "react";
import { Card, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";

const { Meta } = Card;
const ProductCard = ({ product }) => {
  const [tooltip, setTooltip] = useState("Click to add");
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    let cart = [];
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push({  ...product, count: 1, });
      let unique = _.uniqWith(cart, _.isEqual);
      localStorage.setItem("cart", JSON.stringify(unique));
      setTooltip("Added");
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      dispatch({
        type: "SET_VISIBLE",
        payload: true,
      });
    }
  };
  const { images, title, description, slug, price } = product;
  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (  showAverage(product)  ) : (<div className="text-center pt-1 pb-3">No rating yet</div>  )}
      <Card
        cover={
          <img src={images && images.length ? images[0].url : laptop} style={{ height: "150px", objectFit: "cover" }} className="p-1"/>
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-info" /> <br /> View Product
          </Link>,
          <Tooltip title={tooltip} > 
            <a onClick={handleAddToCart} disabled={product.quantity < 1}>
              <ShoppingCartOutlined className="text-success" /> <br />
                {product.quantity < 1 ? <p className="text-danger">Out of stock </p>: "Add to cart"}
            </a>
          </Tooltip>,
        ]} >
        <Meta title={`${title} - $${price}`} description={`${description && description.substring(0, 40)}...`} />
      </Card>
    </>
  );
};

export default ProductCard;
