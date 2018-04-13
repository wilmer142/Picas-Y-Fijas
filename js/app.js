//Global Variables
var random;
var picas;
var fijas;

//Getting the random number when page is loaded
$(document).ready(function() {
	random = generate_random();
	console.log(random);
});

//Generating random number without repeat digits
function generate_random() {
	var rand = "";
	while (rand.length < 4 ) {
		var digit = Math.floor(Math.random() * 6);
		if (!rand.includes(digit)) {
			rand += digit;
		}
	}
	return rand;
}

//Calculating Picas and Fijas
$('#number').keyup(function(e){
  if(e.keyCode == 13) {
    picas_y_fijas();
  }
});


//Function to know picas and fijas on each user attempt
function picas_y_fijas() {
	var input_number = $('#number').val();
	picas = 0;
	fijas = 0;
	//Validating length of input number
	if (input_number.length != 4) {
		return console.log("El numero de digitos debe ser 4");
	} else {
		for(i = 0; i < 4; i++) {
			//Validating if random include a digit of input number
			if (random.includes(input_number[i])) {
				//Pica or Fija
				(random[i] == input_number[i]) ? fijas += 1 : picas += 1;
			}
		}
		console.log("Picas: "+ picas +", Fijas: " + fijas);
	}
}