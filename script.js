function addTogether(a, b) {

  if (typeof a !== "number") return undefined;

  if (arguments.length === 2 && typeof b !== "number") return undefined;

  if (arguments.length === 1) {
    return function(c) {
      if (typeof c !== "number") return undefined;
      return a + c;
    }
  }

   return a + b;
}

console.log(addTogether(23.4, 30));
console.log(addTogether(5));
console.log(addTogether(5)(7));
