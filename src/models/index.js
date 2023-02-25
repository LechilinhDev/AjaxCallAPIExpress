
const { Sequelize } = require('sequelize');
const createTutorial = require('./createtableTutorial');
const dbConfig = require('../config/dbsequlizeConfig');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.testConnection = testConnection;
db.createTutorial = createTutorial(sequelize, Sequelize);
module.exports = db;