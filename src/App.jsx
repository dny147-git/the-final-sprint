import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/product/ProductDetail";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <ShopMegaMenu /> */}
      <ProductDetail />
    </div>
  );
}

export default App;
