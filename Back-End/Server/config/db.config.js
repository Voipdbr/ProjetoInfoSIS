const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host : 'sql248.main-hosting.eu',

    user : 'u849481039_teste2',

    password : 'Senhasegura2',

    database : 'u849481039_teste2',
});

dbConnection.connect(function(err){
    if(err) throw err;

    console.log("Database Connected!");

})

module.exports = dbConnection;
