// server.mjs
const { createServer } = require('node:http');
const { NamesTable } = require('./name_table');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');

const server = createServer(async (req, res) => {
  const name = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
  await NamesTable.create({ name });

  const names = await NamesTable.findAll();

  const response = '<h1>Full Cycle Rocks!</h1>\n';
  response += '<ul>\n';
  response += names.map(nameRegister => `<li>${nameRegister.name}</li>`).join('\n');
  response += '</ul>\n';

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(response);
});

// starts a simple http server locally on port 3000
server.listen(3000, '0.0.0.0', () => {
  console.log('Listening on 0.0.0.0:3000');
});

// run with `node server.mjs`
