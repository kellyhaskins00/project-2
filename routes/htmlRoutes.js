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

  // Load beer page
  app.get("/views/index.handlebars", function (req, res) {
    console.log("i am here!");
    res.render("index", {
      // msg: "Welcome!"
    });
  });

    // Load wine page
  app.get("/views/wine.handlebars", function (req, res) {
    console.log("i am here!");
    res.render("wine", {
      // msg: "Welcome!"
    });
  });

  // Load coffee page
  app.get("/views/coffee.handlebars", function (req, res) {
    console.log("i am here!");
    res.render("coffee", {
      // msg: "Welcome!"
    });
  });

    // Load date page
    app.get("/views/date.handlebars", function (req, res) {
      console.log("i am here!");
      res.render("date", {
        // msg: "Welcome!"
      });
    });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
