# w1d2-demo

## Description

Write a node program that takes an unlimited amount of arguments from the command-line and adds them together and output the results.

- Requirements:

  - Display an error message if we don't have numbers

## Lecture Notes

### How to approach problem solving

- Not thinking in terms of syntax. Code should be the result of your thinking
- Incremental development > go baby steps at a time
- Breaking down a complex problem into smaller more manageable problems
- Getting errors is part of the process -> Debugging

### GitHub

- Creating branches and merging

### What is an Algorithm

- Put simply an algorithm is a **series of steps to solve a problem**

- A more formal definition:

> "An algorithm is a _sequence of unambiguous instructions_ for _solving a problem_, i.e., for obtaining a required _output_ for any _legitimate input_ in a _finite amount of time._" -- _Anany Levitin_

- Sequence of unambiguous instructions

  - Humans use abstractions for almost everything (Grabing a coffee, go to work, etc)
  - Computers needs to be told every detailed steps in order to do something. These steps need to be precise.

- Solving a Problem

  - Am I solving the right problem?
  - Do I truly understand the problem

- Obtaining the required output

  - Am I getting the right solution? Does it solved the problem?

- Any legitimate input

  - Am I dealing with the right input?
  - Does it work with a different set of data?

- A finite amount of time

  - Can the solution be found in a reasonable amount of time

### Write the Pseudo-code

- Write the steps in english to get to the solution

### Debug Strategies

1- use console.log to understand what's going on

- use labels, separate multiple values with commas

2- Use the Node Inspector to Debug in Chrome > node --inspect-brk sum.js and go to chrome://inspect

- Play in Node REPL
- Play in another REPL such as Repl/it

3- Text Editor Integration

- You can debug in VS Code...

### Improve the Solution

- Refactor the code

  - Readability
  - Modularity
  - Catch errors
