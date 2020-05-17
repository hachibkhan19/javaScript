marks = parseInt(prompt('Enter your marks: '))

if(marks > 100 || marks < 0){
    document.write('Enter your correct marks!');
}
else if(marks >= 80 && marks <= 100){
    document.write('Your grade A+');
}
else if(marks >= 70 && marks < 80){
    document.write('Your grade A-');
}
else if(marks >= 60 && marks < 70){
    document.write('Your grade B');
}
else if(marks >= 50 && marks < 60){
    document.write('Your grade B+');
}
else if(marks >= 40 && marks < 50){
    document.write('Your grade D');
}
else if(marks >= 33 && marks < 40){
    document.write('Your grade pass');
}
else{
    document.write('Fail');
}
