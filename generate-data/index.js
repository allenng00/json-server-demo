const faker = require('@faker-js/faker');
const fs = require('fs');
faker.locale = 'vi';

import randomCategoryList from './categoryList';
import randomProductList from './productList';
// Set locale to use Vietnamese

// Random data



//IFFE
(() => {
	//Random data 
	const categoryList = randomCategoryList(faker, 10);
	const productList = randomProductList(faker, categoryList, 10)
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