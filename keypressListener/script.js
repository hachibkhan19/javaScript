count = 0;
document.addEventListener("keypress", function(event){
    count++;
    var text = event.key;
    document.querySelector("p").innerHTML = "you have pressed total: "+ count;
})
