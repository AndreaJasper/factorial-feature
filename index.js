const Calculate = {
  factorial(inputNum) {
    if (inputNum !== 0) {
      for(let i = inputNum -1; i >= 1; i--) {
        inputNum *= i;
      }
      return inputNum;
    } else {
      return 1;
    }
  }
}

module.exports = Calculate;
