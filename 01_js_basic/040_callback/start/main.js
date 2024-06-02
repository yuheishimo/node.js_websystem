function print(fn) {
  const result = fn(2);
  console.log(result);
}

function fn(number = 3) {
  return number * 2;
}

// デバックしたい箇所に記述
debugger;
print(fn);