function btn(){
    var user = document.getElementById("uname").value;

    var regx = /abc/i;
    if(regx.test(user)){
        alert("Your username is correct");
    }
    else{
        alert("Your username is not correct");
    }
}

