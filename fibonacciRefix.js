function fibs(n) {
  let seq = [0, 1];
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return seq;
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i < n; i++) {
    let c = a + b;
    seq.push(c);
    a = b;
    b = c;
  }

  return seq;
}

console.log(fibs(8));

function fibsRec(n, seq = [0, 1]) {
  console.log("This was printed recursively");
  if (n === seq.length) {
    return seq;
  }
  return fibsRec(n, [...seq, seq[seq.length - 1] + seq[seq.length - 2]]);
}

console.log(fibsRec(8));
