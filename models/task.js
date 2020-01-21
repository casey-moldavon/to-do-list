var orm = require("../config/orm.js");

var task = {
    create: function(cols, vals, cb) {
        orm.create("tasks", cols, vals, function(res){
            cb(res);
        });
    },

    read: function(cb) {
        orm.read("tasks", function(res){
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