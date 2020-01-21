var orm = require("../config/orm.js");

var task = {

    viewAllTasks: function(cb) {
        orm.viewAllTasks("tasks", function(res){
            cb(res);
        });
    },

    create: function(data, cb) {
        orm.create("tasks", data, function(res){
            cb(res);
        });
    },

    update: function(objectColVals, condition, cb) {
        orm.update("tasks", objectColVals, condition, function(res){
            cb(res);
        });
    },

    delete: function(condition, cb) {
        orm.delete("tasks",condition, function(res){
            cb(res);
        });
    }
};

module.exports = task;