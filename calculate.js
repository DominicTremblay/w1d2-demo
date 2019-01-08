// Write a node program that takes an
// unlimited amount of arguments from
// the command-line and adds them together
// and output the results.

// Extract the arguments from the command-line
// Remove the first 2 elements of process.argv
var args = process.argv.slice(2);
console.log('args: ', args);

var numbers = [];

// Convert the strings into actual numbers
for (var i = 0; i < args.length; i++) {
  var nb = Number(args[i]);
  numbers.push(nb);
}

// Total <- 0

// iterate over the numbers and add each to total

// Output the result
