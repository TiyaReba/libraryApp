
const express = require('express'); 
 const path = require ('path'); 
//  part#1 point2
 const bodyparser = require('body-parser')
const cors = require('cors');

// part#2 point1
// const nav= [
//     {
//         link:"/books",
//         title:"Books"
//     },
//     {
//         link:"/authors",
//         title:"Authors"
//     },
//     {
//         link:"/addbook",
//         title:"Add Book"
//     },
//     {
//         link:"/addauthor",
//         title:"Add Author"
//     }
// ]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
// part#1 point 3
const homeRouter = require('./src/routes/homeroute');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 



app.set('views','./src/views'); 
app.set('view engine','ejs'); 

// part#2 point 2
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{
        

    });
    
});




// port correction
app.listen(process.env.PORT || 5000,()=>{
                // part1 point#5
    console.log("Server Ready ....");
});