var btnClick = document.querySelector('.btn');
console.log(btnClick);
var counter = 1;
btnClick.addEventListener('click', actionForClick);

function actionForClick(e){
for(num = 1;num < 50; num++){
    var div = document.createElement('div');
    var output = document.querySelector('.output');
    div.setAttribute('class','box');
    div.style.left = ranReturn(1200) +'px';
    div.style.top = ranReturn(800) +'px';
    div.style.height = ranReturn(200) +'px';
    div.style.width = ranReturn(300) +'px';
    div.style.backgroundColor = ranColor();
    div.style.borderRadius = ranReturn(150)+ 'px';
    div.dataset.test = 'Testing this thing'+counter;
    console.log(div);
    output.appendChild(div);
    counter++;
}
}

function ranReturn(num){
    return Math.ceil(Math.random()*num);
}

function ranColor(){
    function c(){
        var hex = ranReturn(256).toString(16);
        return (String(hex)).substr(-6);
    }

    return '#'+ c()+c()+c();
}