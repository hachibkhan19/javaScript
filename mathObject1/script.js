var sqr = Math.sqrt(25)
document.write("Square root result: "+ sqr +'<br>'+'<br>');

document.write(Math.abs(-5)+'<br>'+'<br>')
document.write(Math.pow(2, 3)+'<br>'+'<br>')

document.write(Math.floor(2.9)+'<br>'+'<br>')
document.write(Math.ceil(2.1)+'<br>'+'<br>')
document.write(Math.round(2.9)+'<br>'+'<br>')
document.write(Math.round(2.1)+'<br>'+'<br>')

document.write(Math.max(2, 1)+'<br>'+'<br>')
document.write(Math.min(2, 1)+'<br>'+'<br>')

document.write(Math.random()+'<br>'+'<br>')
document.write(Math.floor(Math.random()*6+50)+'<br>'+'<br>')




var Won = 0
var lost = 0
var randomNumber = Math.floor(Math.random()*6+1);
for(var i = 1; i <= 5; i++){
    var guessNumber = parseInt(prompt('Enter a number between 1 to 5: '));
   
    if(guessNumber == randomNumber){
        document.write("You are won" +'<br>');
        Won++;
    }
    else{
        document.write("You are lost" +'<br>');
        lost++;
    }
}
document.write("Total number of won "+ Won + ' times' +'<br>');
document.write("Total number of lost "+ lost + ' times' +'<br>');

