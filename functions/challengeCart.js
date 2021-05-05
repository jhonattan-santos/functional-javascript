const cart = [
  { name: "Caneta", qtd: 10, price: 7.99, fragile: true },
  { name: "Impressora", qtd: 1, price: 649.5, fragile: true },
  { name: "Caderno", qtd: 4, price: 27.1, fragile: false },
  { name: "Lapis", qtd: 3, price: 5.82, fragile: false },
  { name: "Tesoura", qtd: 1, price: 19.2, fragile: true },
];

// Just fragile: true
// qtd * price
// avg of qtde * price per object

// use map - reduce and filter

const isFragile = (item) => item.fragile;
const total = (item) => item.qtd * item.price;
const avg = (acc, cur) => {
  const newQtd = acc.qtd + 1;
  const newTotal = acc.total + cur;
  return {
    qtd: newQtd,
    total: newTotal,
    avg: newTotal / newQtd,
  };
};

const result = cart
  .filter(isFragile)
  .map(total)
  .reduce(avg, { qtd: 0, total: 0, avg: 0 });

console.log(result);
