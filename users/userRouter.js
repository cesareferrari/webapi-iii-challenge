const express = require('express');
const Users = require('./userDb.js');

const router = express.Router();

// POST /api/users/
router.post('/', async (req, res) => {
  try {
      const user = await Users.insert(req.body);
      res.status(201).json(user);
  } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Error adding the user'});
  }
});

router.post('/:id/posts', (req, res) => {

});

// GET /
router.get('/', async (req, res) => {
  try {
      const users = await Users.get();
      res.status(200).json(users);
  } catch (error) {
      res.status(500).json({message: 'Error retrieving the users'});
  }
});

// GET /1
router.get('/:id', async (req, res) => {
  try {
      const {id} = req.params;
      const user = await Users.getById(id);

      if (user) {
          res.status(200).json(user);
      } else {
          res.status(404).json({message: 'User not found'});
      }
  } catch (error) {
      res.status(500).json(error);
  }
});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
