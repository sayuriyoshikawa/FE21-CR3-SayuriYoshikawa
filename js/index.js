//Create the function calculateInvoice//
function calculateInvoice (starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    return starterPrice + maindishPrice + dessertPrice + beveragePrice;
}


//Create four variables that you will pass to the function calculateInvoice() as arguments//
var main1 = 20;
console.log(main1);

var main2 = 25;
console.log(main2);

var main3 = 27;
console.log(main3);

var main4 = 20;
console.log(main4);


// Calculate at least 3 invoices using combinations//
var invoice = calculateInvoice(3.5, 25, 4, 6);
console.log(`Invoicw for € ${invoice} `);

var invoice2 = calculateInvoice(3, 27, 4, 5);
console.log(`Invoicw for € ${invoice2} `);

var invoice3 = calculateInvoice(3.5, 27, 4.5, 6);
console.log(`Invoicw for € ${invoice3} `);

var invoice4 = calculateInvoice(3.5, 20, 4.5, 4.5);
console.log(`Invoicw for € ${invoice4} `);


//Create a function studentInvoice() that will apply a 10% discount to the final invoice//
function studentInvoice (starterPrice, maindishPrice, dessertPrice, beveragePrice) {
    return starterPrice + maindishPrice + dessertPrice + beveragePrice - (starterPrice + maindishPrice + dessertPrice)*0.1;
}

var result = studentInvoice(3.5, 25, 4, 6);
console.log(`Invoice after discount for € ${result} `);

var result2 = studentInvoice(3, 27, 4, 5);
console.log(`Invoice after discount for € ${result2} `);

var result3 = studentInvoice(3.5, 27, 4.5, 6);
console.log(`Invoice after discount for € ${result3} `);

var result4 = studentInvoice(3.5, 20, 4.5, 4.5);
console.log(`Invoice after discount for € ${result4} `);