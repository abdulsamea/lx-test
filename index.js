
var express = require("express");
var app = express();

var reverseUtil = require('./utils/reverse');
var sortUtil = require('./utils/sortwords');

app.get("/reverse-words", (req, res, next) => {

    let input = req.query.sentence;

    // check if url has no sentence parameter
    if(!input){
        res.send({
            "message": "The request is invalid."
        })
        return
    }
    let output = reverseUtil.reverseWord(((req.query.sentence)));

    // send output.
    res.send(output);

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

// start server...
let port = 3000;

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Listening on port ${port}`));
}