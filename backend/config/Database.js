const mongoose = require("mongoose");
const connectdatabase = () => {
  //connecting to mongodb database
  mongoose
    .connect("mongodb://localhost:27017/signupassigmnet")
    .then((data) => {
      console.log(`mongodb connected with server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { connectdatabase };
