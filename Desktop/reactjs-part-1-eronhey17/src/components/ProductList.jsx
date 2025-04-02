import React from "react";

function ProductList() {
  const handleAddToCart = (product) => {
    console.log(`${product} added to cart!`);
  };

  return (
    <div className="product-list">
      <div className="product">
        <p>Sample Product</p>
        <button onClick={() => handleAddToCart("Sample Product")}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductList;