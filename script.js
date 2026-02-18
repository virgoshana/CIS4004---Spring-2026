var counter = 0;

function tickUp() {
    counter = counter + 1;
    document.getElementById("counter").innerHTML = counter;
}

function tickDown() {
    counter = counter - 1;
    document.getElementById("counter").innerHTML = counter;
}

function runForLoop() {

    var text = "";
    for (var i = 0; i <= counter; i++) {
        text = text + i + " ";
    }
    document.getElementById("forLoopResult").innerHTML = text;
}

function showOddNumbers() {

    var text = "";
    var i = 1;

    while (i <= counter) {

        if (i % 2 == 1) {
            text = text + i + " ";
        }
        i = i + 1;
    }

    document.getElementById("oddNumberResult").innerHTML = text;
}

function addMultiplesToArray() {

    var arr = [];

    for (var i = counter; i >= 5; i--) {

        if (i % 5 == 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}

function printCarObject() {

    var type = document.getElementById("carType").value;
    var mpg = document.getElementById("carMPG").value;
    var color = document.getElementById("carColor").value;

    var car = {
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(car);
}

function loadCar(num) {

    var car;

    if (num == 1) {
        car = carObject1;
    }

    if (num == 2) {
        car = carObject2;
    }

    if (num == 3) {
        car = carObject3;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(num) {
    var p = document.getElementById("styleParagraph");

    if (num == 1) {
        p.style.color = "red";
    }

    if (num == 2) {
        p.style.color = "green";
    }

    if (num == 3) {
        p.style.color = "blue";
    }
}
