# TypeScript Type Mismatch Bug

This repository demonstrates a common TypeScript error related to type mismatches in function arguments.

## The Bug

The `bug.ts` file contains a function `add` that expects two numbers as arguments and returns their sum.  However, the code calls the function with a string as the second argument, causing a type error during compilation.

## The Solution

The `bugSolution.ts` file demonstrates how to fix this bug by explicitly ensuring that both arguments are numbers, either through type checking or conversion.