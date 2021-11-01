let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

makeBase();

function makeBase() {
    let baseImage = new Image();
    baseImage.src = "images/dungeon-map-v2-1 - Copy.png";
    baseImage.onload = function () {
        ctx.drawImage(baseImage, 0, 0);
    }
}