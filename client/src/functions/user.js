import axios from "axios";

export const userCart = async (cart, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/user/cart`, { cart },
    {
      headers: {
        authtoken,
      },
    }
  );

export const getUserCart = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
      authtoken,
    },
  });

export const emptyUserCart = async (authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
      authtoken,
    },
  });

export const saveUserAddress = async (authtoken, address) =>
  await axios.post(`${process.env.REACT_APP_API}/user/address`, { address },
    {
      headers: {
        authtoken,
      },
    }
  );

export const applyCoupon = async (authtoken, coupon) =>
  await axios.post(`${process.env.REACT_APP_API}/user/cart/coupon`, { coupon },
    {
      headers: {
        authtoken,
      },
    }
  );
