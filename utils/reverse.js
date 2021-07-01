/**
 * @summary provides reverse for a given string.
   * @param {string} input
   * @returns {Object} result
   */
let reverseWord = (input) => {

    let output;

    // check if string query parameter is invalid.
    if (!input || input === "") {
        output = 'Please provide a query parameter in url.'
    }

    else {
        output = input.split('').reverse().join('');
    }

    return {
        result: output
    };
}

module.exports = {
    reverseWord
}