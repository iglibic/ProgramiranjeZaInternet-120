/**
 *  1. Add heart icon toggle.
 * By clicking on the heart icon it should switch between full(fa-heart class) and empty (fa-heart-o class) icon.
 * Hints:
 *  element.classList.contains("class-name") --> checks if an element has a class
 * 	element.classList.remove("class-name") --> removes a class from an html element
 * 	element.classList.add("class-name") --> adds a class to an html element
 */

/**
 * 2. By clicking on a + icon on a card, a prompt is opened that asks the user to input text for a new paragraph.
 * If the prompt input is not empty, the text is added at the bottom of the card.
 *
 * Hints:
 *   prompt --> function that, when run, will open a prompt for user to input text, if anything is input in the prompt, it will return that text
 *   document.createElement("tag-name") --> creates an html element based on the tag name you pass to the function
 *   const parent = element.parentElement --> gets the parent element of an html element
 *   .appendChild(createdElement)  --> appends an element to an html elements
 */

/**
 * 3. By clicking on the X button on a card, a confirm window is opened and asks a user if they want to remove the card in question.
 * The title of the confirm window should include the card title, for example: "Do you want to delete the Svilaja card?"
 * If the user clicks OK, the card is removed from the DOM.
 * Hints
 *   confirm --> function that, when called, opens a confirm dialog on the screen
 *   element.textContent --> gets text content of an html element
 *   cardElement.remove() --> removes an html element from the DOM
 */

/**
 * 4. Star icon click events should be added.
 * If any of the star icons on a card were clicked, all star icons left of that icon
 * including that icon should be filled with color (fa-star class),
 * while the rest of the icons to the right of the clicked icon should be "empty" (fa-star-o class)
 */

/**
 * 5. By clicking on the "Add New Card" button, prompts are opened for the user to input the title, image path and description.
 * If any of the values were not inputted, alert is shown that informs the user that all prompts should be filled.
 * If all values are inputted correctly, a new card is added with that content.
 * The new card should have all of the event listeners that the rest of the cards have (heart icon click, delete icon click, add paragraph, star icon click)
 */
