const randomCategoryList = (fakerModule, number) => {
	const categoryList = [];
	if (number > 0) {
		Array.from(new Array(number)).forEach(() => {
			const category = {
				id: fakerModule.datatype.uuid(),
				name: fakerModule.commerce.department(),
				createdAt: Date.now(),
				updatedAt: Date.now()
			}

			categoryList.push(category)
		}
		)
	}
	return categoryList;

};
module.exports = { randomCategoryList };