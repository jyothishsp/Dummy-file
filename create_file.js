var http=require("http")
var fs=require("http")
const server=http.createServer(function(req,res){
	fs.createFile('createdfile.txt','hai..',function(error,data){
		res.write("File created")
		res.end()
		})
	})
		server.listen("8080","localhost",function(){

	})
