const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/users');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.get("/adduser",function(req,res){
    
    var newuser = {
         // part 2 params instead of param
        "uid":req.params.uid,
        "pwd":req.params.pwd
    };
    console.log(newuser);
    user.push(newuser);
    console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;