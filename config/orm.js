const connection = require("../config/connection");

// =========================                ==================================================
// ========================= CRUD Functions ==================================================
// =========================                ==================================================
var orm = {
    viewTasks: function (table, cb){
        var dbQuery = "SELECT * FROM " + table + ";";

        console.log(dbQuery);
        connection.query(dbQuery, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },

    createTask: function(table, cols, vals, cb){
        var dbQuery = "INSERT INTO " + table + "(" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";

        console.log(dbQuery);
        connection.query(dbQuery, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },

    updateTask: function(table, objColVals, condition, cd){
        var dbQuery = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;

        console.log(dbQuery);
        connection.query(dbQuery, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },

    deleteTask: function(table, condition, cd){
        var dbQuery = "DELETE FROM " + table + " WHERE " + condition;

        console.log(dbQuery);
        connection.query(dbQuery, function(err, res){
            if (err) throw err;
            cb(res);
        });
    }
};