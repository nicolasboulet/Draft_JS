const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.headers)
  // console.log(req.method)
  // console.log(req.url)
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body>');
  res.write('<h1>Welcome from Node.js Server</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);