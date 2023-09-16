const express = require('express');
const { ServerConfig } = require('./config');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is listening on ${ServerConfig.HOST}:${ServerConfig.PORT}`);
});
