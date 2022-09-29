const { models: { Book, Cart, Book_Cart }} = require('../db');
const router = require('express').Router();

//GET /cart/:cartId
router.get('/:cartId', async (req, res, next) =>{
    try {
      const cart = await Cart.findAll({
        where: {
          cartId: req.params.cartId
        },
        include: [
          {
            model: Book,
            through: { attributes: [] }
          }
      ]})
      res.json(cart)
    } catch (err) {
      next(err);
    }
  });

  //POST /cart/:userId
  router.post('/:id', async (req, res, next) => {
    try {
      const [userCart, created] = await Cart.findOrCreate({
        where: {
          userId: req.params.id,
          status: "Open",
        },
      });
        res.json(userCart)
    } catch (err) {
      next(err);
    }
  });
  
  //create Book_Cart Instance
  //POST /cart/:cartId
  router.post('/:cartId/:bookId', async (req, res, next) => {
    try {
      let cart =  await Cart.findOne({
        where: {
          id: req.params.cartId
        },
        include: { model: Book }
      });
      let row =  await cart.addBook(req.params.bookId)
      res.send(row)
    } catch (err) {
      next(err);
    }
  })
  
  router.get("/:id", async (req, res, next) => {
    try {
      const userCart = await Cart.findOne( { where: {
        userId: req.params.id,
        status: "Open"
      }})
      res.json(userCart)
    } catch (err) {
      next(err)
    }
  })
  
  module.exports = router;