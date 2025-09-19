function switchOff(){
    document.getElementById("bulbImage").src = "https://res.cloudinary.com/dd8ipwito/image/upload/v1758290227/bulb_off_saqlz6.png"; //changes to bulb on when switched off
    document.getElementById("catImage").src = "https://res.cloudinary.com/dd8ipwito/image/upload/v1758290538/cat_eyes_m0rdj9.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("offSwitch").style.backgroundColor = "#c53822ff"; // red
}
function switchOn(){
    document.getElementById("bulbImage").src = "https://res.cloudinary.com/dd8ipwito/image/upload/v1758290540/bulb_on_f7vetx.png"; //changes to bulb on when switched on
    document.getElementById("catImage").src = "https://res.cloudinary.com/dd8ipwito/image/upload/v1758290539/cat_ydgn9m.png";
    document.getElementById("switchStatus").textContent= "Switched On";
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e"; // green
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
}
