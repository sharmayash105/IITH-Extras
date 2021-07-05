// AOS scripts
AOS.init();

// Preloader scripts
const id$ = (id) => document.getElementById(id);
const q$ = (query) => document.querySelector(query);
document.onreadystatechange = function () {
    let state = document.readyState;
    if (state == 'complete') {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        const THRESHOLD = 2000;
        const MIN_LOAD_TIME = loadTime < THRESHOLD ? THRESHOLD : 0;
        setTimeout(() => {
            id$('loader-container').style.visibility = "hidden";
        }, MIN_LOAD_TIME);
    }
}

// for mobile view
document.getElementById('more').addEventListener("click", () => {
    document.getElementById('expand').style.display = 'inline';
    document.getElementById('less').style.display = "inline";
    document.getElementById('more').style.display = 'none';
})
document.getElementById('less').addEventListener('click', () => {
    document.getElementById('less').style.display = "none";
    document.getElementById('expand').style.display = "none";
    document.getElementById('more').style.display = "inline";
})

// on page reload => scroll to top
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
// remove fragment as much as it can go without adding an entry in browser history:
window.location.replace("#");

// slice off the remaining '#' in HTML5:    
if (typeof window.history.replaceState == 'function') {
    history.replaceState({}, '', window.location.href.slice(0, -1));
}

//Expands the divs to feed view
function toggle(clickedToggle) {
    document.getElementById(`${clickedToggle.parentElement.parentElement.getAttribute("id")}`).classList.toggle("toggled");
    clickedToggle.classList.toggle("toggleUp");
    clickedToggle.classList.toggle("toggleDown");
}