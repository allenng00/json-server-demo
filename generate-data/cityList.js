const randomCityList = (fakerModule, number) => {
	const cities = [];

	if (number > 0) {
		let regionNames = new Intl.DisplayNames(['vi'], { type: 'region' });

		for (let index = 0; index < number; index++) {
			const randomCode = fakerModule.address.countryCode();
			const city = {
				code: randomCode,
				name: regionNames.of(randomCode)
			}
			cities.push(city);
		}
	}
	// return cities;
	return Array.from(new Set(cities));
}

module.exports = { randomCityList };