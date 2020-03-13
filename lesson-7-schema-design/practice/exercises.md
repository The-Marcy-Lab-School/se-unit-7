# Practice Exercises 7.7

0. What are the six types of HTTP requests that a browser knows how to make? Why is it important to use different types of requests?

**Suggested Answer**

1. GET - for reading information
2. POST - for creating information
3. PUT - for replacing a record. In practice, sometimes is synonymous with PATCH
4. PATCH - for updating a record
5. DELETE - for destroying a record

Using different HTTP verbs allows us to describe with our request how we expect our applications to behave. We can make reasonable expectations to what we're doing without knowing too much detail about how it's being accomplished.

1. You've recently learned about an API for a cat sitting company. The API is fully RESTful for a resource called `cats`. You also happen to know that their database is running Postgresql on the backend. What are the five types of requests the API will respond to? List the HTTP method, url, and what SQL the request will fire in the table below.

** Suggested Answer**

| http method  |  path |  sql | description
|---|---|---|---|
|  GET |  /cats | SELECT * FROM cats;| Index to list all cats |
|  POST |  /cats |  INSERT INTO cats VALUES (...) | create a new cat|
|  GET   | /cats/:id| SELECT * FROM cats WHERE id = ?; | Show an individual cat
| PATCH/PUT | /cats/:id | UPDATE cats SET (value=?) WHERE id=?;| update a cat
| DELETE | /cats/:id |DELETE FROM cats WHERE id=?; | destroy an individual cat record

2. Choose your favorite web application. What's an example of a one-to-many and many-to-many relationship that might exist within the app?

3. The Marcy Lab School curriculum team needs your help to design an application to manage curriculum. Here is an overview of the organization: the team members work to produce lessons consisting of learning exercises and practice exercises. Each lesson also has essential questions and learning goals. The learning goals are tied to particular topics (such as REST/Schema Design) which fit into a broader unit (i.e. backend programming with Node)

What are some of the domain objects you would have as part of the application? What tables would exist in the database? What columns should be on those tables?

4. Build a full CRUD, RESTful API using Express for a Todo List. A TodoList should have many items and belong to a user. Our API should support:

1. An index view to see a list of todos.
2. A show view to see details about an individual todo item.
3. The ability to update a todo (i.e. mark complete)
4. delete a todo item
5. Create a Todo list item 
