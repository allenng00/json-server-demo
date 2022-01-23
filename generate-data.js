const faker = require('@faker-js/faker');
const fs = require('fs');
// Set locale to use Vietnamese
faker.locale = 'vi';

// Random data
const randomCategoryList = (number) => {
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

const randomProductList = (categoryList, numberPerCategory) => {
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

//IFFE
(() => {
	//Random data 
	const categoryList = randomCategoryList(10);
	const productList = randomProductList(categoryList, 10)
	// prepare db
	const db = {
		categories: categoryList,
		products: productList,
		profile: {
			name: "Kh"
		}
	}

	// write db object to db file db.json
	const data = JSON.stringify(db);
	fs.writeFile('db.json', data, () => {
		console.log('Generate date successfully!')
	});

})()