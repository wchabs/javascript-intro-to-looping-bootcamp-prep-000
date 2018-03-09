function forLoop (arrString) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      arrString[i + 1] = "I am 1 strange loop.";
    }
    else {
      arrString[i] = `"I am ${i + 1} strange loops."`;
    }
  }
}