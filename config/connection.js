const mysql = require("mysql");

const connection = mysql.createConnection({
    ost: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bucket_listDB"
});

connection.connect(function(err){
    if (err) {
        console.error(" Error connecting: " + err.stack);
        return;
    }
    console.log("Connection as id: " + connection.threadId);
});

module.exports = connection;