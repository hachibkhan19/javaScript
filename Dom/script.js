document.getElementById('p').innerHTML = 'paragraph tag';
document.getElementsByClassName('heading')[0].innerHTML = 'heading';
document.getElementsByTagName('h3')[0].innerHTML = 'hello';

var str = document.querySelector('#pi').innerHTML ='change';

function btn(){
    document.getElementById('para').innerHTML = 'Bangladesh';
}

document.querySelector('.a').innerHTML = 'About';
document.querySelectorAll('b')[0].style.color='red';

document.write("<br>");
document.write("<br>");
document.write("<br>");

function btn(){
    var text = document.getElementById("user").value;
    alert(text);
}


function rd(){
    var m = document.getElementById('male');
    var f = document.getElementById('female');

    if(m.checked==true){
        alert(m.value)
    }
    else if(f.checked==true){
        alert(f.value)
    }
    else{
        alert('Please check you are male or female');
    }
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

function selectBox(){
    var select = document.getElementById("sel")
    alert(select.options[select.selectedIndex].value);
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

function old(){
    document.getElementById("h")
}
function newtext(){
    document.getElementById("h").innerHTML = "value change";
}



