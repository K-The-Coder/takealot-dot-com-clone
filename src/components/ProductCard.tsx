interface CardProps {
  id: number;
  productImg: string;
  productName: string;
  productPrice: string | number;
  productRating: string | number;
  starIcon: string | React.ReactNode;
}

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
          <p>{starIcon}</p>
          <p>{productRating}</p>
        </div>
      </div>
    </div>
  );
}
