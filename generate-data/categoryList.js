export const randomCategoryList = (fakerModule, number) => {
	const categoryList = [];
	if (number > 0) {
		Array.from(new Array(number)).forEach(() => {
			const category = {
				id: faker.datatype.uuid(),
				name: faker.commerce.department(),
				createdAt: Date.now(),
				updatedAt: Date.now()
			}

			categoryList.push(category)
		}
		)
	}
	return categoryList;

};