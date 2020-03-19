const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const db = require('./models'); /** Remember, running the command sequelize init:models? */
const apiRoutes = require('./app/routes/apiRoutes.js');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//TODO: uncomment this portion of data parsing if it is
//100% necessary for the rest of the project
// --> app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Static directory
app.use(express.static('app/public'));

apiRoutes(app);

app.listen(PORT, () => {
	console.log(`It works! Listening on PORT ${PORT}`);
});
