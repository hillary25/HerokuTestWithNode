// writing jvascript using node functions

const http = require('http');

const hostname = '127.0.0.1';
// can change port number; stick in 3000's
const port = 3030;

// javascript variable for server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// TO TEST
// go to browser, type in "localhost:3030" (port number)