window.onload = function() {
    const loader = document.querySelector('.loader');
    const main = document.querySelector('.main');
    setTimeout(() => {
        loader.animate({ opacity: [1, 0] }, { duration: 1500, iterations: 1, easing: "ease-out" })
        .onfinish = (e) => {
            loader.parentNode.removeChild(loader)
            animateMain(main)
        };
    }, 4000)
}

function animateMain(elem){
    elem.classList.add('show')
    elem.animate({ opacity: [0, 1] }, { duration: 1000, iterations: 1, easing: "ease-out" })
}