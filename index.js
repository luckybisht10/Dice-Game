
var randomNumber=Math.floor(Math.random()*6)+ 1;

var randomImage="images/" + "dice" + randomNumber + ".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage);
// for second image

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImage2="images/" + "dice"+ randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage2);

//printing the Result
if(randomNumber==randomNumber2){
    document.querySelector("h1").innerHTML="Draw! Play Again";
}
else if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 wins";
}
else{
    document.querySelector("h1").innerHTML="Player2 wins";
}