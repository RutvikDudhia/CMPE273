
var mysql = require('mysql');
exports.signinRedirect = function(req,res)
{
res.render('ejs_signin');	
}
exports.signin =function (req,res)
{
	var username = req.param('userid');
	var password = req.param('password');
	var connection = mysql.createConnection('localhost://root:alkadudhia@localhost/ebay');
	connection.connect();	
	var queryString = 'SELECT * FROM person where email="'+username+'" and password="'+password+'"';	 
	console.log(queryString);
	connection.query(queryString, function(err, results) {
	    if (err) 
	    	{
	    	
	    	res.send('0');
	    	res.render('ejs_signinerrorpage.ejs')
	    	
	    	}
	    else
	    	{
	    	
	    	if(results.length===0)
	    	{
	    		res.render('ejs_signinerrorpage.ejs')
	    		
	    	}
	    		
	    	else
	    		{
	    		res.render("Homepage.ejs")
	    		
	    		}
	    	}
	  });

	console.log(username);	

};


