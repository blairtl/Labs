var http = require("http");
var fs = require("fs");
const os = require("os");
const ip = require("ip");


const bytesToSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB'];
    if (bytes == 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    };


http.createServer(function(req, res){
    if (req.url === "/") {
    fs.readFile("./Public/index.html", "UTF-8", function(err, body){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(body);
    });
    }
    else if(req.url.match("/sysinfo")){
        myHostName=os.hostname();
        timeUp=process.uptime;
        totalUpTimeHours=Math.floor(timeUp/3600);
        var hoursRemain=timeUp%3600;
        totalUpTimeMins=Math.floor(hoursRemain/60);
        var minsRemain=hoursRemain%60;
        totalUpTimeSeconds=minsRemain;

        html='
            <!DOCTYPE HTML>
                <HTML>
                    <HEAD>
                        <Title>NodeJS Sysinfo</Title>
                    </HEAD>
                    <BODY>
                        <p>Hostname: ${myHostName}</p>
                        <p>IP: ${ip.address}</p>
                        <p>Server Uptime: ${totalUpTimeHours} + ":" + ${totalUpTimeMins} + ":" + ${totalUpTimeSeconds}</p>
                        <p>Total Memory: ${bytesToSize(os.totalmem())}</p>
                        <p>Free Memory: ${bytesToSize(os.freemem())}</p>
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