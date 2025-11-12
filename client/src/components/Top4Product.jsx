import React from "react";
import ProductCard from "./ProductCard";


const Top4Product = () => {
  let topproduct = [
    { tittle: "new mashal", Price: "999" },
    { tittle: "juba keshri", Price: "499" },
    { tittle: "pan mashala", Price: "499" },
    { tittle: "dilbaag", Price: "99" },
  ];
  return (
    <div className="flex border flex-col max-w-[1200px] my-[50px] mx-auto w-full">
      <p className="text-center my-[40px] text-4xl">
        <b>Top 4 Products</b>
      </p>
          <div className="top-pro-container flex gap-[32px]">
              {topproduct.map((el) => (<ProductCard tittle={el.tittle} price={el.Price} />))}
          </div>
    </div>
  );
};

export default Top4Product;
