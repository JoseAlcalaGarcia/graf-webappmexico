document.getElementById("green-slider").addEventListener("input", function() {
    let greenValue = this.value;
    document.getElementById("green").style.backgroundColor = `rgb(${greenValue}, 255, ${greenValue})`;
});

document.getElementById("red-slider").addEventListener("input", function() {
    let redValue = this.value;
    document.getElementById("red").style.backgroundColor = `rgb(255, ${redValue}, ${redValue})`;
});