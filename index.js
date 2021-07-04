
var express = require("express");
var app = express();

var reverseUtil = require('./utils/reverse');
var sortUtil = require('./utils/sortwords');
var afterTaxUtil = require('./utils/afterTaxIncome');
const { response } = require("express");

app.get("/reverse-words", (req, res, next) => {

    let input = req.query.sentence;

    // check if url has no sentence parameter
    if(!input){
        res.send({
            "message": "The request is invalid."
        })
        return
    }
    let output = reverseUtil.reverseWord(req.query.sentence);
    

    // send output.
    res.send(output);

});

app.get("/sort-words", (req, res, next) => {

    let input = req.query.sentence;
    if(!input){
        res.send({
            "message": "The request is invalid."
        })
        return
    }
    let output = sortUtil.sortWords(input);

    //send output.
    res.send(output);

});


app.get("/calculate-after-tax-income", (req, res, next) => {

    let input = (req.query.annualBaseSalary);
    // check for invalid number or input.
    if(isNaN(input) || ! /^\d{0,99}(\.\d{1,99})?$/.test(input) || !input){
        res.send({
            "message": "The request is invalid."
        })
        return
    }
   
    let output = afterTaxUtil.getTax(parseFloat(input));

    //send output.
    res.send(output);

});

// export app to be so it can be used in other modules (eg: testing)
module.exports = app

// start server...
let port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Listening on port ${port}`));
}