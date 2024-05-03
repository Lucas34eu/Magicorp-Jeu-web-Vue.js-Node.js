const db = require("../models");
const jwt = require('jsonwebtoken');
require('dotenv').config();


const isAuthenticated = async(req, res, next) => {
    try {
        let token = req.headers['authorization'].split(" ")[1];
        let decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ "message": "Couldn't Authenticate" });
    }
}

//function



module.exports = {
    isAuthenticated
};