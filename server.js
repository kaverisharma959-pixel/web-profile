const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath;

  if (req.url === '/') {
    filePath = path.join(__dirname, 'index.html');
  } else {
    filePath = path.join(__dirname, req.url);
  }

  const ext = path.extname(filePath);

  let contentType = 'text/html';

  if (ext === '.css') {
    contentType = 'text/css';
  } else if (ext === '.js') {
    contentType = 'application/javascript';
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.statusCode = 404;
      res.end('404 - File Not Found');
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
