import { featuredBrandsImgList } from "../data/lists";

export default function FeaturedBrands() {
  return (
    <div className="featured-brands">
      <h3>Featured Brands</h3>
      <div className="featured-brands-list">
        {featuredBrandsImgList.map((featuredBrand) => {
          return <img key={featuredBrand.id} src={featuredBrand.src} alt="" />;
        })}
      </div>
    </div>
  );
}
