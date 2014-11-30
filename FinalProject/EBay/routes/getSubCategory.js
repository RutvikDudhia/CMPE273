var mysql = require('mysql');


exports.getSubCategory =function (req,res)
{
	var categoryid = req.param('CategoryId');
	var connection = mysql.createConnection('localhost://root:alkadudhia@localhost/ebay');
	connection.connect();	
	var queryString = 'Select * from subcategory where categoryid ='+categoryid+';';
	console.log(queryString);
	connection.query(queryString, function(err, results) {
	    if (err) 
	    	{
	    	
	    	res.send('0');
	    	res.render('ejs_signinerrorpage.ejs');
	    	
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

	};