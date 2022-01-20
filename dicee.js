function test(){

    //RANDOM NUMBER
var randomNumber1 = Math.floor((Math.random()*6)+1);
console.log(randomNumber1)

//CHANGE IMAGE 1
var randomPicName = "dice" + randomNumber1 +".png";
console.log(randomPicName);
var imagesrc = "images/"+ randomPicName;
var image1 = document.querySelectorAll("img")[0];
console.log(image1)
image1.setAttribute("src",imagesrc);

//CHANGE IMAGE 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomPic2 = "dice"+randomNumber2+".png";
var randomimgsrc = "images/"+randomPic2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimgsrc);

//Winner

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="It's a Draw! Try again :p";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
}
//BUTTON CLICKED
document.querySelector("button").addEventListener("click",test);