var images = [
                "1.png",
                "2.png",
                "3.png",
                "4.png",
                "5.png",
                "6.png",
                "7.png"
];
var index = 0;

var buttons = document.querySelectorAll('button');
var image = document.querySelector('img')

function prevFn(){
    index--;
    index = index < 0 ? images.length - 1 : index;
    console.log(index);
    image.setAttribute('src', images[index]);
}

function nextFn(){
    index++;
    index = index > images.length - 1 ? 0 : index;
    console.log(index);
    image.setAttribute('src', images[index]);
}

buttons[0].addEventListener('click', prevFn);
buttons[1].addEventListener('click', nextFn);

setInterval(nextFn, 2000);