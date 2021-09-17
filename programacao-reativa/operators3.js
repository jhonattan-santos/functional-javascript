const { Observable } = require('rxjs')

function elementosComDelay(tempo, ...elementos) {
  return new Observable((subscriber) => {
    (elementos || []).forEach((elemento, i) => {
      setTimeout(() => {
        subscriber.next(elemento)
        if (elementos.length === i + 1) {
          subscriber.complete()
        }
      }, tempo * (i + 1))
    })
  })
}

elementosComDelay(1000, 1,2,3,"Bia", 45).subscribe(console.log)
