const button = document.querySelector('#mode');

button?.addEventListener('click', () => {
	const dark = localStorage.getItem('dark') ? localStorage.getItem('dark') === 'true' : true;
	console.log(button);
	if (dark) {
		document.body.classList.remove('dark');
		localStorage.setItem('dark', 'false');
	} else {
		document.body.classList.add('dark');
		localStorage.setItem('dark', 'true');
	}
});

const p = document.querySelector('p');
const rawAge = new Date().now() - new Date('2002-05-10').getTime();
const age = parseMilliseconds(rawAge).years;
p.innerText = `I'm just a ${age} year old programmer`;

function parseMilliseconds(milliseconds) {
	if (typeof milliseconds !== 'number') {
		throw new TypeError('Expected a number');
	}

	return {
		years: Math.trunc(milliseconds / 31557600000),
		days: Math.trunc(milliseconds / 86400000),
		hours: Math.trunc(milliseconds / 3600000) % 24,
		minutes: Math.trunc(milliseconds / 60000) % 60,
		seconds: Math.trunc(milliseconds / 1000) % 60,
		milliseconds: Math.trunc(milliseconds) % 1000,
		microseconds: Math.trunc(milliseconds * 1000) % 1000,
		nanoseconds: Math.trunc(milliseconds * 1e6) % 1000,
	};
}
