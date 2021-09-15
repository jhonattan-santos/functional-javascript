const { Observable, noop } = require("rxjs");

/**
 * Função com mutabilidade
 *
 * @param   {number}  min  número mínimo entre para o observable gerar a partir de.
 * @param   {number}  max  Númetro máximo para o observable gerar até
 *
 * @return  {number}       Retorna um stream de dados para poder ser exibida no retorno
 */
// function entre(min, max) {
//   if (min > max) [min, max] = [max, min];
//   return new Observable((subscriber) => {
//     for (let i = min; i <= max; i++) {
//       subscriber.next(i);
//     }
//     subscriber.complete();
//   });
// }

/**
 * Função sem mutabilidade
 *
 * @param   {number}  min  número mínimo entre para o observable gerar a partir de.
 * @param   {number}  max  Númetro máximo para o observable gerar até
 *
 * @return  {number}       Retorna um stream de dados para poder ser exibida no retorno
 */
function entre(min, max) {
  if (min > max) [min, max] = [max, min];
  return new Observable((subscriber) => {
    Array(max - min)
      .fill()
      .map((_, i) => {
        subscriber.next(min + i);
      });
    subscriber.complete();
  });
}

entre(3, 10).subscribe(console.log, noop, () => console.log("Fim"));
