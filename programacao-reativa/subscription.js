const { timer, Subscription } = require("rxjs");
/**
 * Esperar 3000
 * gerar números de 500 em 500
 * Depois de 10000 dar unsubscribe
 */

const obs$ = timer(3000, 500);

const subscription1 = obs$.pipe().subscribe(num => {
	console.log(`#1 Gerou ${num}`);
});

const subscription2 = obs$.pipe().subscribe(num => {
	console.log(`#2 Gerou ${num}`);
});

const managementSub = new Subscription();
managementSub.add(subscription1);
managementSub.add(subscription2);

setTimeout(() => {
	managementSub.unsubscribe();
}, 5000);
