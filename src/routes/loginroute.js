const express = require('express'); 
const loginRouter = express.Router();
const user = require('../data/users');

loginRouter.get('/',function(req,res){

    res.render('login',{});
    
})


loginRouter.get("/check",function(req,res){
    var checkuser = {
        // part 2 params instead of param
        uid:req.param("uid"),
        pwd:req.param("pwd")
    };
    
    console.log(checkuser);
    // flag changed
    var flag=true;

//    var flagg = user.find((e)=>{
       for(let i=0;i<user.length;i++){
        
        if(checkuser.uid==user[i].uid && checkuser.pwd==user[i].pwd)
        {
            
            flag=true;
            break;
        }
        else{
                flag=false;
            }
        };

        console.log(flag);

if(flag==true){
    // alert("User Verified.Click to continue");
    res.redirect("/home")
}
else{
    // alert("User Verification Failed");
    res.redirect("/signup");
}

});




module.exports = loginRouter;