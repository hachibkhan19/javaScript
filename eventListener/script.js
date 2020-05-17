var btn = document.querySelector('button');
btn.addEventListener('click', myfun)
function myfun(){
    alert('hi');
}

document.write('<br>');
document.write('<br>');


var heading = document.getElementById('h');

heading.addEventListener('mouseover', function(){
    heading.style.color = 'red';
});
heading.addEventListener('mouseout', function(){
    heading.style.color = 'green';
    heading.style.fontStyle = 'italic';
});


document.write('<br>');
document.write('<br>');


var len = document.querySelectorAll("button").length;
for(var i = 0; i < len; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var text = this.innerHTML;
        document.querySelector("h3").innerHTML = text +" is clicked";
    })
    
}