import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "../components/cards/ProductCardInCheckout";
import { userCart } from "../functions/user";

const Cart = ({history}) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    return cart.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrderToDb = () => {
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");})
      .catch((err) => console.log("cart save err", err));
  };

  const saveCashOrderToDb = () => {
    dispatch({
      type: "COD",
      payload: true,
    });
    userCart(cart, user.token)
      .then((res) => {
        console.log("CART POST RES", res);
        if (res.data.ok) history.push("/checkout");})
      .catch((err) => console.log("cart save err", err));
  };

  const showCartItems = () => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col"  className=" font-weight-bold ">Image</th>
          <th scope="col"  className=" font-weight-bold ">Title</th>
          <th scope="col"  className=" font-weight-bold ">Price</th>
          <th scope="col"  className=" font-weight-bold ">Brand</th>
          <th scope="col"  className=" font-weight-bold ">Color</th>
          <th scope="col"  className=" font-weight-bold ">Count</th>
          <th scope="col"  className=" font-weight-bold ">Shipping</th>
          <th scope="col"  className=" font-weight-bold ">Remove</th>
        </tr>
      </thead>

      {cart.map((p) => (
        <ProductCardInCheckout key={p._id} p={p} />
      ))}
    </table>
  );

  return (
    <div className="container-fluid pt-2">
      <div className="row">
        <div className="col-md-8">
          <h4 className=" font-weight-bold p-3 mt-4  mb-5 display-4 bg-info text-white">Cart / {cart.length} Product</h4>

          {!cart.length ? (
            <p>
              No products in cart. <Link to="/shop">Continue Shopping.</Link>
            </p>
          ) : (
            showCartItems()
          )}
        </div>
        <div className="col-md-4">
          <h4 className=" font-weight-bold p-3 mt-4  mb-5 display-4 bg-info text-white">Order Summary</h4>
          <hr />
          <p className=" font-weight-bold ">Products</p>
          {cart.map((c, i) => (
            <div key={i}>
              <p>
                {c.title} x {c.count} = ${c.price * c.count}
              </p>
            </div>
          ))}
          <hr />
          Total: <b>${getTotal()}</b>
          <hr />
          {user ? ( <>
            <div className="row">
            <button
              onClick={saveOrderToDb}
              className="btn btn-sm btn-success  btn-outlined-success  btn-raised mt-2 m-3"
              disabled={!cart.length} >
              Proceed to Checkout
            </button>
            <br />
              <button
                onClick={saveCashOrderToDb}
                className="btn btn-sm btn-warning btn-outlined-success  btn-raised mt-2 m-3"
                disabled={!cart.length} >
                Pay Cash on Delivery
              </button></div>
            </>
            
          ) : (
            <button className="btn btn-sm btn-primary mt-2">
              <Link
                to={{
                  pathname: "/login",
                  state: { from: "cart" },
                }}
              >
                Login to Checkout
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
