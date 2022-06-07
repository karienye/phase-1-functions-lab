// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return (someValue - '42')
    //returns the number of blocks given a value
  }

  function distanceFromHqInFeet(someValue) {
    return ((someValue - '42') * 264)
    //returns the number of blocks given a value
  }
  function distanceTravelledInFeet(start, destination) {
      return ((destination - start) * 264)
    //returns the number of feet traveled
  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if (distanceTravelledInFeet > '2500'){
     return 'cannot travel that far'
    }
    else if (distanceTravelledInFeet <= '400'){
    return 0;
    }
  
  else if ((distanceTravelledInFeet > 400 ) && (distanceTravelledInFeet< 2000)){
  return ((distanceTravelledInFeet)- 400) * 2 ;
  }

  }
