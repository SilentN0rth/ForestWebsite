const name = document.querySelector('#name')
const email = document.querySelector('#email')
const msg = document.querySelector('#msg')

const footerYear = document.querySelector('.footer__copyright-year')

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

