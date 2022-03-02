# Mars-Rover

## THE CODE AND LOGIC:

### class Rover:

- setPath(): takes the given input data as commands and sets the path for rover.

- runMission(): takes command as individual letters to determine the rover's action, by executing the approriate functions e.g "F" executes move() and "L" executes turn().

- move(): this method advances the rover one step forward or one step backward based on its current position decided by the letter passed to the move function. For example, if the rover’s current direction is North and coordinates are (1,3) and the current command letter is "F" , then the new coordinates of rover will be (1,4) along the y axis, going North. and if the current command letter is "B" , then the new coordinates of rover will be (1,2) along the y axis, going North

- turn(): method turns the rover 90 degrees to its left or right using a modulus of 4 e.g. The remainders start at 0 and increases by 1 each time, until the number reaches one less than the number we are dividing by. After that, the sequence repeats.

## UNIT TESTS:

For unit testing, I chose Jest which is a JavaScript test framework running on Node.js.

- Functions from the class Rover were used for testing.
- Find the written tests in "rover.test.js".
- To execute test, simply run "npm test" in the terminal.
