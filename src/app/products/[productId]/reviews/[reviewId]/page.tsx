import { notFound } from "next/navigation";

function ProductReview({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <>
      <h1>
        Review no. {params.reviewId} for product {params.productId}
      </h1>
    </>
  );
}

export default ProductReview;
