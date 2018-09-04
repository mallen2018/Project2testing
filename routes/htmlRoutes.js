var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Pickapal.findAll({}).then(function (dbPickapal) {
      res.render("index", {
        msg: "Welcome!",
        Pickapal: dbPickapal
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/pickapal/:id", function (req, res) {
    db.Pickapal.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbPickapal) {
      res.render("example", {
        Pickapal: dbPickapal
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
