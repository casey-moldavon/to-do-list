var connection = require("../config/connection.js");

// =========================                ==================================================
// ========================= Helper Methods ==================================================
// =========================                ==================================================

//got these functions from activity 17-CatsApp within 13-MVC
// function createQmarks(number){
//     var array = [];
//     for (var i = 0; i < number; i++){
//         array.push("?");
//     }
//     return array.toString();
// }

function objectToSql(object){
    var array = [];
    for (var key in object){
        var value = object[key];
        if (Object.hasOwnProperty.call(object, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'" ;
            }
            array.push(key + "=" + value)
        }
    }
    return array.toString();
}


// =========================                ==================================================
// ========================= CRUD Functions ==================================================
// =========================                ==================================================
var orm = {

    viewAllTasks: function (table, cb){
        var dbQuery = "SELECT * FROM " + table + ";";

        console.log(dbQuery);
        connection.query(dbQuery, function(err, res){
            if (err) {throw err;}
            cb(res);
        });
    },

    create: function(table, data, cb){ 
        var dbQuery = "INSERT INTO " + table + " SET ?";

        console.log(dbQuery);
        connection.query(dbQuery, data, function(err, res){
            if (err) {throw err;}
            cb(res);
        });
    },

    update: function(table, objColVals, condition, cb){
        var dbQuery = "UPDATE " + table + " SET " + objectToSql(objColVals) + " WHERE " + condition;

        console.log(dbQuery);
        connection.query(dbQuery, function(err, res){
            if (err) {throw err;}
            cb(res);
        });
    },
    

    delete: function(table, condition, cb){
        var dbQuery = "DELETE FROM " + table + " WHERE " + condition;

        console.log(dbQuery);
        connection.query(dbQuery, function(err, res){
            if (err) {throw err;}
            cb(res);
        });
    }
};

module.exports = orm;