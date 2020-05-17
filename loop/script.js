//for Loop
for(var i = 1; i <= 5; i += 1){
    document.write('Hello World!'+ i + '<br>');
}

document.write('<br>');
document.write('<br>');

// print table of 5 using for loop 
for(var i = 1; i <= 10; i++){
    document.write(5 + ' * ' + i + ' = ' + 5*i + '<br>');
}

document.write('<br>');
document.write('<br>');


//while loop
var num = 1;
sum = 0;
while(num <= 10){
    if(num % 2 == 0){
        sum = sum + num
    }
    num += 1;
}
document.write(sum +'<br>')




//do while loop
var i = 1;

do{
    document.write('Hi' + '<br>');
    i += 1;
}while(i <= 5);


//break statement
var num = 1;
while(num <= 10){
    if(num == 5){
       break
    }
    document.write(num +'<br>')
    num += 1;
}


// continue statement

for(var i = 0; i < 10; i += 1){
    if(i == 5){
        continue
    }
    document.write(i + '<br>')
}