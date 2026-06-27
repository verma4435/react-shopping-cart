import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart.store";
function Cart() {
  const dispatch = useDispatch();

  const { items: data } = useSelector((state) => state.cart);

  function showModal() {
    dispatch(cartActions.showModal());
  }

  return (
    <span className="cart" onClick={showModal}>
      Cart {data.length ? `(${data.length})` : undefined}
    </span>
  );
}
export default Cart;
