const express = require('express')
const app = express()
require('dotenv').config()
const sequelize = require('./models/index')
const port = process.env.PORT || 8119
const configViewEngin = require('./config/configViewEngin');
//config webroute
const webroute = require('./routes/tutorials.routes')
const APIWebRoute = require('./routes/APITutorial');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//cofig viewEngin
configViewEngin(app);
const db = require("./models");


// db.sequelize.sync()
//     .then(() => {
//         console.log("Synced database.");
//     })
//     .catch((err) => {
//         console.log("Failed to sync database: " + err.message);
//     });

db.testConnection();
db.sequelize.sync()
    .then(() => {
        console.log("Synced database.");
    })
    .catch((err) => {
        console.log("Failed to sync database: " + err.message);
    });

app.use('/', webroute);
app.use('/api/tutorials', APIWebRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})