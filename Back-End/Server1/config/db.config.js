const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host : 'localhost',
    
    port: 5500,

    user : 'root',

    password : '',

    database : 'infosis-dates-car',
});

dbConnection.connect(function(err){
    if(err) throw err;

    console.log("Database Connected!");

})

module.exports = dbConnection;
