import React from "react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
// import { format } from "path";

interface ProductCardProp {
  product: Product;
}

const ProductCard: React.FC<ProductCardProp> = ({ product }) => {

  const {addToCart} = useCart();

  return (
    <div
      style={{
        background: "white",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        textAlign: "center",
        padding: "16px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />

      <h3
        style={{
          margin: "10px",
          fontSize: "1.5rem",
        }}
      >
        {product.name}
      </h3>
      <div
        style={{
          alignItems: "left",
          textAlign: "left",
          padding:'0 12px'
        }}
      >
        <p
          style={{
            fontSize:'23px',
            color: "#2a2a2a",
            fontWeight: "bold",
            fontFamily:'monospace'
          }}
        >
          <span style={{fontSize:'15px'}}>₹</span>{product.price}
        </p>
      </div>
      <button
        onClick={() => addToCart(product)}
        style={{
          backgroundColor: "#000",
          color: "#ffffff",
          borderRadius: "4px",
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
