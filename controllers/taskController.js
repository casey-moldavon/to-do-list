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
  });


  router.post("/api/tasks", function(req, res) {
    task.create(
      req.body, function(result) {
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
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;



  