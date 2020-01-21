var orm = require("../config/orm");

var task = {

    viewAllTasks: function(cb) {
        orm.viewAllTasks("tasks", function(res){
            console.log("task.js: (view)" + res);
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.create("tasks", cols, vals, function(res){
            console.log("task.js: (create)" + res);
            cb(res);
        });
    },

    update: function(objectColVals, condition, cb) {
        orm.update("tasks", objectColVals, condition, function(res){
            console.log("task.js: (update)" + res);
            cb(res);
        });
    },

    delete: function(condition, cb) {
        orm.delete("tasks",condition, function(res){
            console.log("task.js: (delete)" + res);
            cb(res);
        });
    }
};

module.exports = task;