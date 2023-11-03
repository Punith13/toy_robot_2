# Toy Robot Challenge

This is a simulation of a toy robot moving on a square table top. The robot can receive commands to move and report its position on the table.

## Getting Started

To run the Toy Robot application and its tests, follow the instructions below.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

You can download and install Node.js from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```shell
   git clone git@github.com:Punith13/toy_robot_2.git
   ```

2. Navigate to the project directory:

   ```shell
   cd toy_robot_2
   ```

3. Install project dependencies:

   ```shell
   npm install
   ```

### Running the Toy Robot

To run the Toy Robot application, execute the following command in your terminal:

```shell
node toy_robot.js
```

This will start the Toy Robot, and you can enter commands via the console. Example commands:

- `PLACE X,Y,F`: Place the robot on the table.
- `MOVE`: Move the robot.
- `LEFT`: Rotate the robot left.
- `RIGHT`: Rotate the robot right.
- `REPORT`: Display the robot's current position and direction.

Enter commands one by one, and the robot will respond accordingly. To exit the program, press `Ctrl+C` in the terminal.

### Running Tests

The Toy Robot application includes tests to ensure its functionality. To run the tests, use the following command:

```shell
npx mocha toy_robot_test.js
```

This will execute the test cases and report the results in your terminal.

## Author

- [Punith Nayak](https://github.com/punith13)

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/) file for details.
