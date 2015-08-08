// Generates array cosisting Fibonacci sequence with some value limit. 
// first and second are farguments are two next Fibonacci sequence values.
var generateFibonacciWithLimitedMaxValue = function(first, second, limit){
	fibonacciSequence = [];
	var x = 0;
		fibonacciSequence.push(first);
	if(first != 0){
	fibonacciSequence.push(second);
	}
	while (x<limit) {
		x = first + second;
		first = second;
		second = x;
		if( x < limit){
			console.log
	    	fibonacciSequence.push(x);
		}
	}
    return fibonacciSequence
}

// Generates array cosisting Fibonacci sequence with some array items number limit. 
// first and second are farguments are two next Fibonacci sequence values.

var generateFibonacciWithLimitedItemsNumber = function(first, second, limit){
	fibonacciSequence = [];
    for(k=0; k<limit; first=second, second=z, k++ ){
        z=first+second;
	    fibonacciSequence.push(z);
	}
    return fibonacciSequence
}

//Benchamrk function
var getBenchmark = function(fn, arg1) {
	var startTime = process.hrtime();
	fn(arg1);
	var processingTime = process.hrtime(startTime);
	console.log("-----BENCHMARK-----");
	console.log("Done in: " + processingTime[0] + "," + processingTime[1] + " seconds!");
	console.log("-------------------");
	console.log("");
}

// Fibonacci sequence
var fibSeq = generateFibonacciWithLimitedMaxValue(1, 2, 4e6);

var fibSeqSumWithReduce = function (){
	return fibSeq.reduce(function (prevVal, currVal) {
		if (currVal%2 === 0){
			return prevVal + currVal
		} else {
			return prevVal
		}
	}, 0)
} 

var fibSeqSumWithFor = function(){
	var sum = 0;
	for (var i = 0; i<fibSeq.length; i++){
		if (fibSeq[i]%2 === 0){
			sum += fibSeq[i];
		}
	}
	return sum
}

// ---------------------Benchmarks--------------------------

console.log("Using reduce on array: ");
getBenchmark(fibSeqSumWithReduce, "");
console.log("Using for loop: ");
getBenchmark(fibSeqSumWithFor, "");

console.log(fibSeqSumWithFor())
console.log(fibSeqSumWithReduce());
