const Rover = require('../src/rover');

test('test rover turns left', () => {
  let rover = new Rover(1, 1, 'NORTH');
  rover.turn('L');
  expect(rover.facing).toEqual('WEST');
});

test('test rover turns right', () => {
  let rover = new Rover(1, 1, 'SOUTH');
  rover.turn('R');
  expect(rover.facing).toEqual('WEST');
});

test('test rover turns left four times', () => {
  let rover = new Rover(1, 1, 'NORTH');
  rover.turn('LLLL');
  expect(rover.facing).toEqual('NORTH');
});

test('test rover turns right four times', () => {
  let rover = new Rover(1, 1, 'NORTH');
  rover.turn('RRRR');
  expect(rover.facing).toEqual('NORTH');
});

test('test rover moves forward', () => {
  let rover = new Rover(1, 2, 'NORTH');
  rover.move('F');
  expect(rover.position).toEqual([1, 3]);
});

test('test rover moves backward', () => {
  let rover = new Rover(1, 2, 'EAST');
  rover.move('B');
  expect(rover.position).toEqual([0, 2]);
});

test('test mission runs according to the given commands and rover faces the correct direction', () => {
  let rover = new Rover(1, 2, 'NORTH');
  rover.setPath('FLFFFRFLB');
  rover.runMission();
  expect(rover.facing).toEqual('WEST');
});

test('test mission runs according to the given commands and rover moves correctly forward', () => {
  let rover = new Rover(1, 2, 'NORTH');
  rover.setPath('FLFFFRFLB');
  rover.runMission();
  expect(rover.position).toEqual([-1, 4]);
});

test('test mission runs according to the given commands and rover enter a coordinate with an obstacle', () => {
  let rover = new Rover(6, 4, 'EAST');
  rover.setPath('FF');
  rover.runMission();
  expect(rover.position).toEqual([6, 4]);
});
