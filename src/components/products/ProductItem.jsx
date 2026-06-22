import "./ProductItem.css";

function ProductItem({ title, image, description }) {
  return (
    <article>
      <img className="product-item-img" src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Add To Cart</p>
    </article>
  );
}

export default ProductItem;
