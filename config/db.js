require('dotenv').config();
const { Sequelize } = require('sequelize');

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} = process.env;

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT || 3306,
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: true,
    underscored: true
  }
});

module.exports = sequelize;
