var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
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
    else {
        connection = mysql.createConnection({
            host: "qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
            user: "esjyuugvnpdnxw83",
            password: "	oexnd1i79xdr1j2c",
            port: 3306,
            database: "kusl7gy4a0fz2yyj"
        });
    }
    console.log("Connection as id: " + connection.threadId);
});

module.exports = connection;