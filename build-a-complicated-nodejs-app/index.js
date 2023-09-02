// more-or-less the example code from the hapi-pino repo
// const hapi = require("@hapi/hapi");

// async function start() {
//   const server = hapi.server({
//     host: "0.0.0.0",
//     port: process.env.PORT || 3000
//   });

//   server.route({
//     method: "GET",
//     path: "/",
//     handler() {
//       return { success: true };
//     }
//   });

//   await server.register({
//     plugin: require("hapi-pino"),
//     options: {
//       prettyPrint: true
//     }
//   });

//   await server.start();

//   return server;
// }

// start().catch(err => {
//   console.log(err);
//   process.exit(1);
// });

// this is simple code to test if the server is running instead of using hapi and pino cuz i dont know how to use them yet lol
// if any of you know how to use hapi and pino please let me know, change the code and make a pull request or something
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ success: true }));
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
