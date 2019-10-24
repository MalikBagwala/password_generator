function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

function range(start, end) {
  let rangeArray = [];
  for (let i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}

function char(number) {
  return String.fromCharCode(number);
}

function times(iterations, iteratee) {
  let output = [];
  for (let i = 0; i < iterations; i++) {
    output.push(iteratee(i));
  }
  return output;
}

function getValidCharacters(
  object,
  options = {
    lowerCase: true,
    upperCase: true,
    numbers: true,
    symbols: true
  }
) {
  let output = [];
  console.log(options);

  for (const key in object) {
    if (object.hasOwnProperty(key) && options[key]) {
      const element = object[key];
      if (element.length) {
        output = output.concat(element);
      } else {
        output = output.concat(range(element.start, element.end));
      }
    }
  }
  return output;
}
