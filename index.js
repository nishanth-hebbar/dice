var Randomnumber1 = Math.floor(Math.random()*6)+1;
var RandomDiceimage = "dice" + Randomnumber1 + ".png";
var RandomimageSource = "images/dice" + Randomnumber1 + ".png";
var Image1=document.querySelectorAll("img")[0];
Image1.setAttribute("src",RandomimageSource);
var Randomnumber2=Math.floor(Math.random()*6)+1;
var RandomDiceimage2 = "dice" + Randomnumber2 + ".png";
var RandomimageSource2="images/dice"+Randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",RandomimageSource2);
if(Randomnumber1>Randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (Randomnumber1<Randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else if(Randomnumber1==Randomnumber2) 
{
    document.querySelector("h1").innerHTML="Draw";
}