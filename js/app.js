//Getting the random number when page is loaded
$(document).ready(function() {
	var random = generate_random();
	console.log(random);
});

function generate_random() {
	var random = "";
	while (random.length < 4 ) {
		var digit = Math.floor(Math.random() * 6);
		if (!random.includes(digit.toString())) {
			random += digit;
		}
	}
	return random;
}