
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , signin = require('./routes/signin')
  , register = require('./routes/register')
  , signup = require('./routes/signup')
  , getCategory= require('./routes/getCategory')
  ,	getSubCategory= require('./routes/getSubCategory')
  , addProduct= require('./routes/addProduct');
  



var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/SignIn', signin.signin);
app.post('/Register', register.register);
app.post('/Signup',signup.signup);
app.post('/RegisterRedirect',register.registerRedirect);
app.post('/SignupRedirect',signup.signupRedirect);
app.post('/SigninRedirect',signin.signinRedirect);
app.get('/GetCategories',getCategory.getCategory);
app.get('/GetCategoryPage',getCategory.getCategoryPage);
app.get('/GetSubCategories',getSubCategory.getSubCategory);
app.get('/AddProductContinue',addProduct.addProductContinue);
app.post('/UploadProductImage',addProduct.uploadProductImage);




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
