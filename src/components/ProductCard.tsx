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
      <img src={productImg} />
      <div className="product-text">
        <p>{productName}</p>
        <p>R{productPrice}</p>
        <div className="ratings">
          <p>{starIcon}</p>
          <p>{productRating}</p>
        </div>
      </div>
    </div>
  );
}
