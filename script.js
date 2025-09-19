function switchOff(){
    document.getElementById("bulbImage").src = "assets/bulb_on.png"; //changes to bulb on when switched off
    document.getElementById("catImage").src = "assets/cat_eyes.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("offSwitch").style.backgroundColor = "#c53822ff"; // red
}
function switchOn(){
    document.getElementById("bulbImage").src = "assets/bulb_on.png"; //changes to bulb on when switched on
    document.getElementById("catImage").src = "assets/cat.png";
    document.getElementById("switchStatus").textContent= "Switched On";
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e"; // green
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
}
