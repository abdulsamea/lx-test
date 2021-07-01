
var express = require("express");
var app = express();


app.get("/reverse-words", (req, res, next) => {
    res.json({ "success": true });
});

// export app to be so it can be used in other modules (eg: testing)
module.exports = app

// start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});