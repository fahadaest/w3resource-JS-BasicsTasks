// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19. 

function computeDifference(num) {
  let difference = 19 - num;

  if (difference < 0) {
    difference = -difference;
  }
  if (num > 19) {
    return difference * 3;
  } 
  else {
    return difference;
  }
}
console.log(computeDifference(10));