const readline = require("readline");

class ToyRobot {
  constructor() {
    this.x = null;
    this.y = null;
    this.direction = null;
  }

  place(x, y, direction) {
    // Implement the PLACE command
    if (this.isValidPosition(x, y) && this.isValidDirection(direction)) {
      this.x = x;
      this.y = y;
      this.direction = direction;
    }
  }

  move() {
    // Implement the MOVE command
    if (this.direction === "NORTH" && this.y < 4) {
      this.y++;
    } else if (this.direction === "SOUTH" && this.y > 0) {
      this.y--;
    } else if (this.direction === "EAST" && this.x < 4) {
      this.x++;
    } else if (this.direction === "WEST" && this.x > 0) {
      this.x--;
    }
  }

  left() {
    // Implement the LEFT command
    if (this.direction === "NORTH") {
      this.direction = "WEST";
    } else if (this.direction === "WEST") {
      this.direction = "SOUTH";
    } else if (this.direction === "SOUTH") {
      this.direction = "EAST";
    } else if (this.direction === "EAST") {
      this.direction = "NORTH";
    }
  }

  right() {
    // Implement the RIGHT command
    if (this.direction === "NORTH") {
      this.direction = "EAST";
    } else if (this.direction === "EAST") {
      this.direction = "SOUTH";
    } else if (this.direction === "SOUTH") {
      this.direction = "WEST";
    } else if (this.direction === "WEST") {
      this.direction = "NORTH";
    }
  }

  report() {
    // Implement the REPORT command
    console.log(`${this.x},${this.y},${this.direction}`);
  }

  isValidPosition(x, y) {
    return x >= 0 && x <= 4 && y >= 0 && y <= 4;
  }

  isValidDirection(direction) {
    const validDirections = ["NORTH", "SOUTH", "EAST", "WEST"];
    return validDirections.includes(direction);
  }

  executeCommand(command) {
    const parts = command.trim().split(" ");
    const action = parts[0];
    const args = parts[1];

    switch (action) {
      case "PLACE":
        const [x, y, direction] = args.split(",");
        this.place(parseInt(x), parseInt(y), direction);
        break;
      case "MOVE":
        this.move();
        break;
      case "LEFT":
        this.left();
        break;
      case "RIGHT":
        this.right();
        break;
      case "REPORT":
        this.report();
        break;
      default:
        console.log("Invalid command");
    }
  }

  readCommandsFromConsole() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.setPrompt("Enter a command: ");
    rl.prompt();

    rl.on("line", (input) => {
      this.executeCommand(input);
      rl.prompt();
    });

    rl.on("close", () => {
      console.log("Exiting Toy Robot...");
      process.exit(0);
    });
  }
}

// Main program
const robot = new ToyRobot();

// Example commands to test the robot
//  robot.executeCommand("PLACE 0,0,NORTH");
//   robot.executeCommand("MOVE");
//   robot.executeCommand("REPORT");
//   robot.executeCommand("LEFT");
//   robot.executeCommand("REPORT");

// Read and execute commands from the console
robot.readCommandsFromConsole();

module.exports = ToyRobot;
