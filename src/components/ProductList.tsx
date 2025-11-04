import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productCardData } from "../data/lists";
import ProductCard from "./ProductCard";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function ProductList() {
  return (
    <div className="product-list-panel">
      <h4>Recently viewed</h4>
      <div className="product-list">
        {productCardData.map((productCard) => {
          return (
            <ProductCard
              key={productCard.id}
              id={productCard.id}
              productImg={productCard.productImg}
              productName={productCard.productName}
              productPrice={productCard.productPrice}
              productRating={productCard.productRating}
              starIcon={<FontAwesomeIcon icon={faStar} />}
            />
          );
        })}
      </div>
    </div>
  );
}
