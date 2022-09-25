function sumTwoSmallestNumbers(num) {
    let arr = num.sort((a, b) => a - b);
    return arr[0] + arr[1];
  }