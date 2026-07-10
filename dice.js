function chngdice(){
var randno1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "./images/dice" + randno1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);

var randno2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "./images/dice" + randno2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImage2);

if (randno1 > randno2) {
    document.querySelector("h1").innerHTML = " Player 1 Wins";
        document.querySelector("h1").style.color = "#00ff6a";
         document.body.style.background =
            "linear-gradient(135deg, beige, #1b5e20)";

} else if (randno2 > randno1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
        document.querySelector("h1").style.color = "red";
         document.body.style.background =
            "linear-gradient(135deg, #2196f3, #0d47a1)";

} else {
    document.querySelector("h1").innerHTML = " Draw";
        document.querySelector("h1").style.color = "white";
    document.body.style.background =
            "linear-gradient(135deg, #ffb300, #ff6f00)";
}
}