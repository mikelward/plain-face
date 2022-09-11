export function zeroPad(i) {
    if (i < 0) {
      return "-" + zeroPad(-i);
    }
    if (i < 10) {
      return "0" + i;
    }
    return i;
}

export function addSign(i) {
  if (i > 0) {
    return "+" + i;
  }
  return i;
}
  