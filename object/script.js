// First method for object deceleration
var Cars = {
    name: 'Corrola',
    color: 'White',
    price : 1200000,
    auto: function(){
        return 'Good car';
    }

}

document.write(Cars.auto() + '<br>');

// Second method for object deceleration
function person(name, age, phone){
    this.name = name;
    this.age = age;
    this.phone = phone
    this.fun = function(){
        return 'Nice car.'
    }
}
var p = new person('Hasib', 23, 87665539)

document.write(p.name);

document.write('<br>');
document.write('<br>');
document.write('<br>');

document.write(Math.floor(3.4)+ '<br>');
document.write(Math.ceil(3.4)+ '<br>');
document.write(Math.max(3, 4, 1)+ '<br>');
document.write(Math.random()+ '<br>');

document.write(Math.floor(Math.random()*5+ 1) + '<br>');

document.write('<h2 style="color:red">Gusseing game using random number</h2>'+ '<br>')

// First method for guessing number
var win = 0;
var lost = 0;
for(var i = 1; i <= 5; i += 1){    
    var guessNumber = parseInt(prompt("Enter a number between 1 to 5: "));
    var randomNumber = Math.floor(Math.random()*5+1);

    if(guessNumber == randomNumber){
        document.write('You have won '+ randomNumber + '<br>');
        win++;
    }
    else{
        document.write('You have lost '+ randomNumber + '<br>');
        lost++;
    }
}

document.write('You have win '+ win + 'times' + '<br>')
document.write('You have win '+ lost + 'times' + '<br>')




// Second method for guessing number
var numberOfWin = 0;
var numberOfLost = 0;
for(var i = 1; i <=5; i++){
    var guessNumber = parseInt(prompt('Enter a number between 1 to 5: '))
    var randomNumber = Math.floor(Math.random()*4 + 1) 
    if(guessNumber == randomNumber){
        document.write('you are won! your random number is '+ randomNumber +' and your guess number is '+ guessNumber+'<br>');
        numberOfWin++;
    }
    else{
        document.write('you are lost! your random number is ' + randomNumber + '<br>');
        numberOfLost++;
    }

}
document.write('Total number of win '+ numberOfWin +' times' +'<br>');
document.write('Total number of lost '+ numberOfLost +' times');



//Math.floor(Math.random()*6+30);
