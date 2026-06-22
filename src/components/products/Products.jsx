import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Addidas",
    image: "https://loremflickr.com/1281/720",
    description: "addidas shoes",
  },
  {
    id: 2,
    title: "Addidas",
    image: "https://loremflickr.com/1282/720",
    description: "addidas shoes",
  },
  {
    id: 3,
    title: "Addidas",
    image: "https://loremflickr.com/1283/720",
    description: "addidas shoes",
  },
  {
    id: 4,
    title: "Addidas",
    image: "https://loremflickr.com/1284/720",
    description: "addidas shoes",
  },
];
function Products() {
  if (!DUMMY_PRODUCTS.length) {
    return <p>Please add some products!!</p>;
  }
  return (
    <>
      <h1>Products</h1>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <li key={item.id}>
            <ProductItem {...item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
