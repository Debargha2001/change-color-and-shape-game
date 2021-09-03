var cur = "square";

var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];

var color = ["red", "orange", "green", "maroon", "pink", "violet", "blue", "cyan", "black", "blueviolet", "yellow", "purple"];

document.getElementById('change-shape').onclick = function() {
    var randShape = shape[Math.floor(Math.random() * shape.length)];
    document.getElementById(cur).setAttribute("id",randShape);
    cur=randShape;
}

document.getElementById('change-color').onclick = function() {
    var randColor = color[Math.floor(Math.random() * color.length)];
    document.getElementById('block').style.backgroundColor = randColor;
}