/**
 *
 *  Hints for tasks in this page:
 * 	element.classList.remove("class-name") --> removes a class from an html element
 * 	element.classList.add("class-name") --> adds a class to an html element
 */

/**
 * 1. When clicking on a thumbnail image,
 * the main large image should change and show the image of the thumbnail that was clicked.
 * The underlining (active class) should also change to the thumbnail that was clicked.
 */

/**
 * 2. On left arrow click, the large image should change to the image that is left of currently active (underlined) thumbnail image.
 * Underlining should also change accordingly.
 * If the currently active thumbnail image is the first (leftmost) one, on left arrow click the last one (rightmost) should become active.
 */

/**
 * 3. On right arrow click, the large image should change to the image that is right of currently active (underlined) thumbnail image.
 * Underlining should also change accordingly.
 * If the currently active thumbnail image is the last (rightmost) one, on right arrow click the last one (leftmost) should become active.
 */

const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.querySelector("#main-picture-container img");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

function setActiveThumbnail(index) {
	thumbnails.forEach((t) => t.classList.remove("selected"));
	thumbnails[index].classList.add("selected");
	mainImage.src = thumbnails[index].querySelector("img").src;
}

thumbnails.forEach((thumbnail, index) => {
	thumbnail.addEventListener("click", () => {
		setActiveThumbnail(index);
	});
});

leftArrow.addEventListener("click", () => {
	let activeIndex = [...thumbnails].findIndex((t) =>
		t.classList.contains("selected")
	);

	activeIndex = activeIndex === 0 ? thumbnails.length - 1 : activeIndex - 1;
	setActiveThumbnail(activeIndex);
});

rightArrow.addEventListener("click", () => {
	let activeIndex = [...thumbnails].findIndex((t) =>
		t.classList.contains("selected")
	);

	activeIndex = activeIndex === thumbnails.length - 1 ? 0 : activeIndex + 1;
	setActiveThumbnail(activeIndex);
});
