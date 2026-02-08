"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

import { Product } from "@/types/product";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, amount: number) => void;
  cartCount: number;
}

// const CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const[isDataReady, setDataReady] = useState(false);

  useEffect(()=>{
    const storedCart = localStorage.getItem("cart");
    if(storedCart){
      setCart(JSON.parse(storedCart));
    }

    setDataReady(true);
  }, []);

  useEffect(()=>{
    if(isDataReady){
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  },[cart, isDataReady])

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const doItemsExist = prevCart.find(item => item.id === product.id);
      if (doItemsExist) {
        return prevCart.map(item => 
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    })
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: number, amount: number) => {
    setCart((prev) => 
      prev.map((item) => 
        item.id === productId ? {...item, quantity: Math.max(1, item.quantity + amount)} : item
      )  
    )
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};