const validateCartItem = (req, res, next) =>{

    
  if (!req.body) {
    return res.status(400).json({ error: "No data provided" });
  }

  const{productId, quantity} = req.body;

  if(!productId){
    return res.status(400).json({
      error: "productId and quantity is missing"
    });
  }

  if(quantity < 1){
    return res.status(400).json({
      error: "quantity should be minimun 1"
    });
  }

  next();

}

module.exports = validateCartItem;