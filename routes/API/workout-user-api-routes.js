var db = require("../../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the posts
  app.get("/api/users/", function(req, res) {
    db.User.findAll({})
      .then(function(dbUsers) {
        res.json(dbUsers);
        console.log(res);
        console.log("hello")
        console.log(dbUsers);
      });
  });
};

