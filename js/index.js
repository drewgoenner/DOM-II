// Your code goes here

const noNav = document.querySelector('.nav');
noNav.addEventListener('click', (e) => {
    console.log('Not Getting Anywhere This Way!');
    event.preventDefault();
})

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


const funAdv = document.querySelector('.home .content-section .img-content img');
funAdv.addEventListener('drag', (e) => {
    funAdv.style.display = "none";
})

const noIntro = document.querySelector('.home .inverse-content .img-content img');
noIntro.addEventListener('dblclick', (e) => {
    funBusIntro.style.display = "none";
})

const noPage = document.querySelector('html');
noPage.addEventListener('wheel', (e) => {
    noPage.style.display = "none";
})

const bigText = document.querySelector('.home .content-section .text-content h2');
bigText.addEventListener('click', (e) => {
    bigText.style.fontSize = '50px';
})

const copyDoom = document.querySelector('.home .content-section .text-content p');
copyDoom.addEventListener('copy', (e) => {
    copyDoom.textContent="DOOM DOOM DOOM DOOM DOOM DOOM DOOM DOOM"
    copyDoom.style.fontSize = '3rem';
})

const yellowTrip = document.querySelectorAll('.destination');
yellowTrip.forEach(makeYellow => {
    makeYellow.addEventListener('click', (e) =>{
        makeYellow.style.backgroundColor = 'yellow';
    })
})
const tripButton = document.querySelectorAll('.btn');
tripButton.forEach(makeGreen => {
    makeGreen.addEventListener('click', (e) => {
        makeGreen.style.backgroundColor = 'green';
    })
});
