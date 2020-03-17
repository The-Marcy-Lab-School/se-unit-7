const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/crudlist');

const Item = sequelize.define(
	'Item',
	{
		// Model attributes are defined here
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.DECIMAL
			// allowNull defaults to true
		},
		category: {
			type: DataTypes.STRING
		}
	},
	{
		// Other model options go here
	}
);

// `sequelize.define` also returns the model
console.log('My sequelize item:', Item === sequelize.models.Item); // true

module.exports = Item;

//TO - put solutions in a gitignore
//For the guide page's practice, linking to the problem set
// Coding Exercise Instructions go with problem set/project

//Practice set not submitted
// To accompany the lesson, create a multi-at bat practice
// set with solutions

//Problem Set Graded (<-- this project)
