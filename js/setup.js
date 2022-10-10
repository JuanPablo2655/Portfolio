const isDark = localStorage.getItem('dark') === 'true' ?? true;
if (isDark) {
	document.querySelector(':root')?.style.setProperty('--primary-color', '#E5E9F0');
	document.querySelector(':root')?.style.setProperty('--primary-bg-color', '#2E3440');
	document.querySelector(':root')?.style.setProperty('--secondary-color', '#88C0D0');
} else {
	document.querySelector(':root')?.style.setProperty('--primary-color', '#3B4252');
	document.querySelector(':root')?.style.setProperty('--primary-bg-color', '#ECEFF4');
	document.querySelector(':root')?.style.setProperty('--secondary-color', '#88C0D0');
}
