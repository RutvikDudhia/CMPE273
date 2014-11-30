var mysql = require('mysql');

exports.getCategoryPage =function (req,res)
{
res.render('ejs_addproduct');
}
exports.getCategory =function (req,res)
{
	var username = req.param('userid');
	var password = req.param('password');
	var connection = mysql.createConnection('localhost://root:alkadudhia@localhost/ebay');
	connection.connect();	
	var queryString = 'Select * from category';	 
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
	    		res.send(results);
	    				}
	    	}
	  });

	console.log(username);	

};

