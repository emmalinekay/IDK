var myRover = {
  position: [0,0],
  direction: 'N'
};

function goForward(myRover) {
  switch(myRover.direction) {
    case 'N':
      myRover.position[0]++;
      break;
    case 'E':
      myRover.position[1]++;
      break;
    case 'S':
      myRover.position[0]--;
      break;
    case 'W':
      myRover.position[1]--;
      break;
  }

  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
}

function goBack(myRover) {
  switch(myRover.direction) {
    case 'N':
      myRover.position[0]--;
      break;
    case 'E':
      myRover.position[1]--;
      break;
    case 'S':
      myRover.position[0]++;
      break;
    case 'W':
      myRover.position[1]++;
      break;
  }
  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
}

function turnRight(myRover) {
  switch(myRover.direction) {
    case 'N':
      myRover.position='E';
      break;
    case 'E':
      myRover.position='S';
      break;
    case 'S':
      myRover.position='W';
      break;
    case 'W':
      myRover.position='N';
      break;
  }
  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
}

function turnLeft(myRover) {
  switch(myRover.direction){
    case 'N':
      myRover.direction = 'W';
    break;
    case 'E':
      myRover.direction = 'N';
    break;
    case 'S':
      myRover.direction = 'E';
    break;
    case 'W':
      myRover.direction = 'S';
    break;
    }

    console.log("New Rover position: [" + myRover.position[0] + ", " + myRover.position[0] + "]");
}

function inputCommand(){
  var inputCommand = prompt("Use the up, down, left, and right keys on your keyboard to go front, back, left, right");

    var commandArray = inputCommand.split("");

  for(var i = 0; i < commandArray.length; i++) {

    if(commandArray[i] ==='f') {
        goForward(myRover);
      }

      else if(commandArray[i] ==='b') {
        goBack(myRover);
      }

      else if(commandArray[i] ==='l') {
        turnLeft(myRover);
      }

      else if(commandArray[i] ==='r') {
        turnRight(myRover);
      }

    else {
      console.log('That is not one of the commands. Do better.');
      return inputCommand();
    }
  }
}
