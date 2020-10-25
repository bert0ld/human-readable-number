module.exports = function toReadable (number) {
  const nums = 	[	
  					'zero','one','two','three','four','five','six','seven','eight',
  					'nine','ten','eleven','twelve','thirteen','fourteen','fifteen',
  					'sixteen','seventeen','eighteen','nineteen'
  				]; // main array
    const tens = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']; // array for tens
    const ten = tens[Math.floor(number / 10)-1]; // human-readable tens from array
    const decsUnits = number % 100; // decs and units
    const units = number % 10; // number of units
    const dec = Math.floor((decsUnits) / 10); // number of decs
    const hundred = nums[Math.floor(number / 100)]; // human-readable hundreds
    
    if (number < 20) {
        return nums[number];
    }
    if (number < 100) {
        if (units === 0) {
          return `${ten}`
        } else return `${ten} ${nums[number % 10]}`
    }
    if (units === 0 && decsUnits !== 0) {
            return `${hundred} hundred ${tens[dec-1]}`;
    } else if (units === 0) {
        return `${hundred} hundred`
    }
    if (decsUnits < 20) {
       return `${hundred} hundred ${nums[decsUnits]}`
    } else {
        return `${hundred} hundred ${tens[dec-1]} ${nums[units]}`
    }
}
