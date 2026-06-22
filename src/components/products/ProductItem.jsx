import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart.store";

import "./ProductItem.css";

function ProductItem({ title, price, image, description }) {
  const dispatch = useDispatch();
  function addToCart() {
    dispatch(cartActions.addToCart({ title, price }));
  }
  return (
    <article>
      <img className="product-item-img" src={image} alt={title} />
      <h2>{title}</h2>
      <p>
        {description} {price}
      </p>
      <button onClick={addToCart}>Add To Cart</button>
    </article>
  );
}

export default ProductItem;
