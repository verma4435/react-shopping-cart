import { useState } from "react";

function Cart() {
  const [itemCounter, setItemCounter] = useState(0);

  function addToCart() {
    setItemCounter((count) => count + 1);
  }

  return (
    <span class="cart" onClick={addToCart}>
      Cart {itemCounter ? `(${itemCounter})` : undefined}
    </span>
  );
}
export default Cart;
