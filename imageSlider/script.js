photos = ["images/alaska.png", "images/america.png", "images/arkansas.jpg", "images/california.png"]

var imgTag = document.querySelector('img')

count = 0;
function next(){
    count++;
    if(count >= photos.length){
        count = 0;
        imgTag.src = photos[count]
    }
    else{
        imgTag.src = photos[count];
    }
}
function prev(){
    count--;
    if(count < 0){
        count = photos.length - 1;
        imgTag.src = photos[count]
    }
    else{
        imgTag.src = photos[count];
    }
}
