/* eslint-disable react/prop-types */
import "./Products.css";
import Product from "./Product";

export function Products({ products }) {

  return (
    <main className="products">
      <ul>
        {products.map((product, index) => {

          return <Product key={index} product={product} />
        
        })}
      </ul>
    </main>
  );
}
