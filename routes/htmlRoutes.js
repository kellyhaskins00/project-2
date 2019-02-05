var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });
    // Load map page
    app.get("/views/layouts/map.handlebars", function (req, res) {
      console.log("i am here!");
      res.render("map", {
        msg: "Welcome!"
      });
    });// Load game page
    app.get("/views/views/layouts/game.handlebars", function (req, res) {
      console.log("this is the game!");
      res.render("game", {
        msg: "Welcome!"
      });
    });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
