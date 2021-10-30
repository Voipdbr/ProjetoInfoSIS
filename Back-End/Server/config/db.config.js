const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host : 'localhost',

    user : 'root',

    password : '',

    database : 'infosis-dates-car',
});

dbConnection.connect(function(err){
    if(err) throw err;

    console.log("Database Connected!");

})

module.exports = dbConnection;
