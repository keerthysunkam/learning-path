function isPrime(number) {
	if (number < 2) {
		return false;
	}

	for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
		if (number % divisor === 0) {
			return false;
		}
	}

	return true;
}

const limit = 50;
const primeNumbers = [];

for (let number = 2; number <= limit; number++) {
	if (isPrime(number)) {
		primeNumbers.push(number);
	}
}

console.log(`Prime numbers up to ${limit}:`);
console.log(primeNumbers.join(', '));
