const counters = document.querySelectorAll('.counter');
document.addEventListener('scroll', scrollPage);
let scrollStarted = false;

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function scrollPage() {
    const scrollPos = window.scrollY;

    if (isElementInViewport(counters[0]) && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } 
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = (updateCount = 0) => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 200;

            if (c < target) {
                counter.innerText = `${(c + increment).toFixed(2)}`;

                const delay = updateCount >= 195 ? 5 : 2;
                setTimeout(() => {
                    updateCounter(updateCount + 1);
                }, delay);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
}
