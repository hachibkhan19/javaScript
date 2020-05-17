function validate(){
    var username = document.getElementById("user").value;
    var rgex = /^has[a-zA-z0-9]/i

    if(rgex.test(username)){
        alert("Valid username");
    }
    else{
        alert("Invalid username");
    }

}

