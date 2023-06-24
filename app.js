const express= require("express")
const app=express();
const bp= require("body-parser")
const adminRoute= require("./routes/admin")
const shopRoute=require("./routes/shop")

app.use(bp.urlencoded({extended:false}))

app.use('/admin',adminRoute)
app.use(shopRoute)


app.use((req,res,next)=>{
res.sendStatus(404).send("<h1>Page Not Found</h1>")

})


app.listen(3000)