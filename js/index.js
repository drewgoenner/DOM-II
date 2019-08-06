// Your code goes here

// const noNav = document.querySelectorAll('.nav-link');
// noNav.addEventListener('click', (e) => {
//     console.log('Not Getting Anywhere This Way!');
//     event.preventDefault();
// })

const funBusImg = document.querySelector('.home .intro img');
funBusImg.addEventListener('contextmenu', (e) => {
    alert("You ain't left, cause that was so right!");
    e.stopPropagation();
})

const funBusIntro = document.querySelector('.home .intro');
funBusIntro.addEventListener('mouseenter', (e) => {
    funBusIntro.style.border = '2px solid red';
})
funBusIntro.addEventListener('mouseleave', (e) => {
    funBusIntro.style.border = 'none';
})
funBusIntro.addEventListener('contextmenu', (e) => {
    alert("Stop peeking under the hood!");
})


const funBusH2 = document.querySelector('h2');
funBusH2.addEventListener('scroll', (e) => {
    funBusH2.textContent = '8rem';
})