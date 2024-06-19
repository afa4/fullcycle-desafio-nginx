// server.mjs
const { createServer } = require('node:http');

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Full Cycle Rocks!</h1>\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '0.0.0.0', () => {
  console.log('Listening on 0.0.0.0:3000');
});

// run with `node server.mjs`
