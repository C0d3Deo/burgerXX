var db = require("../models");

module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    db.NewBurger.findAll({}).then(function(allBurgers) {
      res.json(allBurgers);
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.NewBurger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(newBurger) {
      res.json(newBurger);
    });
  });

  // app.delete("/api/burgers", function(req, res) {
  //   db.NewBurger.destroy({
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(theBurger) {
  //     res.json(theBurger);
  //   });

  // });

  app.put("/api/burgers", function(req, res) {

    db.NewBurger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(updatedBurger) {
      res.json(updatedBurger);
    });
  });
};
