const button = document.querySelector('#mode');

const dark = localStorage.getItem('dark') === 'true';
setup(dark);
console.log(dark);

button?.addEventListener('click', () => {
	if (dark) {
		document.querySelector(':root')?.style.setProperty('--primary-color', '#3B4252');
		document.querySelector(':root')?.style.setProperty('--primary-bg-color', '#ECEFF4');
		document.querySelector(':root')?.style.setProperty('--secondary-color', '#88C0D0');
		localStorage.setItem('dark', 'false');
		console.log(localStorage.getItem('dark'));
		location.reload();
	} else {
		document.querySelector(':root')?.style.setProperty('--primary-color', '#E5E9F0');
		document.querySelector(':root')?.style.setProperty('--primary-bg-color', '#2E3440');
		document.querySelector(':root')?.style.setProperty('--secondary-color', '#88C0D0');
		localStorage.setItem('dark', 'true');
		console.log(localStorage.getItem('dark'));
		location.reload();
	}
});

function setup(dark) {
	if (dark) {
		document.querySelector(':root')?.style.setProperty('--primary-color', '#3B4252');
		document.querySelector(':root')?.style.setProperty('--primary-bg-color', '#ECEFF4');
		document.querySelector(':root')?.style.setProperty('--secondary-color', '#88C0D0');
	} else {
		document.querySelector(':root')?.style.setProperty('--primary-color', '#E5E9F0');
		document.querySelector(':root')?.style.setProperty('--primary-bg-color', '#2E3440');
		document.querySelector(':root')?.style.setProperty('--secondary-color', '#88C0D0');
	}
}
