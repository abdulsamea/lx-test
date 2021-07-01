/**
 * @summary provides sorting (ascending or descending) for a given word.
   * @param {string} input
   * @param {string} ordering
   * @returns {Object} result
   */
let sortWords = (input, ordering) => {

    let output;
    //check if string query is present or not. 
    if (!input || input === "") {
        output = 'Please provide a string query parameter in url.'
        return {
            result: output
        };
    }

    //check if improper value for sort query parameter is passed. 
    if (ordering && (ordering !== 'asc' || ordering !== 'desc')) {
        output = `The value of sort parameter can only be 'asc' or 'desc.'`
    }

    //sort for ascending order. 
    if (ordering === 'asc' || ordering === undefined || ordering === '') {
        output = [...input].sort().join('');
    }
    //sort for descending order. 
    if (ordering === 'desc') {
        output = [...input].sort().reverse().join('');
    }

    return {
        result: output
    }
}

module.exports = {
    sortWords
}