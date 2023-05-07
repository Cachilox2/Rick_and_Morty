const {getCharById} = require("../controllers/getCharById");
// const { postFav, deleteFav } = require("../controllers/handleFavorites");
const login = require("../controllers/login");
const register = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");


const { Router } = require("express");

const router = Router();

router.get("/character/:id", (req,  res) => {
  getCharById(req, res)
});

router.get("/login", (req, res) => {
  login(req, res)
});

router.post("/login", (req, res) => {
  register(req, res)
});

router.post("/fav", (req, res) => {
  postFav(req, res)
});

router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res)
});

module.exports = router;
