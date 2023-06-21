const express=require("express")

const router=express.Router();

router.get("/",(req,res,next)=>{
    console.log("It always runs")
    res.send("welcome")
    
    })

    module.exports=router;