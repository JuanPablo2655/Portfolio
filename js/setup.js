const isDark = localStorage.getItem('dark') ? localStorage.getItem('dark') === 'true' : true;
if (isDark) {
	document.body?.classList.add('dark');
}
