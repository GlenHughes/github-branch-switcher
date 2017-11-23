function clickHandler() {
    var pathname = window.location.pathname,
        token = '/compare/',
        branchesIndex = pathname.indexOf(token) + token.length,
        paths = pathname.substr(branchesIndex),
        branches = paths.split('...'),
        defaultBranch = 'master', //- @todo Read this from the page
        newPath = pathname.substr(0, branchesIndex) + (branches[1] || defaultBranch) + '...' + branches[0];

    window.location.pathname = newPath;
};

// add the switch button event and cursor
var switchButton = document.querySelector('.octicon-git-compare');
if (null !== switchButton) {
    switchButton.style.cursor = 'pointer';
    if(switchButton.addEventListener) {
        switchButton.addEventListener('click', clickHandler, false);
    }
}
