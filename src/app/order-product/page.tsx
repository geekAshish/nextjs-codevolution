"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("your order is placed");
    router.push("/");
    // router.replace("/"); // if you want to replace the history instead of pushing
    // router.back() // to go back the previous history stack
    // router.forward() // to go back the next history stack
  };
  return (
    <>
      <div>
        <h1>Place an Order Here</h1>
        <button onClick={handleClick}>Place Order</button>
      </div>
    </>
  );
};

export default OrderProduct;
