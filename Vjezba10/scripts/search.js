document.getElementById('search-box').addEventListener('keyup', (e) => {
	const query = e.currentTarget.value;
	const cards = document.querySelectorAll('.card');

	for (let i = 0; i < cards.length; i++) {
		const card = cards[i];

		if (card.textContent.indexOf(query) >= 0) {
			card.classList.remove('hidden');
		} else {
			card.classList.add('hidden');
		}
	}
});
