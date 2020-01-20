const connection = require("../config/connection");

// =========================                ==================================================
// ========================= Helper Methods ==================================================
// =========================                ==================================================

//got these functions from activity 17-CatsApp within 13-MVC
function createQmarks(number){
    var array = [];
    for (var i = 0; i < number; i++){
        array.push("?");
    }
    return array.toString();
}

function objectToSql(object){
    var array = [];
    for (var key in object){
        var value = object[key];
        if (Object.hasOwnProprty.call(object, key)) {
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

    //Brain method of CRUD functions
    createTask: function(table, cols, vals, cb){
        var dbQuery = "INSERT INTO " + table + "(" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";

        console.log(dbQuery);
        connection.query(dbQuery, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },

    viewAllTasks: function (table, cb){
        var dbQuery = "SELECT * FROM " + table + ";";

        console.log(dbQuery);
        connection.query(dbQuery, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },

    updateTask: function(table, objColVals, condition, cd){
        var dbQuery = "UPDATE " + table + " SET " + objectToSql(objColVals) + " WHERE " + condition;

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

module.expores