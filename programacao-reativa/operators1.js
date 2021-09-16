const { of, last, first, map } = require("rxjs");

of(1, 2, 3, 4, "a", "5", "ultimo")
  .pipe(last())
  .subscribe(console.log);

of(1, 2, 3, 4, "a", "5", "ultimo")
  .pipe(first())
  .subscribe(console.log);

of(1, 2, 3, 4, "a", "5", "ultimo")
  .pipe(last())
  .pipe(map((v) => v[0]))
  .subscribe(console.log);
