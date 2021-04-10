var gridSize = 6;
var gridSizeHalf = gridSize / 2;
var dots = 4;
var gridPosition = 0;


function forwardOne(pointX, pointY) {
    for (var a = 0; a < dots; a++) {
        console.log((pointX + a) + ", " + (pointY + a));
    }
}

function backwardOne(pointX, pointY) {
    for (var a = 0; a < dots; a++) {
        console.log((pointX - a) + ", " + (pointY - a));
    }
}

function horizontalOne(pointX, pointY) {
    for (var a = 0; a < dots; a++) {
        console.log((pointX) + ", " + (pointY + a));
    }
}

function verticalOne(pointX, pointY) {
    for (var a = 0; a < dots; a++) {
        console.log((pointX + a) + ", " + (pointY));
    }
}

function horizontalAll() {
    for (var x = 0; x < gridSizeHalf; x++) {
        for (var y = 0; y < gridSize; y++) {
            horizontalOne(x,y);
        }
    }
}

function verticalAll() {
    for (var x = 0; x < gridSize; x++) {
        for (var y = 0; y < gridSizeHalf; y++) {
            horizontalOne(x,y);
        }
    }
}

function forwardAll() {
    for (var x = gridPosition; x < gridSizeHalf; x++) {
        for (var y = gridPosition; y < gridSizeHalf; y++) {
            forwardOne(x,y);
        }
    }
}

function backwardAll() {
    for (var x = gridSize - 1; x > gridSizeHalf - 1; x--) {
        for (var y = gridSize - 1; y > gridSizeHalf - 1; y--) {
            forwardOne(x,y);
        }
    }
}
