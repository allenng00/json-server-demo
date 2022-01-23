const faker = require('@faker-js/faker');
const fs = require('fs');
faker.locale = 'vi';

const { randomCategoryList } = require('./categoryList');
const { randomProductList } = require('./productList');
const { randomCityList } = require('./cityList');
const { randomStudentList } = require('./studentList');
// Set locale to use Vietnamese

// Random data



//IFFE
(() => {
	//Random data 
	const categoryList = randomCategoryList(faker, 0);
	const productList = randomProductList(faker, categoryList, 0)
	const cityList = randomCityList(faker, 10)
	const studentList = randomStudentList(faker, cityList, 50)
	// prepare db
	const db = {
		categories: categoryList,
		products: productList,
		cities: cityList,
		students: studentList
	}

	// write db object to db file db.json
	const data = JSON.stringify(db);
	fs.writeFile('db.json', data, () => {
		console.log('Generate date successfully!')
	});

})()