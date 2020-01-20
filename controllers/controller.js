const express = require("express");
const task = require("../models/task");

var router = express.Router();

router.get("/", function(req, res) {
    cat.viewAllTasks(function(data) {
      var HBObject = {
        tasks: data
      };
      console.log(HBObject);
      res.render("index", HBObject);
    });
  });
  
  router.post("/api/tasks", function(req, res) {
    cat.createTask([
      "task", "completed"
    ], [
      req.body.task, req.body.completed
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/tasks/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    task.updateTask({
      completed: req.body.completed
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.deleteTask("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    cat.deleteTask(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;