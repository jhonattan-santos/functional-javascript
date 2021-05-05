let a = 1;
console.log(a);

let p = new Promise(function (resolve) {
  resolve([1, 2, 3, 4]);
});

// console.log(typeof p);
// p.then((value) => console.log(value));

p.then((value) => value[0])
  .then((firstValue) => firstValue + 4)
  .then(console.log);
