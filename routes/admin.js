const express=require("express")

const router= express.Router()

router.get("/product-page",(req,res,next)=>{

    res.send('<form action="/product" method="POST"> <input type="text" name="title"><button type="submit">Add Product</button></form>')
 
    next();
    })
    
    
    router.post("/product",(req,res,next)=>{
      

        res.send("your product is"+req.body.title)
        res.redirect("/")
    })

    module.exports=router;