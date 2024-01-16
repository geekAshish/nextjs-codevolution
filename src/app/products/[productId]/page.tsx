import { Metadata } from "next";

type Props = { params: { productId: string } };

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `product ${params.productId}`,
  };
};

function ProductDetails({ params }: Props) {
  console.log(params);

  return (
    <>
      <h1>Product details about {params.productId}</h1>
    </>
  );
}

export default ProductDetails;
