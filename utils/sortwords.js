/**
 * @summary provides sorting (ascending or descending) for a given word.
   * @param {string} input
   * @param {string} ordering
   * @returns {Object} result
   */
let sortWords = (input) => {
    let output = getSorted(input);
    return output
}

/**
 * @summary provides reverse for a given string - algorithm implementation.
* @param {string} input a string input
* @returns result string
*/
let getSorted = (input) => {
    var word = ''
    var result ='';
    for(let i = 0; i < input.length; i++){
        // keep punctuations in place
        var format = /^[!?".,]*$/
        if (format.test(input[i]) || input[i] == " "){
           
            word = [...word].sort(function (a, b) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            }).join('');
            result+=(word);
            result+=(input[i]);
            word = ''
        }
        else{
            word += input[i];
            
        }
        
    }

    
    let remaining = word.length <= 0 ? '' : [...word].sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase()) }).join('');

    return `"${result}` + `${remaining}"`;
}

module.exports = {
    sortWords
}