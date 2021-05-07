function waitingFor(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Wainting for...");
      resolve();
    }, time);
  });
}

waitingFor()
  .then(() => waitingFor())
  .then(() => waitingFor());
