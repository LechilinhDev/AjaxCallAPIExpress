const express = require('express')
const app = express()
const path = require("path");
const configViewEngin = (app) => {

    app.set('view engine', 'ejs')
    app.set('views', './src/views')

}

module.exports = configViewEngin;