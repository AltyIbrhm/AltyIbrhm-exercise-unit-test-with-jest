const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js')

// test('adds 14 + 9 to requal 23', () =>{
//     let total = sum(14,9)

//     expect(total).toBe(23);
// })

test("One euro should be 1.07 dollars", function() {

    const dollars = fromEuroToDollar(3.5);


    const expected = 3.5 * 1.07; 

    expect(fromYenToPound(6)).toBe(5.22);
    expect(fromDollarToYen(4)).toBe(626);
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})