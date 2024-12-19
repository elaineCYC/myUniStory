/*========== NAV ==========*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*點擊誘發show-menu*/ 

if(navToggle){
    navToggle.addEventListener('click',( ) =>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click',( ) =>{
        navMenu.classList.remove('show-menu')
    })
}

//當點擊選單項目會自動關閉選單
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction ))
//代替迴圈

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-sun' : 'uil-moon'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SHOW SCROLL up ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 180) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*========== about btn 

let btn = document.querySelector('.button');
btn.onmousemove = function(e){
    let x = e.pageX - btn.offsetLeft;
    let y = e.pageY - btn.offsetTOP;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');

} 
==========*/
/*email 提示*/
let emails = document.getElementById('emails')
if(emails){
    emails.addEventListener('click',( ) =>{
        alert('我的信箱: < elaine.ccy0609@gmail.com > 歡迎聯繫我 :)');
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
/*work experience 時間軸*/ 
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('work_active')

        })
        target.classList.add('work_active')

        //btn選取時改色
        tabs.forEach(tab =>{
            tab.classList.remove('work_active')
        })
        tab.classList.add('work_active')
    })
})
/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400, rotate: { x: 10, y: 10, z: 10 },}, )

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 600})
sr.reveal('.about-img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 200})
sr.reveal('.about__profession', {delay: 200})
sr.reveal('.about__text', {delay: 300})
sr.reveal('.about__social-icon', {delay: 500, interval: 100})


/*SCROLL SKILLS*/
sr.reveal('.skills', {})
sr.reveal('.skills__describe', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__content', {delay: 400})

// /*SCROLL work experience*/
sr.reveal('.work', {})


/*SCROLL PORTFOLIO*/
sr.reveal('.projects__container', {delay: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 300})
sr.reveal('.contact__button', {delay: 400})
