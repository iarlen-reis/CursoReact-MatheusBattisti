const mongoose = require("mongoose");

require("dotenv").config();
// connection

const userDB = process.env.USER_DB;
const passwordDB = process.env.PASSWORD_DB;

mongoose.set("strictQuery", false);

const connection = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `mongodb+srv://${userDB}:${passwordDB}@cluster0.kssnvy7.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Conexão com o banco feito com sucesso!");

    return dbConnection;
  } catch (error) {
    console.log(error);
  }
};

connection();

module.exports = connection;
