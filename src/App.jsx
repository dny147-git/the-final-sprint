import "./App.css";
import HowToEnjoy from "./components/Enjoy";
import ExpertVideoCarousel from "./components/ExpertVideoCarousel";
import Header from "./components/Header";
import IM8Ambassadors from "./components/IM8Ambassadors/IM8Ambassadors";
import IM8ComparisonTable from "./components/IM8ComparisonTable";
import IM8PillarsSection from "./components/IM8PillarsSection";
import IM8SavingsSection from "./components/IM8SavingsSection";
import IM8StarterKit from "./components/IM8StarterKit";
import Inside from "./components/Inside";
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
      <IM8SavingsSection />
      <IM8ComparisonTable />
      <IM8PillarsSection />
      <ExpertVideoCarousel />
      <Inside />
      <HowToEnjoy />
      <IM8StarterKit />
      <IM8Ambassadors />
    </div>
  );
}

export default App;
