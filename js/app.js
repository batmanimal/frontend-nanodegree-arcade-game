// read the engine file 

// Enemies our player must avoid
var Enemy = function() {
    // define the initial position and speed when you instantiate this enemy
    // needs to be in x,y plane, define min and max 
    // find min/max by looking at engine code (width and ht) where boundaries are defined 
    // could make one ememy class and one player class 
    
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks -> value that normalizes for diff computer speeds 

// create random number, take modulo of number div by numrows (get 0, 1,or 2) 
// need to apply transformation to offset row coord with pixels (where the thing is actually going to show up)

Enemy.prototype.update = function(dt) {
    // this is predefined in the engine 
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
} 

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
