import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart.store";
function Cart() {
  const dispatch = useDispatch();

  const { items: data } = useSelector((state) => state.cart);

  function addToCart() {
    dispatch(cartActions.addToCart(1));
  }

  return (
    <span className="cart" onClick={addToCart}>
      Cart {data.length ? `(${data.length})` : undefined}
    </span>
  );
}
export default Cart;
