const urls = require('../utils/urls');

// function calculates a factorial based on the provided value
const calculateNumbersFactorial = async (value) => {
	browser.url(urls.baseUrl);
	const inputField = $('#number');
	const calculateButton = $('#getFactorial');

	await inputField.setValue(value);
	await calculateButton.click();
};

module.exports = {
calculateNumbersFactorial
};
