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
const age = new Date().getFullYear() - 2002;
p.innerText = `I'm just a ${age} year old programmer`;
