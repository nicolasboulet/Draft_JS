
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Welcome</title></head>');
    
    res.write('<body>');
    res.write('<h1>Welcome on / Page</h1>');
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>'
    );
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    
    res.write('<body>');
    res.write('<h1>Welcome on / Page</h1>');
    res.write('<ul><li>User 1</li></ul>');
    res.write('<ul><li>User 2</li></ul>');
    res.write('<ul><li>User 3</li></ul>');
    res.write('<ul><li>User 4</li></ul>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(username)
      res.statusCode = 302;
      res.setHeader('Location', '/toto');
      return res.end();
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Exercice</title></head>');
  res.write('<body><h1>This is the default Page :-}</h1></body>');
  res.write('</html>');
  res.end();
}


module.exports = {
  handler: requestHandler 
}