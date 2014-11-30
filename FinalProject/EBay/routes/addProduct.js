var mysql = require('mysql');


exports.addProductContinue=function (req,res)
{
	res.render("ejs_addProductContinue");
};

exports.uploadProductImage=function (req,res)
{
	console.log(req.param('path'));
	res.send(req.param('path'));
};