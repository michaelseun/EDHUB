

let body = document.body;
// connecting the user btn to profile

let profile = document.querySelector('.header .flex .profile ');

// get the userbtn class

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active');
    searchForm.classList.remove('active');
}

// connecting the search bar to search-btn

let searchForm = document.querySelector('.header .flex .search-form ');

// get the searchbtn class

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    profile.classList.remove('active');
}

// connecting the side bar to menu-btn

let sideBar = document.querySelector('.side-bar ');

// get the menu class

document.querySelector('#menu-btn').onclick = () => {
    sideBar.classList.toggle('active')
    body.classList.toggle('active')
    
}

// get the menu class
document.querySelector('.side-bar .close-side-bar').onclick = () => {
    sideBar.classList.remove('active')
    body.classList.remove('active')
    
}

window.onscroll = () => { 
    profile.classList.remove('active');
    searchForm.classList.remove('active');
    // sidebar control
    
    if (window.innerWidth < 1200) {
        sideBar.classList.remove('active')
        body.classList.remove('active')
    }
}

let toggleBtn = document.querySelector('#toggle-btn')
let darkMode = localStorage.getItem('dark-mode');


const enableDarkMode = () => {
    toggleBtn.classList.replace('fa-sun', 'fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

toggleBtn.onclick = (e) =>{
    let darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'disabled'){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
     
}