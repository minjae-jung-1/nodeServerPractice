
// the beginning
// we will need http and fs for this example\


const http = require("http")
//also node to transfer data over http 

const fs = require("fs")
//file system. gives functionality to access and interact
// with the file system

const port = 3000
//the port we are listening to

const server= http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile("index.html", function(error,data) {
        if(error){
            res.writeHead(404)
            res.write("Error: File not Found")
        }else{
            res.write(data)
        }
        res.end()
    })
})


server.listen(port, function(error){
    if(error){
        console.log("Something went wrong", error)
    }else{
        console.log("Server is listening on port" + port)
    }
})