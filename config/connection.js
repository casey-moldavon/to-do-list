var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "password",
//     database: "bucket_listDB"
// });

// connection.connect(function(err){
//     if (err) {
//         console.error(" Error connecting: " + err.stack);
//         return;
//     }
//     console.log("Connection as id: " + connection.threadId);
// });

// module.exports = connection;


var connection;
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.envJAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "bucket_listDB"
    });
};

connection.connect();
module.exports = connection;