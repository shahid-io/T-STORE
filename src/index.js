const express = require("express");
const apiRoutes = require("./routes");
const { ServerConfig, DatabaseConfig } = require("./config");
const app = express();
const cors = require("cors");
/**
 * swagger >
 */

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * swagger <
 */
// Hello this is T-STORE

app.use("/api", apiRoutes);

app.use("./netlify/functions/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(ServerConfig.PORT, async () => {
  try {
    await DatabaseConfig.connect()
      .then(() => {
        console.log("DB CONNECTION ESHTABLISH");
      })
      .catch((error) => {
        console.log("DB CONNECTION FAILED");
        console.log(error);
        process.exit(1);
      });
    console.log(
      `Server is listening on ${ServerConfig.HOST}:${ServerConfig.PORT}`
    );
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
});
