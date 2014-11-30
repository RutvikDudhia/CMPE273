
var mysql = require('mysql');
exports.registerRedirect=function(req,res)
{
res.render('ejs_register');	

}
exports.register =function (req,res)
{
	var username = req.param('TextUserId');
	var password = req.param('pass');
	var repassword = req.param('rpass');
	var securityQuestion = req.param('canned');
	var answer = req.param('myanswer');
	
	if(username===undefined||pasword===undefined||repassword===undefined||securityQuestion===undefined||answer===undefined)
		{
		
		
		
		}
	else if(password!==repassword)
		{
		//code to send to error page
		}
	else {	
	var connection = mysql.createConnection('localhost://root:alkadudhia@localhost/ebay');
	connection.connect();	
	var queryString = 'Insert into Person values("'+username+'","'+password+'","'+canned+'","'+answer+'")';
	
	console.log(queryString);
	connection.query(queryString, function(err, results) {
	    if (err)
	    	{
	    		console.log(err);
	    		connection.end();
	    	}
	    else
	    	{
	    	if(results.length===0)
	    		{
	    		res.render('index');
	    		}
	    	else
	    		{
	    			res.render("Homepage.ejs")
	    		
	    		}
	    	 	
	    	 
	    		
	    	}
	  });

	console.log(username);	
	}
};


