const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (sampleActivity <= 0 || sampleActivity > 15 || isNaN(sampleActivity) || typeof sampleActivity !== 'string') return false;
    
	let num1 = Math.log(MODERN_ACTIVITY / sampleActivity);
  let num2 = 0.693 / HALF_LIFE_PERIOD;
	let result = Math.ceil(num1 / num2);
  
  return result
};
