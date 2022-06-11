const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toughts", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connect is sucess");
} catch (err) {
  console.log(err);
}

module.exports = sequelize;
