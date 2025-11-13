import React from "react";
import ProductCard from "./ProductCard";
import { top4PdoructsList } from "../assets/assets";

const Top4Product = () => {
  return (
    <div className="container flex border flex-col my-[50px]">
      <p className="text-center my-[40px] text-4xl">
        <b>Top 4 Products</b>
      </p>
          <div className="top-pro-container flex gap-[32px]">
              {top4PdoructsList.map((el) => (<ProductCard tittle={el.title} price={el.price} image={el.thumbnail} />))}
          </div>
    </div>
  );
};

export default Top4Product;
