const express= require("express")
const app=express();

app.use((req,res,next)=>{
    console.log("first midleware");
    next();
})

app.use((req,res,next)=>{
    console.log("second midleware")
    // next();
    res.send("hi")
})


app.listen(3000)