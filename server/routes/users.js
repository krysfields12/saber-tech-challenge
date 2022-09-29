const router = require('express').Router();
const { models: { User }} = require('../db');

// GET /users
router.get('/', async (req, res, next) => {
    try {
      const users = await User.findAll({
        attributes: ['id', 'email', 'username']
      })
      res.json(users)
    } catch (err) {
      next(err)
    }
  })
  
  // GET /users/:id
  router.get('/:id', async (req, res, next) => {
    try {
      const users = await User.findOne({
        where: {
          id: req.params.id
        },
        attributes: ['id', 'username', 'email']
      })
      res.json(users)
    } catch(err) {
      next (err)
    }
  })
  
  //POST /users/:id
  router.post('/', async (req, res, next) => {
    try {
      res.json(await User.create(req.body));
    } catch (error) {
      next(error);
    }
  });
  
  //PUT /users/:id
  router.put('/:id', async (req, res, next) => {
    try {
      const userToUpdate = await User.findByPk(req.params.id);
      res.json(await userToUpdate.update(req.body));
    } catch (error) {
      next(error);
    }
  });
  
  //DELETE /users/:id
  router.get('/:id', async (req, res, next) => {
    try {
      const userToDelete = await User.findByPk(req.params.id);
      await userToDelete.destroy()
      res.json(userToDelete)
    } catch(err) {
      next (err)
    }
  })
  module.export = router;