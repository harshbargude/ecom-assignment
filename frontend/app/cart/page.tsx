"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import "@/style/style.css";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      style={{
        padding: "50px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "system-ui",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Shopping Cart</h1>
        <h4>
          <Link
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#f4f4f4",
              color: "#000000",
              border: "none",
              marginTop: "20px",
              cursor: "pointer",
              textDecoration: "none",
              borderRadius: "8px",
            }}
            href={"/"}
          >
            Go Back ↩️
          </Link>
        </h4>
      </div>

      {cart.length === 0 ? (
        <p>Cart is empty!</p>
      ) : (
        <>
          <div>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #eee",
                      padding: "10px 0",
                      flexDirection: "row",
                    }}
                  >
                    <div>
                      <h3 style={{ margin: 0 }}>{item.name}</h3>
                      <p style={{ color: "#666", margin: "5px 0" }}>
                        ₹{item.price.toLocaleString()}
                      </p>
                      <span style={{display:'flex', gap:'8px'}}>
                        <button style={{backgroundColor:'#dc143c', border:'1px solid black', borderRadius:'50%', padding:'0 8px'}} onClick={() => updateQuantity(item.id, -1)}>
                          -
                        </button>
                         {item.quantity }
                        <button style={{backgroundColor:'crimson', border:'1px solid black', borderRadius:'50%', padding:'0 6px'}}  onClick={() => updateQuantity(item.id, +1)}>
                          +
                        </button>
                      </span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontWeight: "bold", margin: 0 }}>
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          color: "red",
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                          fontSize: "0.8rem",
                          marginTop: "5px",
                        }}
                      >
                        Remove 🗑️
                      </button>
                    </div>
                  </div>
                ))}
                <h2 style={{ textAlign: "right", marginTop: "20px" }}>
                  Total: ₹{total.toLocaleString()}
                </h2>
                <button
                  style={{
                    width: "100%",
                    padding: "15px",
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "none",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
