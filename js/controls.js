(function (window, document, main, undefined) {

    //Connect the button in the html with the _init_ function.
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        main.init();
    });

    document.onkeydown = function (event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch (keyCode) {

        case 37:
            if (direction != 'R') {
                direction = 'L';
            }
            console.log('snek moves left');
            break;

        case 39:
            if (direction != 'L') {
                direction = 'R';
                console.log('snek moves right');
            }
            break;

        case 38:
            if (direction != 'D') {
                direction = 'U';
                console.log('snek moves up');
            }
            break;

        case 40:
            if (direction != 'U') {
                direction = 'D';
                console.log('snek moves down');
            }
            break;
        }
    }
})(window, document, main);