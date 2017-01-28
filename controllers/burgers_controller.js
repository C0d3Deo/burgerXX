var db = require("../models");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

  router.get("/burgers", function(req, res) {
    db.NewBurger.findAll({}).then(function(allBurgers) {
      var hbsObject = {
      burgers: allBurgers
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    });
  });

  router.post("/burgers/create", function(req, res) {
    db.NewBurger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(newBurger) {
      res.redirect("/burgers");
    });
  });

  // router.delete("/burgers", function(req, res) {
  //   db.NewBurger.destroy({
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(theBurger) {
  //     res.json(theBurger);
  //   });

  // });

  router.put("/burgers/update/:id", function(req, res) {
    console.log("devoured is currently " + typeof req.body.devoured);
    db.NewBurger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(updatedBurger) {
      res.redirect("/burgers");
    });
  });

  module.exports = router;
