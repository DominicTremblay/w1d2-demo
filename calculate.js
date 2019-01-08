// Write a node program that takes an
// unlimited amount of arguments from
// the command-line and adds them together
// and output the results.

// Extract the arguments from the command-line
// Remove the first 2 elements of process.argv

function getArguments(args) {
  return process.argv.slice(2);
}

function validateArgs(numbers) {
  numbers.forEach(function(nb) {
    if (isNaN(nb)) {
      console.log('Please input only numbers');
      process.exit();
    }
  });
}

function convertToNumbers(args) {
  var numbers = [];
  // Convert the strings into actual numbers
  for (var i = 0; i < args.length; i++) {
    var nb = Number(args[i]);
    numbers.push(nb);
  }
  return numbers;
}

function sum(numbers) {
  // Total <- 0
  var total = 0;

  // iterate over the numbers and add each to total
  for (var i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}

var args = getArguments(process.argv);
var numbers = convertToNumbers(args);
console.log('Numbers: ', numbers);
validateArgs(numbers);

var total = sum(numbers);
// Output the result
console.log('Total: ', total);
