const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter something</title></head>');
    res.write(`
        <body>
            <form method='POST' action"/>
                <input type='text' name='name' placeholder='Add something' />
                <button>Add</button>
            </form>
        </body>
`);
    res.write('</html>');
    return res.end();
  }

  if (req.url === '/' && req.method === 'POST') {
    let data = [];

    req.on('data', (chunk) => {
      data.push(chunk);
    });

    req.on('end', () => {
      const parsedData = Buffer.concat(data).toString();
      const actualData = parsedData.split('=')[1];
      fs.writeFileSync('examples/message.txt', actualData, (error) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
});

server.listen(5000);
