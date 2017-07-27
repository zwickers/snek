var main = (function () { 
    
    var snekBody = function(x, y) {
        // This is the single square
        ctx.fillStyle = '#2ECC40';//green
        ctx.fillRect(x*snekGirth, y*snekGirth, snekGirth, snekGirth);
        // This is the border of the square
        ctx.strokeStyle = '#111111';//black
        ctx.strokeRect(x*snekGirth, y*snekGirth, snekGirth, snekGirth);
    }

    var apple = function(x, y) {
        ctx.fillStyle = '#111111';//black
        ctx.fillRect(x*snekGirth, y*snekGirth, snekGirth, snekGirth);
        // This is the single square 
        ctx.fillStyle = '#FF4136';//red
        ctx.fillRect(x*snekGirth+1, y*snekGirth+1, snekGirth-2, snekGirth-2);
    }

    var scoreText = function() {
        var scoreText = "Score: " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(scoreText, 145, canvasHeight-5);
    }

    var drawSnek = function() {
        var snekStartingLength = 4;
        snek = [];
        for (var i = snekStartingLength; i>=0; i--) {
            snek.push({x:i, y:0});
        }  
    }

    var generateFood = function() {
        food = {
            //food's coordinates are randomly generated
            x: Math.floor((Math.random() * 30) + 1),
            y: Math.floor((Math.random() * 30) + 1)
        }
        //make sure food doesn't appear on top of sneks body
        for (var i=0; i>snek.length; i++) {

            var snekX = snek[i].x;
            var snekY = snek[i].y;
            
             if (food.x === snekX || 
                food.y === snekY || 
                food.y === snekY && 
                food.x === snekX) 
             {
                food.x = Math.floor((Math.random() * 30) + 1);
                food.y = Math.floor((Math.random() * 30) + 1);
            }
        }
    }

    var detectCollision = function(x, y, array) {
        for(var i = 0; i < array.length; i++) {
            if(array[i].x === x && array[i].y === y)
            return true;
        } 
        return false;
    }

    var gameLoop = function () {
        //the background
        ctx.fillStyle = '#111111';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        //border
        ctx.strokeStyle = '#2ECC40';
        ctx.strokeRect(0, 0, canvasWidth, canvasHeight);

        //Disable the button _start_ while you're playing.
        btn.setAttribute('disabled', true);

        var snekX = snek[0].x;
        var snekY = snek[0].y;

        /*
        Make the snek move.
        Use a variable ('direction') to control the movement.
        To move the snek, pop out the last element of the array and shift it on the top as first element.
        */
        if (direction == 'R') {
            snekX++;
        } else if (direction == 'L') {
            snekX--;
        } else if (direction == 'U') {
            snekY--;
        } else if (direction == 'D') {
            snekY++;
        }

        /*
        If the snek touches the canvas path or itself, it will die!
        Therefore if x or y of an element of the snek, don't fit inside the canvas, the game will be stopped.
        If the check_collision is true, it means the the snek has crashed on its body itself, then the game will be stopped again. 
        */
        if (snekX == -1 || snekX == canvasWidth / snekGirth || snekY == -1 || snekY == canvasHeight / snekGirth || detectCollision(snekX, snekY, snek)) {
            //Stop the game.

            //Make the start button enabled again.
            btn.removeAttribute('disabled', true);

            //Clean up the canvas.
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            gameloop = clearInterval(gameloop);
            return;
        }

        //If the snek eats food it becomes longer and this means that, in this case, you shouldn't pop out the last element of the array.
        if (snekX == food.x && snekY == food.y) {
            //Create a new square instead of moving the tail.
            var tail = {
                x: snekX,
                y: snekY
            };
            score++;

            //Create new food.
            generateFood();
        } else {

            //Pop out the last cell.
            var tail = snek.pop();
            tail.x = snekX;
            tail.y = snekY;
        }

        //Puts the tail as the first cell.
        snek.unshift(tail);

        //For each element of the array create a square using the snekBody function we created before.
        for (var i = 0; i < snek.length; i++) {
            snekBody(snek[i].x, snek[i].y);
        }

       
        apple(food.x, food.y);

        //Put the score text.
        scoreText();
    }

var init = function () {
      direction = 'R';
      drawSnek();
      generateFood();
      gameloop = setInterval(gameLoop, 80);
  }
  return {
      init: init
  };


}());