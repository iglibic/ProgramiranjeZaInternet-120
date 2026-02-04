const allThumbnails = document.querySelectorAll('#thumbnails-container .thumbnail');

for (let i = 0; i < allThumbnails.length; i++) {
	const thumbnail = allThumbnails[i];

	thumbnail.addEventListener('click', handleThumbnailClick);
}

function handleThumbnailClick(e) {
	const clickedThumbnail = e.currentTarget;

	const currentlySelectedThumbnail = document.querySelector('#thumbnails-container .thumbnail.selected');

	currentlySelectedThumbnail.classList.remove('selected');
	clickedThumbnail.classList.add('selected');

	const mainPicture = document.querySelector('#main-picture-container img');

	const newImagePath = clickedThumbnail.querySelector('img').getAttribute('src');

	mainPicture.setAttribute('src', newImagePath);
}

const leftArrow = document.getElementById('left-arrow');

leftArrow.addEventListener('click', handleLeftArrowClick);

function handleLeftArrowClick() {
	const currentlySelectedThumbnail = document.querySelector('#thumbnails-container .thumbnail.selected');

	const thumbnails = document.querySelectorAll('#thumbnails-container .thumbnail');

	for (let i = 0; i < thumbnails.length; i++) {
		const thumbnail = thumbnails[i];

		if (thumbnail === currentlySelectedThumbnail) {
			const nextSelectedThumbnail = i === 0 ? thumbnails[thumbnails.length - 1] : thumbnails[i - 1];

			currentlySelectedThumbnail.classList.remove('selected');
			nextSelectedThumbnail.classList.add('selected');

			const mainPicture = document.querySelector('#main-picture-container img');

			const newImagePath = nextSelectedThumbnail.querySelector('img').getAttribute('src');

			mainPicture.setAttribute('src', newImagePath);
		}
	}
}

const rightArrow = document.getElementById('right-arrow');

rightArrow.addEventListener('click', handleRightArrowClick);

function handleRightArrowClick() {
	const currentlySelectedThumbnail = document.querySelector('#thumbnails-container .thumbnail.selected');

	const thumbnails = document.querySelectorAll('#thumbnails-container .thumbnail');

	for (let i = 0; i < thumbnails.length; i++) {
		const thumbnail = thumbnails[i];

		if (thumbnail === currentlySelectedThumbnail) {
			const nextSelectedThumbnail = i === thumbnails.length - 1 ? thumbnails[0] : thumbnails[i + 1];

			currentlySelectedThumbnail.classList.remove('selected');
			nextSelectedThumbnail.classList.add('selected');

			const mainPicture = document.querySelector('#main-picture-container img');

			const newImagePath = nextSelectedThumbnail.querySelector('img').getAttribute('src');

			mainPicture.setAttribute('src', newImagePath);
		}
	}
}
