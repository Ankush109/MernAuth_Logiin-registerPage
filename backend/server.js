const express = require("express");
const bodyparser = require("body-parser");
const { connectdatabase } = require("./config/Database");
const dotenv = require("dotenv");
const user = require("./Routes/Userroutes");
const private = require("./Routes/private");
const path = require("path");
const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
dotenv.config();
connectdatabase();
app.use("/api/v1", user);
app.use("/api/v1", private);
//-------------------------------------deployment----------------------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
//------------------------------------------------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is working on 4000`);
});
