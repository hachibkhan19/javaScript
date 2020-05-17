function test(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    document.getElementById('time').innerHTML=hours + ":" +minutes +":"+ seconds + "am"; 

}
setInterval(test, 1000);
