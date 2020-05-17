var firstName = 'hachib';
var lastName = ' khan';
var fullName = firstName + lastName;

var country = 'Bangladesh';

document.write('<br>')

document.write(firstName.concat(lastName)+ '<br>'); //Concat

document.write('<br>')

document.write(fullName + '<br>');

document.write('<br>')

document.write(country.length + '<br>');    //length

document.write('<br>')

document.write(country.slice(0,2)+ '<br>');   //slice()

document.write('<br>')

document.write(country.charAt(3)+ '<br>');    // charAt()

document.write('<br>')

document.write(country.toUpperCase()+ '<br>');  //toUpperCase()

document.write('<br>')

document.write(country.toLowerCase()+ '<br>');  //toLowerCase()

document.write('<br>')

var num1 = 20;
var num2 = 30;

document.write(`num1= ${num1} and num2= ${num2}`)


/*
Task#1

var firstName = prompt('Enter a first name: ')
var lastName = prompt('Enter a last name: ')

var fullName = firstName + lastName;

document.write(fullName + '<br>');

document.write(fullName.length + '<br>');
document.write(fullName.toUpperCase() + '<br>');
document.write(fullName.charAt(2) + '<br>');
*/
