

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3))




let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(usd){

 let dollarValue =    usd * oneEuroIs.JPY 

    return  dollarValue;
}


// function fromEuroToDollar(euro){

//     let dollarValue =    euro * oneEuroIs.USD 
   
//        return  dollarValue;
//    }

   
function fromYenToPound(yen){

    let dollarValue =    yen * oneEuroIs.GBP 
   
       return  dollarValue;
   }

   module.exports = { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound };
