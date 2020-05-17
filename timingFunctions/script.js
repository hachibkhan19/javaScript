// var ID = 0
// function printMessage(){
//     document.getElementById("h").innerHTML = "Text will be change after 5sec."
// }

// function start(){
//     ID = window.setTimeout(printMessage, 5000);
// }

// function stop(){
//     window.clearTimeout(ID);
// }




var ID = 0
var seconds = 0;
function printMessage(){
    document.getElementById("h").innerHTML = seconds + ' seconds';
    seconds++;
}

function start(){
    ID = window.setInterval(printMessage, 1000);
}

function stop(){
    window.clearInterval(ID);
}


