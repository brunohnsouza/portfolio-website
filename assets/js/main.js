 /* 
  ====================
    NAVBAR ANIMATION
  ====================
*/

const mainNav = document.querySelector('#mainNav');

// Activate Bootstrap scrollspy
if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      offset: 74
    })
}

// Class '.navbar-shrink'
window.addEventListener("scroll", () => {
    if (!mainNav) {
      return
    }

    window.scrollY === 0 ? mainNav.classList.remove('navbar-shrink') : mainNav.classList.add('navbar-shrink')
}) 

 /* 
  ==================
    SECTION 'HOME'
  ==================
*/

// Typing Animation (Lib 'Typed')
let typed = new Typed(".myName", {
  strings: [" Bruno Souza"],
  typeSpeed: 70,
  backSpeed: 60,
  loop: true
})

 /* 
  ======================
    SECTION 'PROJECTS'
  ======================
*/

/* ==================== SEARCH FILTER ==================== */

const filterSeach = document.querySelector(".input-wrapper input") 
const cardsProjects = document.querySelectorAll(".projects__card")

filterSeach.addEventListener("input", () => {
  if (filterSeach.value != "") {
      for (let card of cardsProjects) {
        let titleProject = card.querySelector(".projects__main-title").textContent.toLowerCase()
        let filterSeachValue = filterSeach.value.toLowerCase()
    
        !titleProject.includes(filterSeachValue) ? card.style.display = "none" : card.style.display = "block"
      }
    } else {
        for (let card of cardsProjects) {
          card.style.display = "block"             
        }
    }
})

/* ==================== ITEM SELECTED STYLE ==================== */

let filters = document.querySelectorAll(".projects__item")

function activeProjetc() {
  filters.forEach(item => item.classList.remove("active-projects")) 
  this.classList.add("active-projects")
}

filters.forEach(item => item.addEventListener("click", activeProjetc))

/* ==================== ANIMATION CARDS (LIB 'MIXITUP') ==================== */

let mixerProjects = mixitup('.projects__container', {
  selectors: {
    target: '.projects__card'
  },
  animation: {
    duration: 300
  }
})

 /* 
  ======================
    SECTION 'TALK TO ME'
  ======================
*/

/* ==================== VALIDATION FORM ==================== */

const formTaskToMe = document.querySelector("form")
const inputsForm = document.querySelectorAll(".contact__form-input") 
const btnSend = document.querySelector("#btnSend")
const smalls = document.querySelectorAll(".contact__form-info")
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

btnSend.addEventListener("click", (event) => {
    if (inputsForm[0].value == "") {
      event.preventDefault()
      nameValidate()
    }

    if (inputsForm[1].value == "") {
      event.preventDefault()
      emailValidate()
    }

    if (inputsForm[2].value == "") {
      event.preventDefault()
      messageValidate()
    }
})

function setError(index) {
    inputsForm[index].style.outline = '2px solid #C74243'
    smalls[index].style.display = 'block'
}

function setSucess(index) {
    inputsForm[index].style.outline = ''
    smalls[index].style.display = 'none'
}

function nameValidate() {
    inputsForm[0].value.length < 3 ? setError(0) : setSucess(0)
}

function emailValidate() {
    !emailRegex.test(inputsForm[1].value) ? setError(1) : setSucess(1)
}

function messageValidate() {
    inputsForm[2].value.length == 0 ? setError(2) :  setSucess(2)
}

/* ==================== DIALOG ==================== */

const dialog = document.querySelector("dialog")
const btnCloseDialog = document.querySelector("dialog #btnClose")

formTaskToMe.addEventListener("submit", () => {
  dialog.showModal()
})

btnCloseDialog.addEventListener("click", () => {
  dialog.close()
})

 /* 
  ====================
    ANIMATION SCROLL
  ====================
*/

/* ==================== LIB 'SCROLLREVEAL' ==================== */

const animationScroll = ScrollReveal({ 
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
}) 

// SECTION 'HOME'
animationScroll.reveal(`#home .leftColumn`, {origin: 'left'})
animationScroll.reveal(`#home .rightColumn`, {origin: 'right'})

// SECTION 'ABOUT'
animationScroll.reveal(`#about .row`)

// SECTION 'SKILLS'
animationScroll.reveal(`#skills .row.hard .col-lg-6`)
animationScroll.reveal(`#skills .row.soft .col-lg-6`)

// SECTION 'PROJECTS'
animationScroll.reveal(`#projects .input-wrapper, .projects__filters`)
animationScroll.reveal(`#projects .row .leftColumn`, {origin: 'left'})
animationScroll.reveal(`#projects .row .rightColumn`, {origin: 'right'})

// SECTION 'TALK TO ME'
animationScroll.reveal(`#talkToMe .contact__form`)

 /* 
  =================
    SCROLL TO TOP
  =================
*/

window.addEventListener('scroll', () => {
  let scrollToTop = document.querySelector('.scroll-to-top')
  const html = document.documentElement

  html.scrollTop > 100 ? scrollToTop.classList.remove("scroll-to-top-disable") : scrollToTop.classList.add("scroll-to-top-disable")
})

 /* 
  =========================
    STYLE SWITCHER COLORS
  =========================
*/

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler")
const styleSwitcher = document.querySelector(".style-switcher")

// Open or Close (Click)
styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open")
})

// Open or Close (Scroll)
window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open")
    }
})

const alternateStyles = document.querySelectorAll(".alternate-style")

// Alternate Colors (Click)
function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
      color === style.getAttribute("title") ? style.removeAttribute("disabled") : style.setAttribute("disabled", "true")
  }) 
}

 /* 
  =======================
    LIGHT AND DARK MODE
  =======================
*/

// Will be used if your browser does not support the :has() pseudo-class 
const html = document.documentElement
const inputCheckbox = document.querySelector("input[type='checkbox']")

inputCheckbox.onclick = () => {
  inputCheckbox.checked ? html.classList.add(inputCheckbox.id) : html.classList.remove(inputCheckbox.id)
}

 /* 
  ==========
    FOOTER
  ==========
*/

const date = new Date()
const currentYear = String(date.getFullYear())

const yearFooter = document.getElementById("yearFooter")

window.addEventListener("load", () => {
    yearFooter.innerHTML = currentYear
})

