const router = require("express").Router();
const pizzaController = require("../../controllers/pizza-controller");
const pizzaRoutes = require("./pizza-routes");

const commentRoutes = require("./comment-routes");

////

router.use("/pizzas", pizzaRoutes);

router.use("/comments", commentRoutes);
////

module.exports = router;
