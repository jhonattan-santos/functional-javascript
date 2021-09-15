const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
  resolve("Log utilizando promise!")
})

promise.then(console.log)


const observable = new Observable(subscriber => {
  subscriber.next("Log usando observable")
});
observable.subscribe(console.log)
