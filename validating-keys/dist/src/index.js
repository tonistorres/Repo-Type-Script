"use strict";
var directionsGamePad;
(function (directionsGamePad) {
    directionsGamePad["UP"] = "UP";
    directionsGamePad["DOWN"] = "DOWN";
    directionsGamePad["LEFT"] = "LEFT";
    directionsGamePad["RIGTH"] = "RIGHT";
})(directionsGamePad || (directionsGamePad = {}));
function keyMove(tecla) {
    if (tecla === directionsGamePad.UP) {
        console.log('Foi passado a tecla UP para a função');
    }
    else if (tecla === directionsGamePad.DOWN) {
        console.log('Foi passado a tecla DOWN para a função');
    }
    else if (tecla === directionsGamePad.LEFT) {
        console.log('Foi passado a tecla LEFT para a função');
    }
    else if (tecla === directionsGamePad.RIGTH) {
        console.log('Foi passado a tecla RIGHT para a função');
    }
    else {
        console.log('O valor passado não condiz com as regras definidas para essa função');
    }
}
keyMove('UP');
