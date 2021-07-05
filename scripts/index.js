const navButton = document.querySelector('.personal__nav-link');
const personalSubmenu = document.querySelector('.personal__submenu');
const sidebar = document.querySelector('.sidebar');
const burgerButton = document.querySelector('.header__burger');
const closeButton = document.querySelector('.sidebar__close-button')


function submenuOpen() {
    personalSubmenu.classList.add('.personal__submenu_opened');
}

function sidebarOpen() {
    sidebar.classList.add('sidebar_opened')
}

function closeSidebar() {
    sidebar.classList.remove('sidebar_opened');
    sidebar.removeEventListener('click', closeSidebarOverlay);
}

function closeSidebarOverlay(evt) {
    const openedSidebar = document.querySelector('.sidebar_opened');
    if (evt.target.classList.contains('sidebar')) {
        closeSidebar(openedSidebar);
    };
}


navButton.addEventListener('click', () => {
    submenuOpen();
});

burgerButton.addEventListener('click', () => {
    sidebarOpen();
    sidebar.addEventListener('click', closeSidebarOverlay);
})

closeButton.addEventListener('click', closeSidebar);