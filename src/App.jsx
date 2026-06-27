import "./App.css";
import CartModal from "./components/Cart/CartModal";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import Products from "./components/Products/Products";
function App() {
  return (
    <>
      <MainNavigation />
      <Products />
      <CartModal />
    </>
  );
}

export default App;
