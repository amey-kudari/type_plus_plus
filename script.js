
const keyboardMap = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var score=0;
var q=0;
var maxsc=0;
var col=0;
var tl=10;
var move=0;
window.addEventListener('keydown',function(e){
//    console.log(e);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        key.classList.add('playing');
    setTimeout(function(){
        key.classList.remove('playing');
    },80)
    ;
    document.querySelector('h2').innerHTML=keyboardMap[q];
    var k = q+65;
    const hkey = document.querySelector(`div[data-key="${k}"]`);
    hkey.style.color = "black";
    if((e.keyCode-65) == q){
        score++;
        hkey.style.color = "white";
        q=Math.floor(Math.random()*26);
    }
    if(score==1){
        move=1;
        tstart();
//        setTimeout(start,10000);
        score++;
    }
    document.querySelector('#score').innerHTML=score;
    document.querySelector('#curr').innerHTML=score;
    console.log(score);
    console.log(maxsc)
    if(score > maxsc){
        maxsc = score;
        document.querySelector('#maxs').innerHTML=maxsc;
    }
    console.log(score);
});
function start(){
    score=0;
    document.querySelector('#score').innerHTML=score;
}
function tstart(){
    var brk = setInterval(function(){
        if(tl==0){
            document.querySelector('body').style.backgroundColor = 'pink';
            start();
            move=0;
            tl=60;
            document.querySelector('#timel').innerHTML=tl;
            clearInterval(brk);
        }
        if(tl==45){
            document.querySelector('body').style.backgroundColor = 'hotpink';
        }
        if(tl==30){
            document.querySelector('body').style.backgroundColor = 'red';
        }
        if(tl==15){
            document.querySelector('body').style.backgroundColor = 'darkred';
        }
        if(move==1) tl--;
        document.querySelector('#timel').innerHTML=tl;
    },1000);
}








