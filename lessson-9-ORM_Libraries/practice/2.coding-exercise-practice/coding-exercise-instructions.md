# Unit 7, Lesson 6

## ORM/Libraries

### Coding Exercise Instructions

1.  Set Up and Install Dependencies:

    - Generate an empty npm project by running the command `npm init`.

    - Feel free to run through each of the prompts. Fun fact! You can bypass the interactive prompts by running `npm init --y`; this `--y` flag represents "yes".

    - Next, use npm to install [express](https://www.npmjs.com/package/express) and [node-postgres](https://www.npmjs.com/package/pg)

    - [Install Sequelize](https://sequelize.org/) and bookmark the most recent version of documenation so that you may use throughout this exercise.

    - [Install Sequelize Command Line](https://github.com/sequelize/cli). This will allow for a more streamline experience using Sequelize.

    - Move on when you have installed the above resources successfully. **Success at this point means that you can run `npx sequelize --help` from your `/coding-exercise` directory.**

2.  Initialize Models and Configuration:

    - Use the [Sequelize CLI documentation](https://github.com/sequelize/cli) to locate the commands used for initializing models and initializing configuration.

    - Run these two commands from your `practice/coding-exercise` directory.

    - If you find that your commands are not running as expected or if you are receiving a terminal output of `bash: sequelize: command not found`, then re-read the Sequelize CLI documentation under [the Usage Section](https://github.com/sequelize/cli#usage) and try the command again using `npx sequelize [command]`.

    - **Move on once your terminal output has shown both of these messages: `Successfully created models fold at`... and `Created "config/config.json`.**

    - The `init:models` command has created a `/models` directory with an `index.js` file. **Pause here to explore the contents of this file.** This file will read all of the models from your `/models` directory and make them available to your application.

    - The `init:config` created a `config.json`, which includes the environments. Pause here to explore the contents of this file. **For each environment's [sequelize dialect](https://sequelize.org/master/manual/dialect-specific-things.html), ensure it is set to 'postgres'**. Based on these environments, sequelize will choose a database configuration.

    - If other packages are needed, then they can be installed later.

3.  Folder Structure

    - Within `/coding-exercises`, create a directory called `app` and nested within that, also create a sub-directory called `routes`.

    - Also create a `pulbic` sub-directory within `app` directory. This subdirectory will house all of your HTML, Javascript, and other external files.

    - Lastly, create a file called `server.js` within the root of your `/coding-exercises` directory.

    - **Move on once you have set up for file structure based on the previous instructions.**

4.  Server Set Up

    - Install [body-parser](https://www.npmjs.com/package/body-parser) into your npm project. This package will be used to accept data from your API routes.

    - Within `/server.js`:
      1. require express and body-parser.
      2. assign an express instance to a variable called `app`.
      3. mount the _body parser_ middleware to `app` (your express instance) so that it can handle parsing. Refer to documentation for [express `.use()` method](https://expressjs.com/en/api.html#app.use). Also, refer to [body parser documentation examples](https://www.npmjs.com/package/body-parser#examples). Set up the _body parser_ functions that:
      - Returns middleware that only parses json
      - Returns middleware that only parses urlencoded body objects that can contain key-value pairs of any data type
      - Returns middleware that parses all bodies as a string. No need to use the optional parameter
      4. Serve static files to your express app from your `/app/public` directory. An example can be found in the [express docs about static files](https://expressjs.com/en/starter/static-files.html).

5.  Create Routes:

    - Create an `apiRoutes.js` file within it. Although you have not yet create your models, it can be helpful to set up basic routes as a framework. Use the starter code below inside of your `apiRoutes.js` file.

    ```javascript
    module.exports = function(app) {
    	/**Your Routes Go Here**/
    };
    ```

    - Create four basic routes to represent the CRUD (_Create, Read, Update, Delete_) operations. For each route, follow the pattern of `api/[route-name-goes-here]/[data-id-if-applicable]`. For the second parameter, pass each of your routes and empty function. Use the following route names:

      - GET: `/all`
      - PUT: `/update`
      - POST: `/new`
      - DELETE: `/delete`

6.  Consider Schema:

    - Here is a [screenshot of the end goal](practice/coding-exercise-goal.png) for this project. Before creating any models for your application. Take out a pencil and paper to plan out the Sequelize model(s) that can be used to represent your SQL database. **Move on when you are confident in your schema and could _hypothetically_ (or actually!) explain your reasoning to a peer.**

7.  Create Your Models:

    - Using the brainstorm from the previous step, get ready to create your model.

    - Within `/coding-exercise/models`, create an `item.js` file. Use the starter code below inside of your `item.js`.

    ```javascript
    module.exports = function(app) {
    	/**Your Routes Go Here**/
    };
    ```

    - _The [documentation on model definition](https://sequelize.org/master/manual/model-basics.html#model-definition) and [column types](https://sequelize-guides.netlify.com/column-types/) could be particular helpful during this time._ Remember, the end goal is captured in your [screenshot](practice/coding-exercise-goal.png).

    - Now you have a model/models that you can use in your application. This will be created in a database table and can be used!

    - **Move on when you have at least one complete model**

8.  Continue Setting Up Express Application:

    - Return to `server.js`.

    - Set up your application to listen on PORT 3000. Pass the `listen()` method a function that will log a helper message to the terminal when your server is working. Refer to the [express documentation](http://expressjs.com/en/5x/api.html#app.listen_path_callback).

    - Run the command: `node server.js` Ensure that your terminal output verifies that your server is running.

9.  Connect your data model to your express routes.

    - Stay withing `server.js`.

    - Import your models and assign it to a constant named `db` for "database".

    - Import your routes and assign it to a constant named `apiRoutes`.

    - Associate your api routes with your application. Do this by invoking an instance of your `apiRoutes()` and pass in `app`.
