// sum(3)(4)(5)
const sum = (n1) => {
  return (n2) => {
    return (n3) => {
      return n1 + n2 + n3;
    };
  };
};

const amount = sum(2)(10)(8);
console.log(amount);

// calc(3)(7)(fn)
const calc = (n1) => {
  return (n2) => {
    return (fn) => {
      if (typeof fn === "function") {
        return fn(n1, n2);
      }
    };
  };
};

const multiply = (n1, n2) => {
  return n1 * n2;
};

const result = calc(2)(6)(multiply);
console.log(result);
