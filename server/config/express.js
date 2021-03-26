const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

function setupExpress(app) {
    app.use(cors());

    app.use(express.urlencoded({
        extended: true
    }));

    app.use(cookieParser());
};

module.exports = setupExpress;