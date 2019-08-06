const blockTouch = document.querySelectorAll('.block');
const blockHome = document.querySelector('.blocks');
blockTouch.forEach(toTop => {
    toTop.addEventListener('click', (e) => {
        blockHome.prepend(toTop);
    })
})

function moveRight() {
    const rockets = document.getElementsByClassName(".block")
    const x = +50;
    rockets.style.left += x +"px";
}
blockTouch.forEach(toRight => {
    toRight.addEventListener('mousedown', (e) => {
        toRight.timer=setInterval(moveRight, 100)
    }, false)
    toRight.addEventListener('mouseup', (e) => {
        clearInterval(toRight.timer)
    }, false)
})
