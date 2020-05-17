// We create array two different ways

var arr = [1, 2, 3, 4, 'khan']
var newArr = arr.pop()
document.write(newArr+'<br>');

for(var i = 0; i < arr.length; i += 1){
    document.write(arr[i] + '<br>');
}


var arr1 = new Array(1, 2, 3, 4, 5, 5);
for(var i = 0; i < arr1.length; i++){
    document.write(arr1[i]);
}

document.write('<br>');
document.write('<br>');
document.write('<br>');


var newArray = arr1.toString();     //toString method
document.write(newArray);
document.write('<br>');

var fruits = ['apple', 'banana', 'orange'];
var vegetables = ['tomato', 'cucumbar', 'potato']

var groceries = fruits.concat(vegetables);    // concat method
document.write(groceries +'<br>');

fruits[fruits.length] = 'guava';    // add a element in last position
fruits.push('pineapple')            // add a element in last position   
document.write(fruits);

document.write('<br>');
vegetables.shift()                // remove the first element from an array.
document.write(vegetables + '<br>')
vegetables.unshift('ginger')       // add the first element of an array.
document.write(vegetables + '<br>')

document.write(vegetables.sort()+'<br>'+'<br>');

document.write(vegetables.splice(0, 0, 3, 4)+'<br>'+'<br>');
document.write(vegetables+'<br>'+'<br>');

var sort = [6, 5, 1, 3, 2, 0, 1];

document.write(sort.sort()+'<br>'+'<br>')
document.write(sort.reverse()+'<br>'+'<br>')




var num = [3, 1, 4, 5, 6, 9];
num.sort(function(a, b){
    return b - a;
})

document.write(num);
