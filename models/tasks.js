const orm = require("../config/orm");

var task = {
    createTask: function(cols, vals, cb) {
        orm.viewAllTasks("tasks", cols, vals, function(res){
            screen(res);
        });
    },

    viewAllTasks: function(cb) {
        orm.viewAllTasks("tasks", function(res){
            screen(res);
        });
    },

    updateTask: function(objectColVals, condition, cb) {
        orm.viewAllTasks("tasks", objectColVals, condition function(res){
            screen(res);
        });
    },

    deleteTasks: function(condition, cb) {
        orm.viewAllTasks("tasks",condition, function(res){
            screen(res);
        });
    }
};

module.exports = task;