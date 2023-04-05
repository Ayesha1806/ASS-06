//Create a variable called "num" and assign it a value of your choice.
let num = 25;

//Use the Math.sqrt() method to calculate the square root of "num". Use console.log() to display the result.
console.log(Math.sqrt(num)); // Output: 5

//Use the Math.random() method to generate a random number between 0 and 1. Multiply the result by 10 and round it to the nearest whole number using the Math.round() method. Use console.log() to display the result.
let randomNum = Math.round(Math.random() * 10);
console.log(randomNum); // Output: random number between 0 and 10

//Use the Date() constructor to create a new date object called "today". Use console.log() to display the current date and time.
let today = new Date();
console.log(today); // Output: current date and time

//Use getter functions to extract the following information from the "today" object and display it in the console: Year, Month (in numeric format), Day of the month, Day of the week (in numeric format)
let year = today.getFullYear();
let month = today.getMonth();
let dayOfMonth = today.getDate();
let dayOfWeek = today.getDay();
console.log(year); // Output: current year
console.log(month); // Output: current month in numeric format (0-11)
console.log(dayOfMonth); // Output: current day of the month
console.log(dayOfWeek); // Output: current day of the week in numeric format (0-6)

//Use setter functions to set the following values in the "today" object: Year to 2022, Month to December, Day of the month to 31
today.setFullYear(2022);
today.setMonth(11);
today.setDate(31);

//Use getter functions to extract the updated values from the "today" object and display them in the console.
console.log(today.getFullYear()); // Output: 2022
console.log(today.getMonth()); // Output: 11 (December)
console.log(today.getDate()); // Output: 31

//Use the Date() constructor to create a new date object called "birthday". Set the year, month, and day of the month to your own birthday.
let birthday = new Date(1995, 4, 17); // Month is zero-based, so 4 is May

//Use the getTime() method to extract the number of milliseconds between the "birthday" object and the "today" object. Use console.log() to display the result.
let millisecondsDiff = today.getTime() - birthday.getTime();
console.log(millisecondsDiff); // Output: number of milliseconds between the two dates

//Use the getTime() method to extract the number of days between the "birthday" object and the "today" object. Use console.log() to display the result.
let daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
console.log(daysDiff); // Output: number of days between the two dates




