var register = require('./mysql');
//var busboy = require('connect-busboy'); //middleware for form/file upload
//var path = require('path');     //used for file path
var fs = require('fs-extra');
var date = require('date-utils');
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
	var itemQty = req.param('itemQty');
	var subCategory = req.param('SubCategory');
	var isBidding = req.param('isBiddingEnabled');
	
	var bidEnabled =0;
	console.log(isBidding);
	console.log(productTitle);
	console.log(imagePath);
	console.log(productCondition);
	console.log(productName);
	console.log(biddingStartPrice);
	console.log(bidDuration);
	console.log(buyButton);
	console.log(binPrice);
	console.log(ssnNumber);
	console.log(itemQty);
	
	if(isBidding==="Bidding Enabled")
		{
		
			bidEnabled=1;
		
		}
	
	if(productTitle==null||imagePath==null||productCondition===-1||productName===null||biddingStartPrice===null||ssnNumber===null)
		{
		
			res.render('ejs_errorpage');
		}
	
    var query="Select Max(productId) As maxid from product;";
    var maxid=0;
    
    
    register.fetchData(function(err,row)
    		{
    		if(err)
    		{
    			console.log(err);
    		}
    		else
    			{
    			maxid = row[0].maxid;
    			console.log(maxid);
    			maxid++;
    			var query2 = 'Insert into product (subcategoryId,addedBy,name,description,price,image,quantity,status,isAuction,sellerSSN) values("'+subCategory+'","1","'+productTitle+'","'+productName+'","'+binPrice+'","'+maxid+'.jpg","'+itemQty+'","1","'+bidEnabled+'","'+ssnNumber+'");';

    			register.fetchData(function(err,row)
    				{
    						if(err)
			    				{
			    					console.log(err);
			    				}
    						else
    							{
    				
    		    				fs.readFile(req.files.imageFile.path, function (err, data) {
    		    					  
    		    				  fs.writeFile("Images/"+maxid+".jpg", data, function (err) {
    		    					  	if(err)
    		    					  		{
    					    					  console.log(err);
    					    					  res.render(ejs_errorpage);
    		    					  			}
    		    				  		});
    		    					});
    		    						console.log(bidEnabled);
    		    		if(bidEnabled=="1")
    		    			{
    		    					console.log("the control is here");
    		    					Number.prototype.padLeft = function(base,chr)
    		    					{
    		    					var  len = (String(base || 10).length - String(this).length)+1;
    		    					return len > 0? new Array(len).join(chr || '0')+this : this;
    		    					}
    		    					var d = new Date();
    		    					
    		    					 var dformat1 = [d.getFullYear(),(d.getMonth()+1).padLeft(),
      		    					               d.getDate().padLeft()
      		    					               ].join('/') +' ' +
      		    					              [d.getHours().padLeft(),
      		    					               d.getMinutes().padLeft(),
      		    					               d.getSeconds().padLeft()].join(':');
      		    								console.log(dformat1);
    		    					console.log("bid "+bidDuration);
      		    					
    		    					d.addDays(parseInt(bidDuration));
      		    								
      		    					 var dformat2 = [d.getFullYear(),(d.getMonth()+1).padLeft(),
        		    					               d.getDate().padLeft()
          		    					               ].join('/') +' ' +
    		    					              [d.getHours().padLeft(),
    		    					               d.getMinutes().padLeft(),
    		    					               d.getSeconds().padLeft()].join(':');
    		    					console.log(dformat2);
    		    					
    		    					var query3 = 'Insert into auction (productId,basePrice,datePlaced,dateEnds,heldBy) values("'+maxid+'","'+biddingStartPrice+'","'+dformat1+'","'+dformat2+'","1");';
    		    					register.fetchData(function(err,row)
    		    		    				{
    		    		    						if(err)
    		    					    				{
    		    					    					console.log(err);
    		    					    				}
    		    		    						else
    		    		    							{
    		    		    							console.log("success");
    		    		    							}
    		    		    						
    		    		    				},query3);
    		    			}
    							}	
    				},query2);
    				
    			};
    		  
    			},query);
    
	};
	
	
	