function fib(num) {
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

console.log(fib(8));

function fibRec(length) {
  function fibVal(num) {
    if (num < 2) {
      return num;
    } else {
      return fibVal(num - 1) + fibVal(num - 2);
    }
  }
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(fibVal(i));
  }
  return array;
}

console.log(fibRec(8));
