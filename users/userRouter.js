const express = require('express');
const Users = require('./userDb.js');

const router = express.Router();

// /api/users/
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

router.get('/', async (req, res) => {
  try {
      const users = await Users.get();
      res.status(200).json(users);
  } catch (error) {
      res.status(500).json({message: 'Error retrieving the users'});
  }
});

router.get('/:id', (req, res) => {

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
