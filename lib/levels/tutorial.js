import {
  Level, LevelBuilder, Door, Elevator, ExitElevator, ButtonBlock,
  Cubby, Wire, WireJunction, PowerSource, ForceFieldBlock, Panel, Spring, Message
} from './../level_builder.js';

const builder = new LevelBuilder();

const doors = [
  new Door(101, "left"),
  new Door(102, "left")
];

const messages = [
  new Message(0, 7, 0, 5, "top", "Use the arrow keys to move left and right."),
  new Message(9, 18, 3, 5, "top", "You can also use the up and down", "arrow keys to ride elevators."),
  new Message(9, 18, 0, 2, "bottom", "You can also use the up and down", "arrow keys to ride elevators."),
  new Message(23, 30, 2, 5, "top", "Push buttons to open doors."),
  new Message(35, 39, 2, 5, "top", "Press spacebar while in front of a socket", "to insert or remove a panel."),
  new Message(41, 43, 2, 5, "top", "Place the correct panel in this socket", "to send power to the button."),
  new Message(48, 54, 2, 5, "top", "Disrupt power to force fields", "to pass through them."),
  new Message(58, 61, 2, 5, "top", "The spring power-up allows you to extend", "the height of your robot."),
  new Message(61, 69, 2, 5, "top", "Now you can use the up and down", "arrow keys to adjust your height."),
  new Message(70, 76, 3, 4, "top", "Your goal is to find the red elevators.", "You can ride them up to the next level.")
];

const elevators = [
  new Elevator({
    id: 101,
    baseRowCol: [5, 11],
    startingHeight: 0,
    heights: [0, 3]
  }),
  new Elevator({
    id: 101,
    baseRowCol: [5, 12],
    startingHeight: 0,
    heights: [0, 3]
  }),
  new Elevator({
    id: 102,
    baseRowCol: [5, 17],
    startingHeight: 3,
    heights: [0, 3]
  }),
  new Elevator({
    id: 102,
    baseRowCol: [5, 18],
    startingHeight: 3,
    heights: [0, 3]
  }),
  new Elevator({
    id: 103,
    baseRowCol: [5, 24],
    startingHeight: 0,
    heights: [0, 2]
  }),
  new Elevator({
    id: 103,
    baseRowCol: [5, 25],
    startingHeight: 0,
    heights: [0, 2]
  }),
  new Elevator({
    id: 104,
    baseRowCol: [5, 45],
    startingHeight: 0,
    heights: [0, 2]
  }),
  new Elevator({
    id: 104,
    baseRowCol: [5, 46],
    startingHeight: 0,
    heights: [0, 2]
  }),
  new ExitElevator({
    id: 105,
    baseRowCol: [5, 75],
    startingHeight: 0,
    heights: [0, 10]
  }),
  new ExitElevator({
    id: 105,
    baseRowCol: [5, 76],
    startingHeight: 0,
    heights: [0, 10]
  })
];

const cubbies = [
  new Cubby({
    id: "C101",
    rowCol: [4, 36],
    startItem: new Panel(["E", "W"])
  }),
  new Cubby({
    id: "C101",
    rowCol: [4, 37],
    startItem: new Panel(["N", "S"])
  }),
  new Cubby({
    id: "C101",
    rowCol: [4, 38],
    startItem: new Panel(["S", "W"])
  }),
  new Cubby({
    id: "C101",
    rowCol: [4, 42],
    startItem: null
  }),
  new Cubby({
    id: "C101",
    rowCol: [4, 52],
    startItem: new Panel(["N", "S"])
  }),
  new Cubby({
    id: "C101",
    rowCol: [3, 68],
    startItem: new Panel(["N", "E"])
  })
];

const powerSources = [
  new PowerSource({
    id: "PS101",
    rowCol: [0, 29]
  }),
  new PowerSource({
    id: "PS102",
    rowCol: [5, 42]
  }),
  new PowerSource({
    id: "PS103",
    rowCol: [5, 52]
  }),
  new PowerSource({
    id: "PS104",
    rowCol: [0, 68]
  })
];

const wiring = [
  new Wire({ rowCol: [2, 29], type: "NW" }),
  new Wire({ rowCol: [1, 29], type: "NS" }),

  new WireJunction({ rowCol: [4, 42], segmentStrings: ["N", "S"] }),
  new Wire({ rowCol: [3, 42], type: "NS" }),
  new Wire({ rowCol: [2, 42], type: "ES" }),

  new WireJunction({ rowCol: [4, 52], segmentStrings: ["N", "S"] }),
  new Wire({ rowCol: [3, 52], type: "ES" }),
  new Wire({ rowCol: [3, 53], type: "EW" }),

  new Wire({ rowCol: [1, 68], type: "NS" }),
  new Wire({ rowCol: [2, 68], type: "NS" }),
  new WireJunction({ rowCol: [3, 68], segmentStrings: ["N", "E"] })
];

const buttonBlocks = [
  new ButtonBlock({
    id: "BB101",
    side: "left",
    rowCol: [2, 28],
    func: function () {
      doors[0].open();
    }
  }),
  new ButtonBlock({
    id: "BB102",
    side: "right",
    rowCol: [2, 43],
    func: function () {
      doors[1].open();
    }
  })
];

const forceFieldBlocks = [
  new ForceFieldBlock({
    id: "FF101",
    rowCol: [2, 53]
  }),
  new ForceFieldBlock({
    id: "FF101",
    rowCol: [3, 69]
  })
];

const foregroundGrid = [
  builder.rowOf(29, "block").concat([powerSources[0]]).concat(builder.rowOf(38, "block")).concat([powerSources[3]]).concat(builder.rowOf(6, "block")).concat(["", "", "block"]),
  ["block"].concat(builder.rowOf(9, "")).concat(["block"]).concat(builder.rowOf(8, "")).concat(["block"]).concat(builder.rowOf(3, "")).concat(["block"]).concat(builder.rowOf(6, "")).concat(["block"]).concat(builder.rowOf(10, "")).concat(["block"]).concat(builder.rowOf(5, "")).concat(["block"]).concat(builder.rowOf(29, "")).concat(["block"]),
  ["block"].concat(builder.rowOf(12, "")).concat(builder.rowOf(4, "block")).concat(builder.rowOf(6, "")).concat(["block"]).concat(builder.rowOf(4, "")).concat([buttonBlocks[0]]).concat(["", "block"]).concat(builder.rowOf(10, "")).concat(["block"]).concat(["", buttonBlocks[1]]).concat(builder.rowOf(3, "")).concat(["block"]).concat(builder.rowOf(29, "")).concat(["block"]),
  ["block"].concat(builder.rowOf(12, "")).concat(builder.rowOf(4, "block")).concat(builder.rowOf(9, "")).concat(builder.rowOf(5, "block")).concat(builder.rowOf(10, "")).concat(["block", ""]).concat(builder.rowOf(2, "block")).concat(builder.rowOf(2, "")).concat(["block"]).concat(builder.rowOf(6, "")).concat([forceFieldBlocks[0]]).concat(builder.rowOf(14, "")).concat([forceFieldBlocks[1]]).concat(builder.rowOf(7, "")).concat(["block"]),
  ["block"].concat(builder.rowOf(12, "")).concat(builder.rowOf(4, "block")).concat(builder.rowOf(13, "")).concat(doors[0]).concat(builder.rowOf(16, "")).concat(doors[1]).concat(builder.rowOf(6, "")).concat(["forceField"]).concat(builder.rowOf(7, "")).concat([new Spring()]).concat(builder.rowOf(6, "")).concat(["forceField"]).concat(builder.rowOf(7, "")).concat(["block"]),
  builder.rowOf(11, "block").concat(builder.rowOf(2, "")).concat(builder.rowOf(4, "block")).concat(builder.rowOf(2, "")).concat(builder.rowOf(5, "block")).concat(builder.rowOf(2, "")).concat(builder.rowOf(16, "block")).concat([powerSources[1]]).concat(builder.rowOf(2, "block")).concat(builder.rowOf(2, "")).concat(builder.rowOf(5, "block")).concat([powerSources[2]]).concat(builder.rowOf(22, "block")).concat(["", "", "block"])
];

const backgroundGrid = [
  builder.rowOf(78, "brick"),
  builder.rowOf(78, "brick"),
  builder.rowOf(78, "brick"),
  builder.rowOf(78, "brick"),
  builder.rowOf(78, "brick"),
  builder.rowOf(78, "brick")
];

const level = new Level({
  color: '#632612',
  foregroundGrid: foregroundGrid,
  backgroundGrid: backgroundGrid,
  startingPos: [225.5, 300.5],
  elevators: elevators,
  doors: doors,
  cubbies: cubbies,
  wiring: wiring,
  powerSources: powerSources,
  forceFieldBlocks: forceFieldBlocks,
  buttonBlocks: buttonBlocks,
  messages: messages
});

module.exports = level;
