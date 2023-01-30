function getFibonacci(num) {
  let result = []
  for(let i = 0; i < num; i++) {
    result.push(fibonacci(i));
  }
  return result
}

function fibonacci(num) {
  if(num < 2) {
      return num;
  }
  else {
      return fibonacci(num-1) + fibonacci(num - 2);
  }
}

module.exports = {getFibonacci, fibonacci}

