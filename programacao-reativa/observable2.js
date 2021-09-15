const { Observable } = require('rxjs')

const obs$ = Observable.create(subscriber => {
  subscriber.next('Observable.create is deprecated!!!')
  subscriber.next('Observable.create is deprecated!!!')
  subscriber.next('Observable.create is deprecated!!!')

  if (Math.random() > 0.5) {
    subscriber.complete()
  } else {
    subscriber.error('Que problema?!?')
  }
})

obs$.subscribe(
  data => console.log(data),
  err => console.log(err),
  () => console.log("Fim!")
)

obs$.subscribe({
  next(data) {
    console.log(data)
  },
  error(msg) {
    console.log(msg)
  },
  complete() {
    console.log("Fim!!!")
  }
})
