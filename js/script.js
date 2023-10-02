const footerYear = document.querySelector('.footer__copyright-year')
const nav = document.querySelector('.nav')
const navItems = nav.querySelector('.nav__items')
const navBtn = nav.querySelector('.nav__hamburger-btn')

const toggleNav = () => {
	nav.classList.toggle('nav--active')
}

navItems.addEventListener('click', toggleNav)
navBtn.addEventListener('click', toggleNav)

// Footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
