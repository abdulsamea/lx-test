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
  
    let initialvalue = input;
    
    let taxValueA = 0
    let taxValueB = 0
    let taxValueC = 0
    let taxValueD = 0
    let taxValueE = 0

    // get tax value upto $0 - $18,200
    let inputA = ( input <= 0 ? 0 : initialvalue > 18200 ? (18200 - 0) : (18200 - 0 - (18200 - initialvalue)) ) / 100;
    taxValueA = 0 * (inputA);
    input = input - (18200 - 0) ;
    

    // get tax value upto $18,201 - $37,000
    let inputB = ( input <= 0 ? 0 : initialvalue > 37000 ? (37000 - 18200) : (37000 - 18200 - (37000 - initialvalue)) ) / 100;
    taxValueB = 19 * (inputB);
    input = input - (37000 - 18200);

    // get tax value upto $37,001 - $87,000
    let inputC = (input <= 0 ? 0 : initialvalue > 87000 ? (87000 - 37000) : (87000 - 37000 - (87000 - initialvalue)) ) / 100;
    taxValueC = 32.5 * (inputC);
    input =  input - (87000 - 37000);
    
    // get tax value upto $87,001 - $180,000
    let inputD = (input <= 0 ? 0 : initialvalue > 180000 ? (180000 - 87000) : (180000 - 87000 - (180000 - initialvalue)) ) / 100;
    taxValueD = 37 * (inputD);
    input = input - (180000 - 87000);

    // get tax value above $180,000
    let inputE = input <= 0 ? 0 : input / 100;
    taxValueE = 45 * (inputE);

    let finalIncomeTax = taxValueA + taxValueB + taxValueC + taxValueD + taxValueE; 
    // round off tax values above .159 and return
    let roundedIncomeTax =  parseInt((finalIncomeTax).toFixed(3).toString().split('.')[1]) >= 159 ? (parseInt((finalIncomeTax).toFixed(3).toString().split('.')[0]) + 1) : parseInt(finalIncomeTax.toFixed(3).toString().split('.')[0]);
    // get superannuation.
    let superannuation = (Math.round(((initialvalue /100 ) * 9.5) * 100) / 100);
    // get medicare value.
    let medicareValue = initialvalue <=21336 ? 0 : initialvalue > 21336 && initialvalue <= 26668 ? 10 * ((initialvalue - 21336) / 100 ) : 2 * (initialvalue / 100);  
    medicareValue = parseFloat(medicareValue.toFixed(2));
    // get total taxes.
    let totalTax = Math.round(roundedIncomeTax + medicareValue)


    // return final taxation values.
    return {
        baseSalary: initialvalue,
        superannuation,
        taxes:{
            income: roundedIncomeTax,
            medicare: medicareValue,
            total: totalTax
        },
        afterTaxIncome: initialvalue - totalTax
    }
}
module.exports = {
    getTax,
    calculateIncomeTax
}