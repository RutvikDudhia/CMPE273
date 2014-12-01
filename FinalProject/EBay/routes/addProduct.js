var mysql = require('mysql');
//var busboy = require('connect-busboy'); //middleware for form/file upload
//var path = require('path');     //used for file path
var fs = require('fs-extra');
//app.use(busboy());
//ar express = require('express')
//app.use(express.static(path.join(__dirname, 'public')));


exports.addProductContinue=function (req,res)
{
	res.render("ejs_addProductContinue");
};

exports.uploadProductImage=function (req,res)
{
	var productTitle = req.param('title');
	var imagePath = req.files.imageFile.path;
	var productCondition = req.param('itemCondition');
	var productName = req.param('st_selval_0_3');
	var biddingStartPrice = req.param('startPrice');
	var bidDuration = req.param('duration');
	var buyButton = req.param('binCheck');
	var binPrice = req.param('binPrice');
	var ssnNumber = req.param('paypalEmail');
	
	console.log(productTitle);
	console.log(imagePath);
	console.log(productCondition);
	console.log(productName);
	console.log(biddingStartPrice);
	console.log(bidDuration);
	console.log(buyButton);
	console.log(binPrice);
	console.log(ssnNumber);

	
	console.log(req.files);
	
	fs.readFile(req.files.imageFile.path, function (err, data) {
			  
		  fs.writeFile("1.jpg", data, function (err) {
		  console.log(err);
		  });
		});
	console.log("abc");
	//res.send(req.param('path'));
};