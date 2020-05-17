function validate(){
    var u = document.getElementById("user")
    var p = document.getElementById("pass")

    if(u.value.trim() ==""){
        alert("blank username");
        u.style.border = "2px solid red";
        return false
    }
    else if(p.value.trim() ==""){
        alert("blank password");
        p.style.border = "2px solid red";
        return false
    }
    else if(p.value.trim().length < 5){
        alert("your password is very small.")
        p.style.border = "2px solid red";
        return false
    }
    else{

        return true        
    }
}

