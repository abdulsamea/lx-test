
var express = require("express");
var app = express();

var reverseUtil = require('./utils/reverse');
var sortUtil = require('./utils/sortwords');

app.get("/reverse-words", (req, res, next) => {

    let input = req.query.string;
    let output = reverseUtil.reverseWord(input);
    res.send({
        result: output
    });

});

app.get("/sort-words", (req, res, next) => {

    let input = req.query.string;
    let ordering = req.query.sort;
    let output = sortUtil.sortWords(input, ordering);

    //send output.
    res.send(output);

});


// export app to be so it can be used in other modules (eg: testing)
module.exports = app

// start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});