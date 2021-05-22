const Pizza = require("../models");

////

const pizzaController = {
  // GET ALL PIZZA
  getAllPizza: function (req, res) {
    Pizza.find({})
      .then((dbPizzaData) => res.json(dbPizzaData))
      .catch((e) => {
        console.log(e);
        res.status(400).json(e);
      });
  },
  // GET A SINGLE PIZZA BY IT'S ID
  getPizzaById: function (req, res) {
    Pizza.findOne({ _id: params.id })
      .then((dbPizzaData) => {
        if (!dbPizzaData) {
          res.status(404).json({ message: "No Pizza found with this Id" });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch((e) => {
        console.log(e);
        res.status(400).json(e);
      });
  },
  // CREATE A NEW PIZZA
  createPizza: function ({ body }, res) {
    Pizza.create(body)
      .then((dbPizzaData) => res.json(dbPizzaData))
      .catch((e) => res.status(400).json(e));
  },

  // UPDATE A PIZZA
  updatePizza: function ({ params, body }, res) {
    Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbPizzaData) => {
        if (!dbPizzaData) {
          res.status(404).json({ message: "No pizza found with this id!" });
        }
        res.json(dbPizzaData);
      })
      .catch((e) => res.status(400).json(e));
  },
  // DELETE A PIZZA
  deletePizza: function ({ params }, res) {
    Pizza.findOneAndDelete({ _id: params.id })
      .then((dbPizzaData) => {
        if (!dbPizzaData) {
          res.status(404).json({ message: "No pizza found with this id!" });
        }
        res.json(dbPizzaData);
      })
      .catch((e) => res.status(400).json(e));
  },
};

////

module.exports = pizzaController;
