const http= require("http")

const server= http.createServer((req,res)=>{

    // res.send("<h1>hello</h1>")
    console.log("hello")

})

server.listen(3000)