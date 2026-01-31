import "./App.css";
import HowToEnjoy from "./components/Enjoy";
import ExpertVideoCarousel from "./components/ExpertVideoCarousel";
import FaqSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IM8Ambassadors from "./components/IM8Ambassadors/IM8Ambassadors";
import IM8ComparisonTable from "./components/IM8ComparisonTable";
import IM8Experts from "./components/IM8Experts";
import IM8PillarsSection from "./components/IM8PillarsSection";
import IM8SavingsSection from "./components/IM8SavingsSection";
import IM8StarterKit from "./components/IM8StarterKit";
import Inside from "./components/Inside";
import Navbar from "./components/Navbar";
import OrganSystemsSection from "./components/OrganSystemsSection";
import PremiumCoreNutrition from "./components/PremiumCoreNutrition";
import ProductDetail from "./components/product/ProductDetail";
import ProvenResultsSection from "./components/ProvenResultsSection";
import ReviewsSection from "./components/ReviewSection";
import StickyAddToCart from "./components/ui/StickyAddToCart";
import StickyPromoBar from "./components/ui/StickyPromoBar";

function App() {
  return (
    <div>
      <StickyPromoBar />
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
      <IM8Experts />
      <PremiumCoreNutrition />
      <FaqSection />
      <Footer />
      <StickyAddToCart />
    </div>
  );
}

export default App;
