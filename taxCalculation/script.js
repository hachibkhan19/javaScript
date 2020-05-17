function taxCalculator(price, taxAmount){
    var dividePrice = price / 100;
    var totalTax = dividePrice * taxAmount;
    var totalPrice = price + totalTax;
    document.write("Total price: "+ totalPrice);
}
var price = parseInt(prompt("Enter a price amount: "));
var taxAmount = parseInt(prompt("Enter a tax amount: "));
taxCalculator(price, taxAmount);


