# Practice Exercises 7.7

0. What are the five types of HTTP requests that a browser knows how to make? Why is it important to use different types of requests?

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

2. Choose three of your favorite web applications. What's an example of a one-to-many and many-to-many relationship that might exist within each app?

**Suggested Answer**

This answer will vary depending on the application you choose. Say we chose YouTube. A few examples to choose from:

+ A user has many uploads, and an upload belongs to a user.
+ An uploaded video has many comments, and a comment belongs to an uploaded video.
+ An uploaded video has many tags, and a tag has many uploaded videos.

3. The Marcy Lab School curriculum team needs your help to design an application to manage curriculum. Here is an overview of the organization: the team members work to produce lessons consisting of learning exercises and practice exercises. Each lesson also has essential questions and learning goals. The learning goals are tied to particular topics (such as REST/Schema Design) which fit into a broader unit (i.e. backend programming with Node)

What are some of the domain objects you would have as part of the application? What tables would exist in the database? What columns should be on those tables?

**Suggested Answer**

A good way to approach this problem is to look at the nouns in the description of the domain. A few that jump out right away:

1. Team member
2. lessons
3. learning and practice exercises
4. essential questions
5. learning goals
6. topic
7. unit

Given this, here is an example schema that we might create. You can assume each table has timestamps for created_at and updated_at, as well as an id which is the primary key.

users (or curriculum_writers)
  * id primary key
  * username

lessons
  * title string
  * belongs_to user (or this could be a many-to-many with users)
  * has_many exercises
  * has_many learning_goals
has_many users (or team_members
exercises
  * type string (practice or learning)
  * content (this could point to a file url location, or actually contain the content of the lesson in text)
  * belongs_to lesson
+ lesson_learning_goals
   + belongs_to lesson
   + belongs_to learning_goal
learning_goals
  * belongs_to unit
  * has_many with lessons (this is a many-to-many relationship, and would likely require a join table
  * description

unit
  * title
  * description

topic
  * title
  * description

You could also make an argument that the topic/unit could be stored in a single table and optionally relate to each other.

This is just one potential approach - no wrong answers here, only tradeoffs. 

4. Build a full CRUD, RESTful API using Express for a Todo List. A TodoList should have many items and belong to a user. Each endpoint should respond with the appropriate JSON response. Our API should support:

1. An index route to see a list of todos.
2. A show route to see details about an individual todo item.
3. The ability to update a todo (i.e. mark complete)
4. delete a todo item
5. Create a Todo list item
