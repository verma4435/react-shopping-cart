import ProductItem from "./ProductItem";
import "./Products.css";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    image: "https://loremflickr.com/1281/720",
    description: "Product shoes",
  },
  {
    id: 2,
    title: "Product 2",
    price: 10,
    image: "https://loremflickr.com/1282/720",
    description: "Product shoes",
  },
  {
    id: 3,
    title: "Product 3",
    price: 10,
    image: "https://loremflickr.com/1283/720",
    description: "Product shoes",
  },
  {
    id: 4,
    title: "Product 4",
    price: 10,
    image: "https://loremflickr.com/1284/720",
    description: "Product shoes",
  },
  {
    id: 5,
    title: "Product 5",
    price: 10,
    image: "https://loremflickr.com/1285/720",
    description: "Product shoes",
  },
  {
    id: 6,
    title: "Product 6",
    price: 10,
    image: "https://loremflickr.com/1286/720",
    description: "Product shoes",
  },
  {
    id: 7,
    title: "Product 7",
    price: 10,
    image: "https://loremflickr.com/1287/720",
    description: "Product shoes",
  },
  {
    id: 8,
    title: "Product 8",
    price: 10,
    image: "https://loremflickr.com/1288/720",
    description: "Product shoes",
  },
  {
    id: 9,
    title: "Product 9",
    price: 10,
    image: "https://loremflickr.com/1289/720",
    description: "Product shoes",
  },
  {
    id: 10,
    title: "Product 10",
    price: 10,
    image: "https://loremflickr.com/1290/720",
    description: "Product shoes",
  },
  {
    id: 11,
    title: "Product 11",
    price: 10,
    image: "https://loremflickr.com/1291/720",
    description: "Product shoes",
  },
  {
    id: 12,
    title: "Product 12",
    price: 10,
    image: "https://loremflickr.com/1292/720",
    description: "Product shoes",
  },
  {
    id: 13,
    title: "Product 13",
    price: 10,
    image: "https://loremflickr.com/1293/720",
    description: "Product shoes",
  },
  {
    id: 14,
    title: "Product 14",
    price: 10,
    image: "https://loremflickr.com/1294/720",
    description: "Product shoes",
  },
  {
    id: 15,
    title: "Product 15",
    price: 10,
    image: "https://loremflickr.com/1295/720",
    description: "Product shoes",
  },
  {
    id: 16,
    title: "Product 16",
    price: 10,
    image: "https://loremflickr.com/1296/720",
    description: "Product shoes",
  },
  {
    id: 17,
    title: "Product 17",
    price: 10,
    image: "https://loremflickr.com/1297/720",
    description: "Product shoes",
  },
  {
    id: 18,
    title: "Product 18",
    price: 10,
    image: "https://loremflickr.com/1298/720",
    description: "Product shoes",
  },
];
function Products() {
  if (!DUMMY_PRODUCTS.length) {
    return <p>Please add some products!!</p>;
  }
  return (
    <>
      <h1>Products</h1>
      <ul className="product-container">
        {DUMMY_PRODUCTS.map((item) => (
          <li className="product-item" key={item.id}>
            <ProductItem {...item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
