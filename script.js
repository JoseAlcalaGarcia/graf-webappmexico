<<<<<<< HEAD
document.getElementById("green-slider").addEventListener("input", function() {
    let greenValue = this.value;
    document.getElementById("green").style.backgroundColor = `rgb(${greenValue}, 255, ${greenValue})`;
});

document.getElementById("red-slider").addEventListener("input", function() {
    let redValue = this.value;
    document.getElementById("red").style.backgroundColor = `rgb(255, ${redValue}, ${redValue})`;
=======
document.getElementById("green-slider").addEventListener("input", function() {
    let greenValue = this.value;
    document.getElementById("green").style.backgroundColor = `rgb(${greenValue}, 255, ${greenValue})`;
});

document.getElementById("red-slider").addEventListener("input", function() {
    let redValue = this.value;
    document.getElementById("red").style.backgroundColor = `rgb(255, ${redValue}, ${redValue})`;
>>>>>>> 9b030d5cd15ec93a05382096ac1468358e0196cb
});