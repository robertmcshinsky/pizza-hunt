const router = require("express").Router();

////

const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza,
} = require("../../controllers/pizza-controller");
const { create } = require("../../models/Pizza");

////

router.route("/").get(getAllPizza).post(createPizza);

router.route("/:id").get(getPizzaById).put(updatePizza).delete(deletePizza);

////

module.exports = router;
