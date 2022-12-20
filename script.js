/*Navigation*/
const Hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const Logo = document.querySelector(".logo")

Hamburger.addEventListener("click", () =>{
    Hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    Logo.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    Hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    Logo.classList.remove("active");
}))

/*Tuborg Squash*/
const Original = document.querySelector(".original");
const Ts_Original = document.querySelector(".ts_original");
const Light = document.querySelector(".light");
const Ts_Light = document.querySelector(".ts_light");
const Zero = document.querySelector(".zero");
const Ts_Zero = document.querySelector(".ts_zero");

Original.addEventListener("click", () =>{
    Ts_Original.classList.toggle("active");
})

document.querySelectorAll(".original").forEach(n => n.addEventListener("click", () => {
    Ts_Light.classList.remove("active");
    Ts_Zero.classList.remove("active");
}))

Light.addEventListener("click", () =>{
    Ts_Light.classList.toggle("active");
})

document.querySelectorAll(".light").forEach(n => n.addEventListener("click", () => {
    Ts_Original.classList.remove("active");
    Ts_Zero.classList.remove("active");
}))

Zero.addEventListener("click", () =>{
    Ts_Zero.classList.toggle("active");
})

document.querySelectorAll(".zero").forEach(n => n.addEventListener("click", () => {
    Ts_Original.classList.remove("active");
    Ts_Light.classList.remove("active");
}))