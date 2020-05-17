function validate(){
    var email = document.getElementById("em").value;
    var rgex = /^([a-zA-Z0-9-\.]+)@([a-zA-Z0-9-]+)[.]([a-z]{2,8})(.[a-z]{2,10})?$/

    if(rgex.test(email)){
        alert("Valid email");
    }
    else{
        alert("Invalid email");
    }

}


