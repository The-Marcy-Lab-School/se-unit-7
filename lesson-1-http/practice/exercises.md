# Lesson 1 Practice Exercises

## Code Along

1. On your computer, create a folder called `node-http-application`. To initialize a node project, `cd node-http-application` into the newly created folder and then run `npm init`. Create an `index.js` file in this folder. Use the `http` library to create a [hello world node application](https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/). The app should return the plain text of "Hello World" for each response, and should run on port `8080`. You should be able to start your server using the command `npm start`.

2. Add a couple more modules to the top of your `index.js` file to make the next steps easier.

```js
const http = require('http')
const fs   = require('fs')
const url = require('url');
```

3. Update your server function so that your application responds differently to different pathnames. If the path is `/`, the app should return a plain text response of "Hello World". If the path is `/dogs`, the app should return a plain text response of "Hello Dogs". For any other path, we should return a plain text message of "Sorry, that route does not exist."

4. Change the server function you wrote so that we also return the appropriate status code. The status codes of the application so that the `/` and `dogs` routes both return a 200 status, while the default option becomes a 404 response.

5. Create a function called `renderText` that takes in a string of text and an optional status code integer (if no status code is given, it should default to 200). This function should write the status code to the header and the response text to the response, then end the response. Refactor your server to take advantage of this new function.

6. Add any query params as an object for the `renderTemplate` method so we can display some non-static content to the user. For example, `/?name=Doug` should then display `Hello Doug!` in our HTML.


## Short Response

1. Describe the purpose of HTTP Status Codes. Why are these important?

2. What is the difference between a URL and a URI?

3. What is the purpose of query params? How do we use them in our applications?

4. What is the client and what is the server in this exercise?
