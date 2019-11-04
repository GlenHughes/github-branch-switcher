const clickHandler = () => {
  const branches = document.querySelectorAll(".commitish-suggester .css-truncate-target")
  if (branches && branches.length !== 2) {
    // console.warn("Unable to find branches...")
    return
  }

  const base = branches[0].textContent.replace("?expand=1")
  const toMerge = branches[1].textContent.replace("?expand=1")
  const split = window.location.pathname.split("/compare/")
  // console.warn(base, toMerge, token)
  const newPath = `${split[0]}/compare/${toMerge}...${base}`
  // console.warn(newPath)
  window.location.pathname = newPath
};

// add the switch button event and cursor
const switchButton = document.querySelector('.octicon-git-compare');
if (switchButton !== null) {
  switchButton.style.cursor = 'pointer';
  switchButton.addEventListener('click', clickHandler, false);
}
