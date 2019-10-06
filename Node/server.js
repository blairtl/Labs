var http = require("http");
var fs = require("fs");
var os = require("os");
var ip = require("ip");

http.createServer(function(req, res){
    if (req.url === "/") {
    fs.readFile("./Public/index.html", "UTF-8", function(err, body){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(body);
    });
    }
    else if(req.url.match("/sysinfo")){
        myHostName=os.hostname();
        html='
            <!DOCTYPE HTML>
                <HTML>
                    <HEAD>
                        <Title>NodeJS Sysinfo</Title>
                    </HEAD>
                    <BODY>
                        <p>Hostname: ${myHostName}</p>
                        <p>IP: ${ip.address}</p>
                        <p>Server Uptime: ${process.uptime}</p>
                        <p>Total Memory: ${os.totalmem()}</p>
                        <p>Free Memory: ${os.freemem()}</p>
                        <p>Number of CPUs: ${os.cpus().length}</p>
                    </BODY>
                </HTML>
        '
    }
    else{
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 file not found");
    }
}).listen(3000);

console.log("Server listening on port 3000");