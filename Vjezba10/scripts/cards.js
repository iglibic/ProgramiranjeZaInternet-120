// Reach the elements only after the document is loaded
document.addEventListener('DOMContentLoaded', async function () {
	/**
	 * Load and render all cards
	 */

	// Handle the event on heart icon click
	const heartIcons = document.querySelectorAll('.card .heart-icon');
	for (let i = 0; i < heartIcons.length; i++) {
		const heartIcon = heartIcons[i];
		heartIcon.addEventListener('click', handleHeartIconClick);
	}

	// Handle the event on plus icon click
	const plusIcons = document.querySelectorAll('.plus-icon');
	for (let i = 0; i < plusIcons.length; i++) {
		const plusIcon = plusIcons[i];
		plusIcon.addEventListener('click', handlePlusIconClick);
	}

	// Handle the event on x icon click
	const XIcons = document.querySelectorAll('.x-icon');
	for (let i = 0; i < XIcons.length; i++) {
		const XIcon = XIcons[i];
		XIcon.addEventListener('click', handleXIconClick);
	}

	// Handle the event on star icon click
	const starIcons = document.querySelectorAll('.card .star-icon');
	for (let index = 0; index < starIcons.length; index++) {
		const starIcon = starIcons[index];

		starIcon.addEventListener('click', handleStarIconClick);
	}

	// Handle the event on add card button click
	const addNewCardButton = document.getElementById('add-new-card-button');
	addNewCardButton.addEventListener('click', handleAddCardButtonClick);

	// Handle the event on edit icon click
	const editIcons = document.querySelectorAll('.edit-icon');
	for (let i = 0; i < editIcons.length; i++) {
		const editIcon = editIcons[i];
		editIcon.addEventListener('click', handleEditIconClick);
	}
});

// Delete card on x icon click
const handleXIconClick = async (event) => {
	const clickedPlusIcon = event.currentTarget;

	const parentCard = clickedPlusIcon.parentElement.parentElement;

	const isConfirmed = confirm(
		`Do you wish to delete the '${parentCard.querySelector('.card-title-label').textContent}' card?`
	);

	if (isConfirmed) {
		/**
		 * Handle the http call here
		 */

		parentCard.remove();
	}
};

// Toggle heart icon between full and empty
function handleHeartIconClick(e) {
	const clickedHeartIcon = e.currentTarget;
	if (clickedHeartIcon.classList.contains('fa-heart-o')) {
		clickedHeartIcon.classList.remove('fa-heart-o');
		clickedHeartIcon.classList.add('fa-heart');
	} else {
		clickedHeartIcon.classList.remove('fa-heart');
		clickedHeartIcon.classList.add('fa-heart-o');
	}
}

// Toggle star icons
function handleStarIconClick(e) {
	const clickedStarIcon = e.currentTarget;

	const starContainer = clickedStarIcon.parentElement;
	const starSiblings = starContainer.children;

	let flag = false;

	for (let i = 0; i < starSiblings.length; i++) {
		const currentStarIcon = starSiblings[i];

		if (!flag) {
			currentStarIcon.classList.remove('fa-star-o');
			currentStarIcon.classList.add('fa-star');
		} else {
			currentStarIcon.classList.remove('fa-star');
			currentStarIcon.classList.add('fa-star-o');
		}

		if (currentStarIcon == clickedStarIcon) {
			flag = true;
		}
	}
}

// Add a new paragraph to a card
function handlePlusIconClick(event) {
	const newParagraphText = prompt('Input text for a new paragraph');

	if (!newParagraphText) {
		alert('Cannot add an empty paragraph');
		return;
	}

	const newParagraphElement = document.createElement('p');
	newParagraphElement.innerText = newParagraphText;

	const clickedPlusIcon = event.currentTarget;

	const parentCard = clickedPlusIcon.parentElement.parentElement;

	const paragraphContainer = parentCard.querySelector('.paragraph-container');

	paragraphContainer.appendChild(newParagraphElement);
};

// Add a new card to the DOM and send a POST request to add a new card to the API
async function handleAddCardButtonClick() {
	const title = prompt('input card title', 'Default title');
	if (!title) return;

	const description = prompt('Input card description', 'Default description');
	if (!description) return;

	/**
	 * Handle the http call here
	 */
}

// Function that appends a card HTML element to the DOM
function handleAddCard(title, description, cardId, userId) {
	const cardTemplate = document.getElementById('card-template');
	const cardNode = document.importNode(cardTemplate.content, true);
	const cardElement = cardNode.querySelector('.card');

	cardElement.setAttribute('card-id', cardId);
	cardElement.setAttribute('user-id', userId);

	cardElement.querySelector('.card-title-label').textContent = title;
	const cardParagraph = document.createElement('p');
	cardParagraph.innerText = description;
	cardElement.querySelector('.paragraph-container').appendChild(cardParagraph);

	// Add event listeners to all icons in the new card
	cardElement.querySelector('.heart-icon').addEventListener('click', handleHeartIconClick);
	cardElement.querySelector('.x-icon').addEventListener('click', handleXIconClick);
	cardElement.querySelector('.plus-icon').addEventListener('click', handlePlusIconClick);
	cardElement.querySelector('.edit-icon').addEventListener('click', handleEditIconClick);
	const starElements = cardElement.querySelectorAll('.card .star-icon');
	for (let index = 0; index < starElements.length; index++) {
		const starElement = starElements[index];

		starElement.addEventListener('click', handleStarIconClick);
	}

	const cardContainer = document.getElementById('cards-container');
	cardContainer.appendChild(cardElement);
}

// Edit card title
async function handleEditIconClick(e) {
	const clickedEditIcon = e.currentTarget;

	const parentCard = clickedEditIcon.parentElement.parentElement.parentElement;

	const editedTitle = prompt('', parentCard.querySelector('.card-title-label').textContent);

	if (editedTitle) {
		/**
		 * Handle the http call here
		 */

		parentCard.querySelector('.card-title-label').textContent = editedTitle;
	} else {
		alert('Title cannot be empty.');
	}
}