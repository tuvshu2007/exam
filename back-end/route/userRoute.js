const express = require("express");
const router = express.Router();
const { 
    getUser,
    getUsers,
    createUser,
} = require('../controller/userController');

router
    .post('/', createUser)
    .patch('/', getUsers)
    .delete("/:id", getUser);

module.exports = router;