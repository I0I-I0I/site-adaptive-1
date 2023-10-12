// Dropdown

const dropdownLabel = document.querySelector("#dropdown-label")
const dropdownMenu = document.querySelector("#dropdown")

dropdownLabel.addEventListener("click", () => {
	dropdownMenu.classList.toggle("open")
})

// Burger

const burger = document.querySelector("#burger")
const menu = document.querySelector("#menu")

burger.addEventListener("click", () => {
	menu.classList.toggle("open")
})

// animation button

const buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		button.classList.add("button-animation")
		setTimeout(() => {
			button.classList.remove("button-animation")
		}, 500)
	})
})

// Details

const details = document.querySelectorAll(".features__details")

details.forEach((detail) => {
	detail.addEventListener("click", () => {
		details.forEach((detail) => {
			detail.removeAttribute("open")
		})
		detail.setAttribute("open")
	})
})

// Swiper

const swiper = new Swiper(".swiper", {
	effect: "cards",

	cardsEffect: {
		perSlideOffset: 10,
		perSlideRotate: 0,
		rotate: false,
	},

	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
})
