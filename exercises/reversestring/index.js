// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let reversed = "";
	// for (let i = 0; i < str.length; i++) {
	// 	reversed = str[i] + reversed;
	// }
	for (let character of str) {
		reversed = character + reversed;
	}

	return reversed;
}

//function only use for debugger
// reverse('asdf');

module.exports = reverse;

// SOLUTION #1 convert to array (split)
// Then (reserve) array and (join) array back into string
// function reverse(str) {
// 	return str.split("").reverse().join("");
// }

// SOLUTION #2
// function reverse(str) {
// 	let reversed = "";
// 	// for (let i = 0; i < str.length; i++) {
// 	// 	reversed = str[i] + reversed;
// 	// }
// 	for (let character of str) {
// 		reversed = character + reversed;
// 	}

// 	return reversed;
// }



// SOLUTION #3
// function reverse(str) {
// 	// reduce is used to take all different values with an arry
// 	// and condense then all down to one singular value;
// 	// reduce take 2 argument. First argument is an arrow function
// 	// second argument is the starting initial value for the function
//   debugger;
// 	return str.split("").reduce((rev, char) => char + rev, "");
// }
