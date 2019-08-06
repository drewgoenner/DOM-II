const blockTouch = document.querySelectorAll('.block');
const blockHome = document.querySelector('.blocks');
blockTouch.forEach(toTop => {
    toTop.addEventListener('click', (e) => {
        blockHome.prepend(toTop);
    })
    toTop.addEventListener('mousedown', (e) => {
        toTop.style.right = "200px";
    })
})

