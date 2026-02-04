/**
 * 1. Create a class called Book will include properties title, author, and year.
 * It has to have a class method called getDetails that returns
 * a sentence (string) that describes the book (what is the title, who is the author and what year was it published).
 * To create that string use string literals (not concatenation).
 * Create an instance of that class for a book called "The Fellowship of the Ring" by J.R.R. Tolkien that was published 1954
 * Log the result of calling the getDetails method on that instance
 */

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getDetails() {
        return `The book "${this.title}" by ${this.author} was published in ${this.year}.`;
    }
}

const book = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 1954);

/**
 * 2. Create a class EBook by extending the class Book.
 * The new class should have additional properties downloadLink and fileFormat
 * It should also have a method called "download" which prints the following sentence:
 * Downloading 'title' in 'fileFormat' format. Link: 'downloadLink'
 * Where the values in parentheses are switched with the true values of the class properties using string literals.
 * Create an instance of the EBook class for a book called 'The Two Towers' by J.R.R. Tolkien that was published in 1954 in mp3 format
 * and the download link is https://archive.org/details/the-two-towers_soundscape-by-phil-dragash
 * Log the result of calling the download method on that instance
 */

class EBook extends Book {
    constructor(title, author, year, downloadLink, fileFormat) {
        super(title, author, year);
        this.downloadLink = downloadLink;
        this.fileFormat = fileFormat;
    }

    download() {
        console.log(`Downloading '${this.title}' in '${this.fileFormat}' format. Link: '${this.downloadLink}'`);
    }
}

const ebook = new EBook("The Two Towers", "J.R.R. Tolkien", 1954, "https://archive.org/details/the-two-towers_soundscape-by-phil-dragash", "mp3");

/**
 * 3. Create an object with 3 properties:
 * 			1. x that is set to 5
 * 			2. y that is set to 3
 * 			3. sumXY that is a function that sums the first two object properties
 * Log to console the result of calling sumXY
 */

const obj = {
    x: 5,
    y: 3,
    sumXY: function() {
        return this.x + this.y;
    }
};

/**
 * 4. Create an arrow function that takes an email string and returns everything before the @ symbol as the username.
 * If there’s no @ in the email, return null.
 * Call the function with a valid and an invalid mail and log the result.
 */

const getUsername = (email) => {
    const atIndex = email.indexOf('@');
    if (atIndex === -1) return null;
    return email.slice(0, atIndex);
};

/*
 * 5. Create a function that receives 2 parameters: text and word
 * It counts the number of times a word appears in the text, case insensitive
 * If the word appears only once the string should say "The word ??? appears 1 time in the following text: ???".
 * Otherwise it should say "The word ??? appears ??? times in the following text: ???".
 * The ??? should be replaced with the respective values using string literals without concatenation.
 */

function countWord(text, word) {
    const lowerText = text.toLowerCase();
    const lowerWord = word.toLowerCase();
    const regex = new RegExp(`\\b${lowerWord}\\b`, 'g');
    const matches = lowerText.match(regex);
    const count = matches ? matches.length : 0;
    const timeOrTimes = count === 1 ? 'time' : 'times';
    return `The word ${word} appears ${count} ${timeOrTimes} in the following text: ${text}`;
}

/**
 * 6. Write a function that finds and returns the first character in a string that does not repeat.
 * If all characters repeat, return null.
 */

function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}

// Example call
console.log(firstNonRepeatingChar("swiss")); // 'w'
console.log(firstNonRepeatingChar("aabb")); // null

/**
 * 7.Write a function that takes a snake_case string and converts it to camelCase.
 */

function snakeToCamel(str) {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}
