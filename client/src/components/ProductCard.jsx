import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({tittle,price,image}) => {
  return (
    <div className="productContainer max-w-[280px] shadow-xl w-full pb-[10px]">
      <div className="product-img-container w-full  min-h-[280px]">
        <img src={image} className="" alt="" />
      </div>
      <div className="product-content-container">
        <div className="main-content-container py-[15px] flex flex-col gap-[12px]">
          <div className="pro-title-detils flex justify-between items-center text-[20px] px-[10px]">
            <p>
              <b>{tittle}</b>
            </p>
            <p>
              <b>4.1/5 ⭐</b>
            </p>
          </div>
          <p className="px-[10px]">
            ₹{price} -{" "}
            <span className="line-through">₹{Math.ceil(price * 2.2)}</span>
          </p>
        </div>
        <div className="pro-btn-container flex justify-between gap-[8px] px-[10px] items-center text-[15px] whitespace-nowrap">
          <Link
            to={"/buynow"}
            className="py-[8px] px-[22px]  bg-[var(--primary-color)] text-white font-bold"
          >
            Buy Now
          </Link>
          <Link
            onClick={() => {
              alert("your product added");
            }}
            className="py-[8px] px-[22px]  font-bold bg-[var(--secondary-color)] text-white"
          >
            Add To cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
