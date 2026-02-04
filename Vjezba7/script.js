/**
 * 1. Write an arrow function that takes a year, month, and day as arguments
 * and returns true if the date is in the future, or false if it’s in the past.
 */

const isfuturedate=(year,month,day)=>{
	const date= new Date(year,month,day);
	const now = new Date();

	return date>now;
};
console.log("\n Future date?:",isfuturedate(2025,12,20),"\n");


/**
 * 2. Write a function that adds days to a date, it takes a date object and a number as arguments
 * and returns a new Date object which corresponds the initial date plus the number of days passed in the second argument
 */
function adddaystodate(date,days){
	const result=new Date(date);
	result.setDate(result.getDate()+days);

	return result;
}

console.log("Date + days: ", adddaystodate(new Date(),10),"\n");
/**
 * 3. Create a new variable where you will store an array with names of people whose birthday is in the current month.
 */

const people = [
	{name: 'Alice', birthDate: new Date('2002-10-15')},
	{name: 'Bob', birthDate: new Date('2009-01-22')},
	{name: 'Charlie', birthDate: new Date('1985-12-03')},
	{name: 'Mary', birthDate: new Date('1995-11-15')},
	{name: 'David', birthDate: new Date('1999-12-22')},
	{name: 'Ruth', birthDate: new Date('1985-10-03')},
];

const currentMonth = new Date().getMonth();

const birthdaysThisMonth = people
.filter((person) => person.birthDate.getMonth() === currentMonth)
.map((person) => person.name);

console.log("Birthdays this month: ", birthdaysThisMonth, "\n\n");

/**
 * 4.For array1 and array2 create new variables where you will store the result of a check if those arrays have even numbers.
 * Log the results.
 *
 * Write a function that takes an array of numbers and returns the first even number found in the array.
 * If there are no even numbers, return null.
 * Log the result of calling that function for array1 and array2
 */

const array1 = [1, 3, 7, 10, 15];
const array2 = [1, 3, 7, 9, 13];


const firstEvenInArray1 = array1.find(num => num % 2 === 0);
const firstEvenInArray2 = array2.find(num => num % 2 === 0);


const hasEvenInArray1 = firstEvenInArray1 !== undefined;
const hasEvenInArray2 = firstEvenInArray2 !== undefined;

console.log("Array1 has even number:", hasEvenInArray1);
console.log("Array2 has even number:", hasEvenInArray2, "\n\n");

console.log("First even in array1:", firstEvenInArray1 ?? null);
console.log("First even in array2:", firstEvenInArray2 ?? null, "\n\n");



/**
 * 5. Given an array of users with their name and email (that can be string or null),
 * Create a new variable where if the user has a valid email (just check if there is an @ sign),
 * you will store another property "verified" to the returning object and set it to true
 * If the user has no valid email set the verified property to false
 *
 * Create a second variable where you will store only verified user ids
 */

const users = [
	{id: 1, name: 'Alice', email: 'alice@example.com'},
	{id: 2, name: 'Bob', email: null},
	{id: 3, name: 'Charlie', email: 'charlie@example.com'},
	{id: 4, name: 'Mary', email: 'maryexample.com'},
];

	const usersWithVerification = users.map((user) => {
	return {
	...user,
	verified: user.email && user.email.includes("@") ? true : false,
	};
	});
	
	console.log("Users with verification: ", usersWithVerification, "\n\n");
	
	const verifiedUserIds = usersWithVerification
	.filter((user) => user.verified)
	.map((user) => user.id);
	
	console.log("Verified user IDs: ", verifiedUserIds, "\n\n");

/**
 * 6. For the following array where a single array item represents a sale of a product on a certain date,
 * quantity field tells us how much of the product was soldo on that day.
 * Calculate the total sales made today using reduce array method.
 */

const sales = [
	{product: 'Laptop', price: 1200, quantity: 1, date: new Date()},
	{product: 'Monitor', price: 300, quantity: 2, date: new Date()},
	{product: 'Mouse', price: 20, quantity: 5, date: new Date()},
	{
		product: 'Keyboard',
		price: 50,
		quantity: 3,
		date: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
	},
];
   const today = new Date();
   const totalSalesToday = sales
   .filter((sale) => sale.date.toDateString() === today.toDateString())
   .reduce((total, sale) => total + sale.price * sale.quantity, 0);

    console.log("Total sales today: ", totalSalesToday, "\n\n");



/**
 * 7. Go through the people array from the 3. task and based on their birthDate,
 * create a new array where with the rest of the fields you will add a new property age that calculates their age based on the current date.
 * Take in account if their birthday has already passed this year or not.
 *
 * Based on the age property of the new array, create a new variable that groups the users into three categories: below20, between20and30, and above30.
 * Return an object with these three categories as keys and arrays of names as values.
 *
 * Example how the result should look like:
 *  {
 *    below20: ['Matt'],
 *    between20and30: ['Amy', 'Jeff'],
 *    above30: ['James']
 *  }
 */

const peoplesAge = people.map((person) => {
	const now = new Date();
	const birthDate = person.birthDate;
	let age = now.getFullYear() - birthDate.getFullYear();
	
	const hasHadBirthday =
	now.getMonth() > birthDate.getMonth() ||
	(now.getMonth() === birthDate.getMonth() &&
	now.getDate() >= birthDate.getDate());
	
	if (!hasHadBirthday) age--;
	
	return { ...person, age };
	});
	
	console.log("People with age: ", peoplesAge, "\n\n");
	
	const groups = {
	below20: [],
	between20and30: [],
	above30: [],
	};
	
	const ageGroups = peoplesAge.reduce((groups, person) => {
	if (person.age < 20) {
	groups.below20.push(person.name);
	} else if (person.age >= 20 && person.age <= 30) {
	groups.between20and30.push(person.name);
	} else {
	groups.above30.push(person.name);
	}
	
	return groups;
	}, groups);
	
	console.log("Age groups: ", ageGroups, "\n\n"); 
