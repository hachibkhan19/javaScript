for(var i = 0; i < 3; i += 1)
{
    var btn = document.querySelectorAll('.mybutton')[i].addEventListener('click', function(){        
        var text = this.innerHTML;
        audioplay(text);
        animation(text);
        /*
        switch(text){
            case 'a':
                var audio = new Audio('sounds/a.mp3');
                audio.play();
                break;
            case 'b':
                var audio = new Audio('sounds/b.mp3');
                audio.play();
                break;
            case 'c':
                var audio = new Audio('sounds/c.mp3');
                audio.play();
                break;
        } */
    }); 
}

document.addEventListener('keypress', function(event){
    var  text = event.key;
    audioplay(text);
    animation(text);
})

function audioplay(text){
    switch(text){
        case 'a':
            var audio = new Audio('sounds/a.mp3');
            audio.play();
            break;
        case 'b':
            var audio = new Audio('sounds/b.mp3');
            audio.play();
            break;
        case 'c':
            var audio = new Audio('sounds/c.mp3');
            audio.play();
            break;
    } 
}

function animation(text){
    var animBtn = document.querySelector('.' + text);
    animBtn.classList.add('anim');

    setTimeout(function(){
        animBtn.classList.remove('anim');
    }, 1000);
}


var count = 0;
document.querySelector('textarea').addEventListener('keypress', function(event){
    count += 1;
    var text = event.key;
    document.querySelector('p').innerHTML = 'You have pressed ' + count;
});

