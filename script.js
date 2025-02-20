document.getElementById("green-slider").addEventListener("input", function() {
    let greenValue = this.value;
    let hexGreen = greenValue.toString(16).padStart(2, '0');
    document.getElementById("green").style.backgroundColor = `#00${hexGreen}00`;
    document.getElementById("green-code").textContent = `#00${hexGreen}00`;
});

document.getElementById("red-slider").addEventListener("input", function() {
    let redValue = this.value;
    let hexRed = redValue.toString(16).padStart(2, '0');
    document.getElementById("red").style.backgroundColor = `#${hexRed}0000`;
    document.getElementById("red-code").textContent = `#${hexRed}0000`;
});