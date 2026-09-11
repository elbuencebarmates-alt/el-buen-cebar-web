import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductModalProvider } from "./context/ProductModalContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import ProductModal from "./components/ProductModal";
import WhatsAppFloatButton from "./components/WhatsAppFloatButton";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiesPolicy from "./pages/CookiesPolicy";

export default function App() {
  return (
    <CartProvider>
      <ProductModalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/terminos-y-condiciones" element={<TermsAndConditions />} />
          <Route path="/politica-de-cookies" element={<CookiesPolicy />} />
        </Routes>
        <Footer />
        <WhatsAppFloatButton />
        <CartDrawer />
        <ProductModal />
      </ProductModalProvider>
    </CartProvider>
  );
}
