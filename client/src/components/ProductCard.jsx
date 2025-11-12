import React from "react";
import productimg from "../assets/product.webp";
import { Link } from "react-router-dom";
const ProductCard = ({tittle,price}) => {
  return (
    <div className="productContainer border-2 border-black-900 max-w-[320px]  w-full ">
      <div className="product-img-container w-full border min-h-[280px]">
        <img src={productimg} className="" alt="" />
      </div>
      <div className="product-content-container">
        <p>
          <b>{tittle}</b>
        </p>
        <p>₹{ price}</p>
        <div className="pro-btn-container flex justify-between items-center">
          <Link to={"/buynow"} className="py-[8px] px-[32px] border">
            Buy Now
          </Link>
          <Link
            onClick={() => {
              alert("your product added");
            }}
            className="py-[8px] px-[32px] border"
          >
            Add To cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
