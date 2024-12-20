const express = require("express");
const cors = require("cors");
const db = require("./models");
const dbinit = require("./services/db_initializer.service");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json({ limit: "100mb" }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

dbinit();

db.sequelize.sync();

require("./routes/generateRandomUserData.routes")(app);
require("./routes/users.routes")(app);

app.listen(port, () => console.log(`Coolkids app listening on port ${port}!`));
