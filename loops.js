
function forLoop (arrString) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      arrString.push("I am 1 strange loop.");
    }
    else {
      arrString.push(`"I am ${i} strange loops."`);
    }
  }
  return arrString;
}

