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

    - The `init:config` created a `config.json`, which includes the environments. **Pause here to explore the contents of this file** Based on these environments, sequelize will choose a database configuration.

    - If other packages are needed, then they can be installed later.

3.  Folder Structure

    - Within `/coding-exercises`, create a directory called `app` with a sub-directory called `routes` that will be used for your express routes.

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

    . Consider Schema:

- Here is a [screenshot of the end goal](practice/coding-exercise-goal.png) for this project. Before creating any models for your application. Take out a pencil and paper to plan out the Sequelize model(s) that can be used to represent your SQL database.

. Create Your Models:

- Using the brainstorm from the previous step, actually create your model. _The [documentation on model definition](https://sequelize-guides.netlify.com/model-definition/) and [column types](https://sequelize-guides.netlify.com/column-types/) could be particular helpful during this time._
- Within `/coding-exercise`, create
