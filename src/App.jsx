import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OrganSystemsSection from "./components/OrganSystemsSection";
import ProductDetail from "./components/product/ProductDetail";
import ProvenResultsSection from "./components/ProvenResultsSection";
import ReviewsSection from "./components/ReviewSection";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <ShopMegaMenu /> */}
      <ProductDetail />
      <ProvenResultsSection />
      <ReviewsSection />
      <OrganSystemsSection />
    </div>
  );
}

export default App;
