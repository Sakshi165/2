const express=require("express");
const path = require("path");
const app= express();
app.use(express.static(path.join(__dirname,'public')));
//app.use(express.static('${__dirname}/public'));
app.get("/", (req,res)=>{
    res.sendFile('${__dirname}/index.html',(err)=>{
        if (err){
            console.log (err);
            res.end(err, message);
        }
    });
});
app.listen(9000,"localhost",()=>{
    console.log("Server is running on  port 9000");
});