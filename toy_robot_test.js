const chai = require("chai");
const expect = chai.expect;

const ToyRobot = require("./toy_robot");

describe("Toy Robot Tests", () => {
  let robot;
  let originalConsoleLog; // Store a reference to the original console.log

  beforeEach(() => {
    robot = new ToyRobot();
    originalConsoleLog = console.log; // Store the original console.log function
  });

  afterEach(() => {
    console.log = originalConsoleLog; // Restore the original console.log function
  });

  it("should place the robot on the table", () => {
    robot.executeCommand("PLACE 1,2,EAST");
    expect(robot.x).to.equal(1);
    expect(robot.y).to.equal(2);
    expect(robot.direction).to.equal("EAST");
  });

  it("should ignore invalid MOVE commands", () => {
    robot.executeCommand("PLACE 0,4,NORTH"); // Placing the robot at the table edge
    robot.executeCommand("MOVE"); // This should be ignored
    expect(robot.x).to.equal(0);
    expect(robot.y).to.equal(4);
    expect(robot.direction).to.equal("NORTH");
  });

  it("should not place the robot beyond the table", () => {
    // Attempt to place the robot beyond the table
    robot.executeCommand("PLACE 5,5,NORTH");

    // Expect the robot to remain in its initial state
    expect(robot.x).to.equal(null); // x should remain null
    expect(robot.y).to.equal(null); // y should remain null
    expect(robot.direction).to.equal(null); // direction should remain null
  });

  it("should check the output after the sequence (PLACE 0,0,NORTH) -> MOVE -> REPORT", () => {
    robot.executeCommand("PLACE 0,0,NORTH");
    robot.executeCommand("MOVE");
    robot.executeCommand("REPORT");
    expect(robot.x).to.equal(0);
    expect(robot.y).to.equal(1);
    expect(robot.direction).to.equal("NORTH");
  });

  it("should check the output after sequence (PLACE 0,0,NORTH)->LEFT->REPORT", () => {
    robot.executeCommand("PLACE 0,0,NORTH");
    robot.executeCommand("LEFT");
    robot.executeCommand("REPORT");
    expect(robot.x).to.equal(0);
    expect(robot.y).to.equal(0);
    expect(robot.direction).to.equal("WEST");
  });

  it("Checks the output after sequence (PLACE 1,2,EAST)->MOVE->MOVE->LEFT->MOVE->REPORT", () => {
    robot.executeCommand("PLACE 1,2,EAST");
    robot.executeCommand("MOVE");
    robot.executeCommand("MOVE");
    robot.executeCommand("LEFT");
    robot.executeCommand("MOVE");
    robot.executeCommand("REPORT");
    expect(robot.x).to.equal(3);
    expect(robot.y).to.equal(3);
    expect(robot.direction).to.equal("NORTH");
  });

  it("should not start the Bot movement, until PLACE command is issued", () => {
    robot.executeCommand("MOVE");
    robot.executeCommand("LEFT");
    robot.executeCommand("RIGHT");
    expect(robot.x).to.equal(null); // x should remain null
    expect(robot.y).to.equal(null); // y should remain null
    expect(robot.direction).to.equal(null); // direction should remain null
  });

  it("should place the robot at 0,0,NORTH, move, and report correctly", () => {
    // Place the robot at 0,0,NORTH
    robot.executeCommand("PLACE 0,0,NORTH");

    // Move the robot
    robot.executeCommand("MOVE");

    // Capture the output
    let capturedOutput = null;
    console.log = (output) => (capturedOutput = output); // Capture the console.log output

    // Report the robot's position
    robot.executeCommand("REPORT");

    // Restore the original console.log function
    console.log = originalConsoleLog; // Restore the original console.log

    // Expect the captured output to match the expected output
    expect(capturedOutput.trim()).to.equal("0,1,NORTH");
  });
});
