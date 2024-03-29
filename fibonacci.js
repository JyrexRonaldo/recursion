function fibs(num) {
  let firstNumber = 0;
  let secondNumber = 1;
  let array = [firstNumber, secondNumber];
  for (let i = 0; i < num - 2; i++) {
    let nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
    array.push(nextNumber);
  }

  return array;
}

console.log(fibs(8));

function fibsRec(n, sequence = [0, 1]) {
  console.log("This was printed recursively");
  // Recursive step
  if (sequence.length < n) {
    // Add the next number to the sequence
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    // Recurse with the same sequence
    return fibsRec(n, sequence);
  } else {
    // Once the sequence is long enough, return it
    return sequence;
  }
}

console.log(fibsRec(8))