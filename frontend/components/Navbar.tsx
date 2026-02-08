import Link from "next/link";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <nav
      style={{
        background: "crimson",
        // padding: "1.5rem 1.5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link
        style={{
          padding: "1.3rem 1.3rem",
          fontFamily: "system-ui",
          fontWeight: "bold",
          textDecoration: "none",
          color: "white",
        }}
        href={"/"}
      >
        E-Com
      </Link>
      <Link
        href={"/cart"}
        style={{
          fontFamily: "system-ui",
          fontWeight: "bold",
          textDecoration: "none",
          color: "white",
          background: "#97d20d",
          padding: "1.3rem 1.3rem",
        }}
      >
        <span style={{backgroundColor:'crimson', padding:'0.2rem', borderRadius:'50%'}}>🛒</span>Cart {cartCount}
      </Link>
    </nav>
  );
};

export default Navbar;
