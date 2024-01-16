"use client";
import Link from "next/link";

function Product() {
  const productNavLink = [
    { name: "Product 1", link: "1" },
    { name: "Product 2", link: "2" },
    { name: "Product 3", link: "3" },
    { name: "Product 100", link: "100" },
  ];
  return (
    <>
      <h1>Product List</h1>
      {productNavLink &&
        productNavLink.map((product, i) => {
          return (
            <div key={i} className="p-1">
              <Link href={product.link}>{product.name}</Link>
            </div>
          );
        })}
    </>
  );
}

export default Product;
