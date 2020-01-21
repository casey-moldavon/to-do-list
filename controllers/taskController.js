var express = require("express");
var task = require("../models/task");

var router = express.Router();

  router.get("/", function(req, res) {
    task.viewAllTasks(function(data) {
      var hbObject = {
        tasks: data
      };
      console.log(hbObject);
      res.render("index", hbObject);
    });

  router.post("/api/tasks", function(req, res) {
    task.create([
      "task", "completed"
    ], [
      req.body.task, req.body.completed
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/tasks/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition :", condition);
  
    task.update({
      completed: req.body.completed
    }, condition, function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/tasks/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition :", condition);
  
    task.delete(condition, function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
});
  // Export routes for server.js to use.
  module.exports = router;



  