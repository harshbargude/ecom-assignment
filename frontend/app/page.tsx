"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responce = await fetch("http://localhost:5000/api/products");
        if (responce.ok) {
          const data = await responce.json();
          setProducts(data);
        }
      } catch (error) {
        console.error("Failed to fetch th eerr", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main
      style={{
        maxWidth: "1800px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily:'system-ui'
      }}
    >
      <Navbar/>
      <h1 style={{ textAlign: "center", marginBottom: "30px", fontFamily:'system-ui' }}>Products</h1>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fill, minmax(250px, 1fr))',
        gap:'20px'
      }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
