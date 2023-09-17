const express = require('express');
const router = express.Router();
const { ServerConfig } = require('./config');
const app = express();

/**
 * swagger >
 */

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * swagger <
 */

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);
app.get('/instagram', (req, res) => {
    res.send('Instagram!');
}
);

app.listen(ServerConfig.PORT, () => {
    console.log(`Server is listening on ${ServerConfig.HOST}:${ServerConfig.PORT}`);
});
