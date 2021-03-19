const Sequelize = require('sequelize');
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });

const queryInterface = db.getQueryInterface();

queryInterface.createTable('fellows', {
    firsName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	},
	phoneNumber: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING,
		unique: true
	},
	age: {
		type: Sequelize.INTEGER
	},
  });
const Fellow = db.define('fellow', {
	firsName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	},
	phoneNumber: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING,
		unique: true
	},
	age: {
		type: Sequelize.INTEGER
	}
});
const Staff = db.define('staff', {
	firsName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	},
	isAwesome: {
		type: Sequelize.BOOLEAN,
		defaultValue: true
	}
});
const Mentor = db.define('mentor', {
	firsName: {
		type: Sequelize.STRING
	},
	lastName: {
		type: Sequelize.STRING
	},
	sessionCount: {
		type: Sequelize.INTEGER
	}
});
const Project = db.define('project', {
	name: {
		type: Sequelize.STRING
	},
	startDate: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	},
	dueDate: {
		type: Sequelize.DATE
	},
	status: {
		type: Sequelize.STRING,
		isIn: [['complete', 'incomplete']],
		allowNull: false
	}
});
const Program = db.define('program', {
	name: {
		type: Sequelize.STRING,
		isIn: [['software engineering', 'data science']]
	},
	startDate: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	}
});
Fellow.belongsToMany(Project, { through: 'FellowProjects' });
Project.belongsToMany(Fellow, { through: 'FellowProjects' });

Fellow.hasOne(Mentor);
Mentor.belongsTo(Fellow);

Program.hasMany(Fellow);
Fellow.belongsTo(Program);


const express = require('express');
const app = express();

app.get('/fellows', async (_req, res, next) => {
	try {
		const fellows = await Fellow.findAll();
		res.json(fellows);
	} catch (err) {
		next(err);
	}
});

app.get('/projects', async (_req, res, next) => {
	try {
		const fellows = await Project.findAll();
		res.json(fellows);
	} catch (err) {
		next(err);
	}
});

app.get('/staff', async (_req, res, next) => {
	try {
		const fellows = await Staff.findAll();
		res.json(fellows);
	} catch (err) {
		next(err);
	}
});

app.get('/fellows/:fellowId', async (_req, res, next) => {
	try {
		const fellows = await Fellow.findOne({
            where: {id: req.params.fellowId}
        });
		res.json(fellows);
	} catch (err) {
		next(err);
	}
});

app.get('/projects/:projectId', async (req, res, next) => {
	try {
		const fellow = await Project.findOne({
			where: { id: req.params.projectId }
		});
		res.json(fellow);
	} catch (err) {
		next(err);
	}
});

app.get('/staff/:staffId', async (req, res, next) => {
	try {
		const fellow = await Staff.findOne({
			where: { id: req.params.staffId }
		});
		res.json(fellow);
	} catch (err) {
		next(err);
	}
});

app.get('/program/:programId', async (req, res, next) => {
	try {
		const fellow = await Program.findOne({
			where: { id: req.params.programId }
		});
		res.json(fellow);
	} catch (err) {
		next(err);
	}
});

app.listen(8080);