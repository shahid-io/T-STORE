const express = require('express');
const { ServerConfig } = require('./config');
const app = express();

/**
 * swagger >
 */

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/**
 * swagger <
 */

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is listening on ${ServerConfig.HOST}:${ServerConfig.PORT}`);
});
