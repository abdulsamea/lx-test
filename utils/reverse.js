/**
 * @summary provides reverse for a given string.
 * @param {string} input
 * @returns {Object} result
 */
let reverseWord = (input) => {
    let output = getReverse(input);
    return output
}

/**
 * @summary provides reverse for a given string - algorithm implementation.
* @param {string} input a string input
* @returns result string
*/
 let getReverse = (input) => {
     console.log(input)
    var word = ''
    var result ='';
    for(let i = 0; i < input.length; i++){
        // keep punctuations in place
        var format = /^[!?".,]*$/
        if (format.test(input[i]) || input[i] == " "){
           
            word = word.split('').reverse().join('');
            result+=(word);
            result+=(input[i]);
            word = ''
        }
        else{
            word += input[i];
        }
        
    }
    let remaining = word.length <= 0 ? '' : word.split('').reverse().join('');
    return `"${result}` + `${remaining}"`;
}
module.exports = {
    reverseWord
}