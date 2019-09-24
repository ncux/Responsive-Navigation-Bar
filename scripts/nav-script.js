const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav-list');
const navListItems = document.querySelectorAll('.nav-list-item');

function toggleNavigationBar() {
    burger.addEventListener('click', toggleNavActive)
}

async function toggleNavActive() {
    await navList.classList.toggle('nav-list-toggle');
    animateNavListItems();
}

function animateNavListItems() {
    navListItems.forEach((item, index) => {
        if(item.style.animation) {
            item.style.animation = '';
        } else {
            item.style.animation = `nav-list-fade 0.5s ease forwards ${index / 7 + 2}s`;
        }
    });
    flipBurgerLines();
}

function flipBurgerLines() {
    burger.classList.toggle('flip-burger-line');
}

toggleNavigationBar();
