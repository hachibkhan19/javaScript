/*
function add(a, b){
    result = a + b;
    document.write(result);
}
add(2, 2);

document.write('<br>');
document.write('<br>');
document.write('<br>');


//Global and local variable
var b = 10; //Global variable

function myFunction(){
    var a = 6; // local variable
    var1 = 7;   // it's a global variable
    document.write(a +'<br>');
    document.write(b +'<br>');   // We can access a global variable inside a function
}
myFunction();
    
document.write(b +'<br>');
document.write(var1 +'<br>');
document.write(a +'<br>');   // We can access a global variable inside a function
*/

let fullName =function(firstName, lastName){
    // document.write(firstName+' '+ lastName);
    document.write(`Really it's your name ${firstName}${lastName}` +'<br>');
}

fullName('Hachib', ' khan');

// default parameter example
let addNumber = function(num1=6, num2=7){
    let result = num1 + num2;
    return result;
}

document.write(addNumber());
