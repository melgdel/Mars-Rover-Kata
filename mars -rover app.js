// Rover Object Goes Here
// ======================

var rover = {direction:"N", x:0, y:0, travelLog:[0,0]};


// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");

  if (rover.direction == "N"){
    rover.direction = "W";
    console.log("looking to the WEST");
  } else if (rover.direction == "W") {
    rover.direction = "S";
    console.log("looking to the SOUTH");
  } else if (rover.direction == "S"){
    rover.direction = "E";
    console.log("looking to the EAST");
  }
  else if (rover.direction == "E"){
    rover.direction = "N";
    console.log("looking to the NORTH");
  }
  rover.travelLog.push(rover.x,rover.y);
  console.log("The rover is now on : " + rover.x + ", " + rover.y);
}

function turnRight(rover){
  console.log("turnRight was called!");
  
  if (rover.direction == "N"){
    rover.direction = "E";
    console.log("looking to the EAST");
  } else if (rover.direction == "E") {
    rover.direction = "S";
    console.log("looking to the SOUTH");
  } else if (rover.direction == "S"){
    rover.direction = "W";
    console.log("looking to the WEST");
  } else if (rover.direction == "W"){
    rover.direction = "N";
    console.log("looking to the NORTH");
  }

  rover.travelLog.push(rover.x,rover.y);
  console.log("The rover is now on : " + rover.x + ", " + rover.y);
}

function moveForward(rover){
  console.log("moveForward was called")

  if (rover.direction == "N"){

    if (rover.x == 0)
    {
      console.log("OUT OF THE GRID!!!")
    }else{
      rover.y+=1
    }

  } else if (rover.direction == "W") {
   
    if (rover.y == 0)
    {
      console.log("OUT OF THE GRID!!!")
    } else{
      rover.x-=1;
    }
   
  } else if (rover.direction == "S"){
   
    if (rover.y == 9)
    {
      console.log("OUT OF THE GRID!!!")
    }else{
      rover.y-=1;
    }
   
  }
  else if (rover.direction == "E"){
   
    if (rover.x == 9)
    {
      console.log("OUT OF THE GRID!!!")
    }else{
      rover.x+=1;
    }
  }
  rover.travelLog.push(rover.x,rover.y);
  console.log("The rover is now on : " + rover.x + ", " + rover.y);
}

function goForward(steps){
  var i;
   
    for (i = 0; i<steps.length; i++){
      switch (steps[i]){
        case "r": {
          turnRight(rover);
          break;
        }
        case "l": {
          turnLeft(rover);
          break;
        }
        case "f": {
          moveForward(rover);
          break;
        }
        default : 
        console.log("CHARACTER NOT RECOGNIZED");
      }
      console.log(rover.travelLog);
     }

}
