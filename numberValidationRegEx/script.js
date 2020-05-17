function validate(){
    var number = document.getElementById("num").value;
    var rgex = /^[0][1][356789]\d{8}$/

    if(rgex.test(number)){
        alert("Valid number");
    }
    else{
        alert("Invalid number");
    }

}

