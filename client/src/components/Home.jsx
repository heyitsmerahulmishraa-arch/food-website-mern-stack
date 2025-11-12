import React from "react";
import MainBanner from "./MainBanner";
import ProductCard from "./ProductCard";
import Top4Product from "./Top4Product";

const Home = () => {
  let Proloop = [
    { title: "mashal", price: "599" },
    { title: "chilli mashala", price: "599" },
    { title: "tasty mashala", price: "299" },
    { title: "blink mashala", price: "699" },
    { title: "green mashala", price: "199" },
  ];
  return (
    <>
      <MainBanner />
      <div className="pro-flex-container my-[40px] border flex flex-wrap gap-[32px] max-w-[1200px] w-full mx-auto">
        {Proloop.map((itme) => (
          <ProductCard tittle={itme.title} price={itme.price} />
        ))}
      </div>
      <Top4Product />
    </>
  );
};

export default Home;