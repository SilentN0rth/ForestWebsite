const footerYear = document.querySelector('.footer__copyright-year')
const sendBtn = document.querySelector('.btn--contact')
const popup = document.querySelector('.contact__popup')
const inputsArea = {
	name: document.querySelector('#name'),
	email: document.querySelector('#email'),
	msg: document.querySelector('#msg'),
}

const checkForm = input => {
	for (const key in input) {
		if (Object.hasOwnProperty.call(input, key)) {
			const element = input[key]
			if (element.value === '') {
				showError(element, element.placeholder)
			} else {
				clearError(element)
			}
		}
	}
}

const checkLength = (oneInput, min) => {
	const formBox = oneInput.parentElement.parentElement
	const label = formBox.querySelector('label')
	if (oneInput.value.length < min) {
		showError(oneInput, `${label.textContent.slice(0, -1)} musi składać się z minimum ${min} znaków.`)
	}
}

const showError = (input, msg) => {
	const formBox = input.parentElement.parentElement
	const errorBox = formBox.querySelector('.contact__tooltip')
	const errorMsg = errorBox.querySelector('.contact__tooltip-text')
	errorBox.classList.add('contact__tooltip--active')
	errorMsg.textContent = msg
}
const clearError = input => {
	const formBox = input.parentElement.parentElement
	const errorBox = formBox.querySelector('.contact__tooltip')
	errorBox.classList.remove('contact__tooltip--active')
}

// const checkInputs = () => {
// 	for (const [key, value] of Object.entries(inputsArea)) {
// 		if (value.value !== '') {
// 			sendForm(value)
// 			input.parentElement.previousElementSibling.classList.remove('contact__tooltip--active')
// 			console.log(123)
// 		} else {
// 			showError(value)
// 		}
// 	}
// }

// const showError = input => {
// 	const contactTooltip = input.parentElement.previousElementSibling
// 	const contactTooltipText = contactTooltip.querySelector('.contact__tooltip-text')
// 	contactTooltipText.textContent = `Uzupełnij prawidłowo pola.`
// 	contactTooltip.classList.add('contact__tooltip--active')
// }

const checkErrors = () => {
	const allTooltips = document.querySelectorAll('.contact__tooltip')

	let errorCount = 0
	allTooltips.forEach(element => {
		if (element.classList.contains('contact__tooltip--active')) {
			errorCount++
		}
	})
	if (errorCount === 0) {
		sendForm()
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'Email jest nieprawidłowy.')
	}
}

const sendForm = () => {
	popup.classList.add('contact__popup--active')
	setTimeout(() => {
		popup.classList.remove('contact__popup--active')
	}, 3000)
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()

	checkForm(inputsArea)
	checkLength(inputsArea.name, 3)
	checkLength(inputsArea.msg, 20)
	checkMail(inputsArea.email)
	checkErrors()
})

// Footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
