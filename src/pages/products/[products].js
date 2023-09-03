import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Product Details</h1>
      <p>{router.query.products}</p>
    </div>
  );
};

export default ProductDetails;
