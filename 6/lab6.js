const getFile = require('download_image');
const http = require('http');

const PORT = process.env.PORT || 9000
const image = './images/logo.gif'
const server = http.createServer();

server.on('request', (req, res) => {
  let fileStream = getFile(image);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/gif');
  fileStream.pipe(res);
});

server.listen(PORT);