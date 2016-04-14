var inputNumber = prompt('Please enter a number');
var fizzNumber = parseInt(inputNumber);

function fizzbuzz(fizzNumber){
	var body = document.getElementsByTagName("BODY")[0];
	for(var i=1; i<=inputNumber; i++) {
		var p = document.createElement("P");
		if (i%3 === 0 && i%5 === 0) {
			console.log("FizzBuzz");
			p.appendChild(document.createTextNode("FizzBuzz"))
		}
		else if (i % 3 === 0) {
			console.log("Fizz");
			p.appendChild(document.createTextNode("Fizz"))
		}
		else if (i % 5 ===0) {
			console.log("Buzz");
			p.appendChild(document.createTextNode("Buzz"))		}
		else {
			console.log(i);
			p.appendChild(document.createTextNode(i))
		}
		body.appendChild(p)
	}
}