var mysql = require('mysql');
 
var connection = mysql.createConnection(
    {
      host     : 'localhost',
      user     : 'root',
      password : 'alkadudhia',
      database : 'ebay',
    }
);
 
exports.executequery=function(query)
{

};
