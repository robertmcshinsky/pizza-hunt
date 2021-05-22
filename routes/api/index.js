const router = require("express").Router();
const pizzaController = require("../../controllers/pizza-controller");
const pizzaRoutes = require("./pizza-routes");

////

router.use("/pizzas", pizzaRoutes);

////

module.exports = router;
