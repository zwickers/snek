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
        //make sure food doesn't appear on top of snakes body
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

}());