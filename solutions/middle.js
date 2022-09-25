function getMiddle(s) {
    let res;
    let mid = Math.floor(s.length / 2)
    if (s.length % 2 === 0) {
      res = s[mid - 1] + s[mid];
    } else {
      res = s[mid];
    }
    return res;
  }