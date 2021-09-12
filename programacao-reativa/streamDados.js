const {interval} = require('rxjs')

const gerarNumeros = interval(500)

const subs1 = gerarNumeros.subscribe(num => console.log(Math.pow(2, num)))
const subs2 = gerarNumeros.subscribe(console.log)

setTimeout(() => subs1.unsubscribe(), 3000)
setTimeout(() => subs2.unsubscribe(), 4500)
