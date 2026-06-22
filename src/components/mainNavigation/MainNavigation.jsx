import Cart from "../Cart/Cart";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <ul className="main-nav-container">
      <li>Products</li>
      <li className="cart">
        <Cart />
      </li>
    </ul>
  );
}

export default MainNavigation;
