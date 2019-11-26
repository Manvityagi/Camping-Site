const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  db_user: process.env.db_user,
  db_pwd: process.env.db_pwd,
};
