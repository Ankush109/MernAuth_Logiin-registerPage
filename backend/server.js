const express = require("express");
const bodyparser = require("body-parser");
const { connectdatabase } = require("./config/Database");
const dotenv = require("dotenv");
const user = require("./Routes/Userroutes");
const private = require("./Routes/private");
const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
dotenv.config();
connectdatabase();
app.use("/api/v1", user);
app.use("/api/v1", private);
app.listen(5000, () => {
  console.log(`server is working on 4000`);
});
