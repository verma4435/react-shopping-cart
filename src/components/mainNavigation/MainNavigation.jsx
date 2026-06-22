import Cart from "../cart/Cart";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <ul>
      <li>Products</li>
      <li className="cart">
        <Cart />
      </li>
    </ul>
  );
}

export default MainNavigation;
