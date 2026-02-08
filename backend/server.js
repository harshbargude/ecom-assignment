const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors')


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());


// products,cart routess
const productRoutes = require('./routes/productRouts.js');
const cartRoutes = require("./routes/cartRoutes.js");

// i mount the product, cart controller
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// port listen
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
