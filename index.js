const express = require('express');
const os = require('os');

const app = express();

const port = 8080;
const host = '0.0.0.0';

app.get('/', (_, response) => response.send(`Hello world from ${os.hostname()}!\n`));

app.listen(port, host, () => console.log(`server runing at: ${host}:${port}`));
