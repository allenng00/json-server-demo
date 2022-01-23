
const randomStudentList = (fakerModule, cityList, totalNumber) => {
	const studentList = [];
	if (totalNumber > 0) {
		const countCities = cityList.length;
		Array.from(new Array(totalNumber)).forEach(() => {
			const cityIndex = Math.floor(Math.random() * countCities);

			const student = {
				id: fakerModule.datatype.uuid(),
				name: fakerModule.fake('{{name.lastName}} {{name.firstName}}'),
				age: fakerModule.datatype.number({ min: 10, max: 50 }),
				gender: fakerModule.name.gender(true),
				mark: fakerModule.datatype.float({ min: 0, max: 10 }),
				city: cityList[cityIndex].code,
				createdAt: Date.now(),
				updatedAt: Date.now()
			}

			studentList.push(student)
		})

	}
	return studentList;

};
module.exports = { randomStudentList };