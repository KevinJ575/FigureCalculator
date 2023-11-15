// Square calculations
function squarePerimeterCalculate() {
    var side = parseFloat(document.getElementById("squareInput").value);
    if (!isNaN(side)) {
        var perimeter = 4 * side;
        document.getElementById("SP").innerHTML = "Perimeter: " + perimeter + " cm";
    } else {
        document.getElementById("SP").innerHTML = "Please enter a valid number.";
    }
}

function squareAreaCalculate() {
    var side = parseFloat(document.getElementById("squareInput").value);
    if (!isNaN(side)) {
        var area = side * side;
        document.getElementById("SA").innerHTML = "Area: " + area + " cm^2";
    } else {
        document.getElementById("SA").innerHTML = "Please enter a valid number.";
    }
}

function cleanSquare() {
    document.getElementById("SP").innerHTML = "";
    document.getElementById("SA").innerHTML = "";
    document.getElementById("squareInput").value = "";
}

// Circle calculations
function circlePerimeterCalculate() {
    var radius = parseFloat(document.getElementById("circleInput").value);
    if (!isNaN(radius)) {
        var perimeter = 2 * Math.PI * radius;
        document.getElementById("CP").innerHTML = "Perimeter: " + perimeter + " cm";
    } else {
        document.getElementById("CP").innerHTML = "Please enter a valid number.";
    }
}

function circleAreaCalculate() {
    var radius = parseFloat(document.getElementById("circleInput").value);
    if (!isNaN(radius)) {
        var area = Math.PI * radius * radius;
        document.getElementById("CA").innerHTML = "Area: " + area + " cm^2";
    } else {
        document.getElementById("CA").innerHTML = "Please enter a valid number.";
    }
}

function cleanCircle() {
    document.getElementById("CP").innerHTML = "";
    document.getElementById("CA").innerHTML = "";
    document.getElementById("circleInput").value = "";
}

// Triangle calculations
function trianglePerimeterCalculate() {
    var base = parseFloat(document.getElementById("triangleInputB").value);
    var side1 = parseFloat(document.getElementById("triangleInput1").value);
    var side2 = parseFloat(document.getElementById("triangleInput2").value);
    
    if (!isNaN(base) && !isNaN(side1) && !isNaN(side2)) {
        var perimeter = base + side1 + side2;
        document.getElementById("TP").innerHTML = "Perimeter: " + perimeter + " cm";
    } else {
        document.getElementById("TP").innerHTML = "Please enter valid numbers.";
    }
}

function triangleAreaCalculate() {
    var base = parseFloat(document.getElementById("triangleInputB").value);
    var height = parseFloat(document.getElementById("triangleInputH").value);

    if (!isNaN(base) && !isNaN(height)) {
        var area = 0.5 * base * height;
        document.getElementById("TA").innerHTML = "Area: " + area + " cm^2";
    } else {
        document.getElementById("TA").innerHTML = "Please enter valid numbers.";
    }
}

function cleanTriangle() {
    document.getElementById("TP").innerHTML = "";
    document.getElementById("TA").innerHTML = "";
    document.getElementById("triangleInput1").value = "";
    document.getElementById("triangleInput2").value = "";
    document.getElementById("triangleInputB").value = "";
    document.getElementById("triangleInputH").value = "";
}
