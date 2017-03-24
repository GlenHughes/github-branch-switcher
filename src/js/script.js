function clickHandler(){
	var pathname 	= window.location.pathname,
		paths = window.location.pathname.split('/'),
		branches = paths[paths.length - 1].split('...'),
		defaultBranch = 'dev_trunk',
		newPath;

		delete paths[paths.length - 1];

		newPath = paths.join('/') + (branches[1] || defaultBranch) + '...' + branches[0];

		window.location.pathname = newPath
};

// add the switch button event and cursor
var switchButton = document.querySelector('.octicon-git-compare');
if ('undefined' !== typeof switchButton) {

	switchButton.style.cursor = 'pointer';
	if(switchButton.addEventListener) {
		switchButton.addEventListener('click', clickHandler, false);
	}

}