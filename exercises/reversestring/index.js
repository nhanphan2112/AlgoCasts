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

module.exports = reverse;

// Solution #1 convert to array (split)
// Then (reserve) array and (join) array back into string
// function reverse(str) {
// 	return str.split("").reverse().join("");
// }
