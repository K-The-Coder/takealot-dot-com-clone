import type { CardProps } from "../interfaces";

export default function ProductCard({
  productImg,
  productName,
  productPrice,
  productRating,
  starIcon,
}: CardProps) {
  return (
    <div className="product-card">
      <img className="product-image" src={productImg} />
      <div className="product-text">
        <p className="product-name">{productName}</p>
        <p className="product-price">R{productPrice}</p>
        <div className="product-ratings">
          <p>{starIcon as React.ReactNode}</p>
          <p>{productRating}</p>
        </div>
      </div>
    </div>
  );
}
