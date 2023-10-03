const footerYear = document.querySelector('.footer__copyright-year')
const nav = document.querySelector('.nav')
const navItems = nav.querySelector('.nav__items')
const navBtn = nav.querySelector('.nav__hamburger-btn')

const toggleNav = () => {
	nav.classList.toggle('nav--active')
	document.body.classList.toggle('overflow')
}

const hideNav = () => {
	nav.classList.remove('nav--active')
	document.body.classList.remove('overflow')
}

navItems.addEventListener('click', hideNav)
navBtn.addEventListener('click', toggleNav)

// Footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
