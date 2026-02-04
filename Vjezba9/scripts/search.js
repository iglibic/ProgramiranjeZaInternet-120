/**
 * Add card filtering on search box input.
 * Add an event listener for a keyup event on the search input.
 * If the value is empty, show all cards.
 * If there is any non empty value in the input, hide the cards that do not contain the value that is in the input.
 *
 * Hints:
 *	 e.currentTarget.value --> input.value
 *	 card.textContent --> text content of an html element
 *	 cardElement.textContent.indexOf(someString) == -1 --> the value of someString is not in the cardElement
 * 	 cardElement.textContent.indexOf(someString) >= 0 --> the value of the someString exist in the cardElement
 *	 .hidden { display: none; } --> css class already written in style css, used to remove an element from the DOM
 */

const searchBox = document.getElementById("search-box");

searchBox.addEventListener("keyup", (e) => {
	const value = e.currentTarget.value.toLowerCase();
	const cards = document.querySelectorAll(".card");

	cards.forEach((card) => {
		const text = card.textContent.toLowerCase();

		if (value === "") {
			card.classList.remove("hidden");
		} else if (text.indexOf(value) === -1) {
			card.classList.add("hidden");
		} else {
			card.classList.remove("hidden");
		}
	});
});
