const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require('./database/mongodb')

const initRoutes = require("./routes");

const app = express();
app.use(bodyparser.json());
app.use(cors());
dotenv.config();

initRoutes(app, express.Router());

app.listen(4000,
    function () {
        console.log("App is running on Port 4000");
    });
