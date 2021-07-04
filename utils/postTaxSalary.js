var afterTaxUtil = require('./afterTaxIncome');

/**
 * @summary provides tax info for a numeric value.
 * @param {string} input
 * @returns {Object} result
 */
 let getTax = (input) => {
    let output = calculateIncomeTax(input);
    return output;
}

/**
 * @summary provides algo for tax calculation
* @param {number} input a salary
* @returns result for tax info.
*/
 let calculateIncomeTax = (input) => {

    if (input <= 0) {
        return afterTaxUtil.calculateIncomeTax(input); 
    }

    let salary;
    let low = input
    let mid = 0
    let high = 2 * low; // upper bound
    let result;
    // apply binary search for finding right salary for a given after tax income, logic taken from postTaxSalary.js
    while(true){
        mid = low + Math.round((high - low)/2)
        salary = afterTaxUtil.calculateIncomeTax(mid);
        if (salary.afterTaxIncome == input)
        {
            result = salary;
            break;
        }
        
        if (salary.afterTaxIncome < input)
        low = mid + 1;

        else{
            high = mid - 1;
        }
    }


    return result;

}

module.exports = {
    getTax
}