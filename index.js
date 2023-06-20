const http= require("http")

const server= http.createServer((req,res)=>{
    if(req.url=="/home"){

        res.end("hello from piyush")
    }
    if(req.url=="/about"){

        res.end("about page")
    }if(req.url=="/contact"){

        res.end("contact page")
    }


})

server.listen(3000,"127.0.0.1",()=>{
    console.log("Running on port 3000")
})

