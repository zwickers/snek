var animate = (function () { 
    
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

    var drawSnake = function() {
        var snekLength = 4;
        snek = [];
        for (var i = snekLength; i>=0; i--) {
            snek.push({x:i, y:0});
        }  
    }

    var createFood = function() {
          food = {
            //Generate random numbers.
            x: Math.floor((Math.random() * 30) + 1),
            y: Math.floor((Math.random() * 30) + 1)
        }
        
        //Look at the position of the snake's body.
        for (var i=0; i>snake.length; i++) {
            var snekX = snek[i].x;
            var snekY = snek[i].y;
            
             if (food.x === snekX || 
                food.y === snekY || 
                food.y === snekY && 
                food.x === snekX) {

                food.x = Math.floor((Math.random() * 30) + 1);
                food.y = Math.floor((Math.random() * 30) + 1);

            }
        }
    }

}());