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
