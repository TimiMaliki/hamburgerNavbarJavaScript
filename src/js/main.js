
const menuBurger = document.querySelector(".bx-menu")
const darkmode = document.querySelector(".darkmode")
const moon = document.querySelector(".bx-moon")
const light = document.querySelector(".bx-sun")
const bgTheme = document.querySelector("body")
const linksTheme = document.querySelectorAll("li")
const navBarTheme = document.querySelector(".navbar")
const navMenuTheme = document.querySelector(".nav__menu")
const HamburgerNavBarTheme = document.querySelector(".nav__toggle")
const fullMoon = document.querySelector(".night")
const ship = document.querySelector(".main-night")



menuBurger.addEventListener("click", () => {
    const navBar = document.querySelector(".nav__menu")
    navBar.classList.toggle("active")
})




moon.addEventListener("click", () => {
    if (moon.classList.contains("bx-moon")) {
        moon.classList.toggle("activate")
        moon.classList.toggle("bx-sun")

        bgTheme.classList.toggle("darkTheme")
        navBarTheme.classList.toggle("darkTheme")
        // linksTheme.classList.toggle("darkTheme")
        HamburgerNavBarTheme.classList.toggle("darkTheme")

        fullMoon.classList.toggle("hero-night")
        ship.classList.toggle("ship")

    }
})




























