const express = require('express')

const router = express.Router()

const {
    addUsers,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
} = require("../controllers/user");

const { 
    register,
    login, 
    checkAuth 
} = require("../controllers/auth");

const { auth } = require("../middlewares/auth");

// Route
router.post("/user", addUsers);
router.get("/users",getUsers);
router.get("/user/:id", getUser);
router.delete("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);

module.exports = router;