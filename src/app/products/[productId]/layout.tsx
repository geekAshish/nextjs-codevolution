import React from "react";

function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 className="text-red-700">Product Details Layout</h3>
      {children}
    </>
  );
}

export default ProductDetailsLayout;
