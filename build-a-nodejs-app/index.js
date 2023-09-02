const http = require("http");

const PORT = 3000;
http
  .createServer(function (req, res) {
    console.log("request received");
    res.end("Hello Node.js first app by Docker");
  })
  .listen(PORT);
console.log("Server Started on PORT: " + PORT);
