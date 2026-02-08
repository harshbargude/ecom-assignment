const express = require("express");
const router = express.Router();
const validateProductCart = require("../middleware/validateCart.js");

let cart = [];

router.get("/", (req, res) => {
  res.json(cart);
});

router.post("/", validateProductCart, (req, res) => {

  const { productId, quantity } = req.body;

  const doIhaveThisItemInMyCart = cart.find(
    (item) => (item.productId === productId),
  );

  if (doIhaveThisItemInMyCart) {
    doIhaveThisItemInMyCart.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }

  res.status(201).json({ message: "Item added to Cart", cart });
});

module.exports = router;
