function gerarElementos(array, intervalo = 1000) {
  return {
    iniciar(fn) {
      let indice = 0
      const i = setInterval(() => {
        if (indice >= array.length) {
          clearInterval(i)
        } else {
          fn(array[indice])
          indice++
        }
      }, intervalo)

      return {
        parar() {
          clearInterval(i)
        }
      }
    }
  }
}

const numeros = [1,2,3,4,5,6,7,8,9,10]
const temp1 = gerarElementos(numeros)

const exec= temp1.iniciar(num => {
  console.log(Math.pow(2, num))
})

setTimeout(() => {
  exec.parar()
}, 4000)
