function clickHandler(){
    var paths = window.location.pathname.split('/'),
        branches = paths.pop().split('...'),
        defaultBranch = 'master', //- @todo Read this from the page
        newPath;

    newPath = paths.join('/') + (branches[1] || defaultBranch) + '...' + branches[0];
    window.location.pathname = newPath

};

// add the switch button event and cursor
var switchButton = document.querySelector('.octicon-git-compare');
if (null !== switchButton) {

    switchButton.style.cursor = 'pointer';

    if(switchButton.addEventListener) {
        switchButton.addEventListener('click', clickHandler, false);
    }
}
