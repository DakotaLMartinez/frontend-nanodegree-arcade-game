// Enemies our player must avoid
class Enemy {
  constructor(options = {}) {
    this.sprite = 'images/enemy-bug.png';
    this.speed = Math.floor(Math.random() * 40) + 20;
    this.direction = 'right';
    this.x = Math.floor(Math.random() * 408);
    this.y = Math.floor(Math.random() * 180) + 55;
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    console.log('x', this.x, 'y', this.y)
    if (this.direction == 'right') {
      if (this.x <= 408) {
        this.x += dt * this.speed;
      } else {
        this.direction = 'left';
      }
    } else if (this.direction == 'left') {
      if (this.x >= 0) {
        this.x -= dt * this.speed;
      } else {
        this.direction = 'right';
      }
    }
  }
  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor() {
    this.sprite = 'images/char-boy.png';
    this.speed = 10;
    this.x = 200; this.y = 400;
  }

  update() {

  }
  // receive direction from event handler and update position in response
  // only allow movement if the player is not moving off of the board.
  handleInput(direction) {
    console.log(direction);
    switch (direction) {
      case "left":
        if (this.x >= -15) {
          this.x = this.x - this.speed;
        }
        break;
      case "right":
        if (this.x <= 418) {
          this.x += this.speed;
        }
        break;
      case "up":
        if (this.y >= 0) {
          this.y -= this.speed;
        }
        break;
      case "down":
        if (this.y <= 440) {
          this.y += this.speed;
        }
        break;
      default:
        return
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [new Enemy(),new Enemy(),new Enemy()];
const player = new Player();
// allEnemies.forEach(function(enemy) { enemy.render()})


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
