// Looping a triangle
//
// Write a loop that makes seven calls to console.log to output the following triangle:
//
// #
// ##
// ###
// ####
// #####
// ######
// #######

var triangle = "#";
while (triangle.length < 8) {
  console.log(triangle);
  triangle = triangle + "#";
}
