"use client"
import React from "react";
// import getData from "./api/get-data";

async function Page() {
  
  // const products = await getData();
  // const products = ["gym", "food", "coldrink", "pie"];
  const products = [
    { name: "gym", time: "1h" },
    { name: "food", time: "2h" },
    { name: "coldrink", time: "4h" },
  ];
  return (
    <div>
      {products.map((product) => {
        console.log("==>", product);
        return <h1>{product.name}</h1>;
      })}
    </div>
  );
}

export default Page;
