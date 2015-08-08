// Task 1 (Multiples of 3 and 5)
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
var getMultiplies = function(range) {
	var sum = 0;
	for (var i=1; i<range; i++) {
		if (i%3 === 0 || i%5===0) {
			sum += i;
		}
	}
	console.log(sum);
}

var getBenchmark = function(fn, arg1) {
	var startTime = process.hrtime();
	fn(arg1);
	var processingTime = process.hrtime(startTime);
	console.log("");
	console.log("-----BENCHMARK-----");
	console.log("Done in: " + processingTime[0] + "," + processingTime[1] + " seconds!");
	console.log("-------------------");
	console.log("");
}

getBenchmark(getMultiplies, 1000);