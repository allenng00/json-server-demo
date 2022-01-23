
export const randomProductList = (fakerModule, categoryList, numberPerCategory) => {
	const productList = [];
	if (numberPerCategory > 0) {
		categoryList.forEach((category) => {
			Array.from(new Array(numberPerCategory)).forEach(() => {
				const product = {
					id: faker.datatype.uuid(),
					categoryId: category.id,
					name: faker.commerce.productName(),
					price: Number.parseFloat(faker.commerce.price()),
					description: faker.commerce.productDescription(),
					thumbnailUrl: faker.image.imageUrl(400, 400),
					color: faker.commerce.color(),
					createdAt: Date.now(),
					updatedAt: Date.now()
				}

				productList.push(product)
			})

		})
	}
	return productList;

};