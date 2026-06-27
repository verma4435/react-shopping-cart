import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart.store";

import Modal from "../../UI/Modal";

function CartModal() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log({ cart });
  function handleClose() {
    dispatch(cartActions.hideModal());
  }
  return (
    <Modal open={cart.showModal} onClose={handleClose}>
      <h2>Cart</h2>
    </Modal>
  );
}
export default CartModal;
