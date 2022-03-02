module.exports = class Rover {
  constructor(positionX, positionY, facing) {
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    this.obstacles = [
      [1, 4],
      [3, 5],
      [7, 4]
    ];
    this.path = null;
    this.position = [positionX, positionY];
    this.facing = facing;
  }

  setPath(commands) {
    this.path = commands;
  }

  runMission() {
    for (var i = 0; i < this.path.length; i++) {
      var command = this.path[i];
      if (command == 'F' || command == 'B') {
        this.move(command);
      } else if (command == 'L' || command == 'R') {
        this.turn(command);
      }
    }
  }

  turn(command) {
    var cardinalIndex = this.directions.indexOf(this.facing);
    if (command == 'L') {
      cardinalIndex = (cardinalIndex + 4 - 1) % 4;
    } else if (command == 'R') {
      cardinalIndex = (cardinalIndex + 1) % 4;
    }
    this.facing = this.directions[cardinalIndex];
  }

  move(command) {
    if (command == 'F') {
      // forward
      var coordinateX = this.position[0];
      var coordinateY = this.position[1];
      if (this.facing == 'NORTH') {
        coordinateY++;
      } else if (this.facing == 'EAST') {
        coordinateX++;
      } else if (this.facing == 'SOUTH') {
        coordinateY--;
      } else if (this.facing == 'WEST') {
        coordinateX--;
      }
    } else if (command == 'B') {
      // Backward
      var coordinateX = this.position[0];
      var coordinateY = this.position[1];
      if (this.facing == 'NORTH') {
        coordinateY--;
      } else if (this.facing == 'EAST') {
        coordinateX--;
      } else if (this.facing == 'SOUTH') {
        coordinateY++;
      } else if (this.facing == 'WEST') {
        coordinateX++;
      }
    }

    var newPosition = [coordinateX, coordinateY];
    if (this.isObstacle(newPosition)) {
      console.log(`(${coordinateX}, ${coordinateY}) ${this.facing} STOPPED`);
      return false;
    }
    this.position = [coordinateX, coordinateY];
  }

  isObstacle(newPosition) {
    for (var i = 0; i < this.obstacles.length; i++) {
      if (newPosition.toString() == this.obstacles[i].toString()) {
        return true;
      }
    }
    return false;
  }
};
