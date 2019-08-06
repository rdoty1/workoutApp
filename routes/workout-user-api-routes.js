var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/users/", function(req, res) {
    db.NewUsers.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};

