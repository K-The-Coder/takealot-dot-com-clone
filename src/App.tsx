import FeaturedBrands from "./components/FeaturedBrands";
import ImageSlideShow from "./components/ImageSlideShow";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import SubHeader from "./components/SubHeader";

function App() {
  return (
    <>
      <NavBar />
      <SubHeader />
      <ImageSlideShow />
      <FeaturedBrands />
      <ProductList />
    </>
  );
}

export default App;
