var random1=  Math.floor(Math.random()*6) +1;

var img= "dice" + random1 + ".png";

var imgSource= "img/" + img;

document.querySelectorAll("img")[0].setAttribute("src", imgSource);



var random2=  Math.floor(Math.random()*6) + 1;

var img2= "dice" + random2 + ".png";

var img2Source = "img/" + img2;

document.querySelectorAll("img")[1].setAttribute('src', img2Source);



if(random1> random2)
{
    document.querySelector('h1').textContent = "🚩 Player-1 Wins";
}
else if(random2 > random1){
    document.querySelector('h1').textContent = "Player-2 Wins! 🚩";
}
else{
    document.querySelector('h1').textContent = "Draw!!" ;}