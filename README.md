# Assignment Backend

## Open assignment

The assignment is quite open.

### Brief

A Toy Shop needs to keep track of all their upcoming expenses.
The frontend team needs a API endpoints to keep track of their budget after all their expenses are paid. You decide the approach. The following features are needed:

-   Paginated listing of suppliers
-   Paginated listing of expenses
    -   Support for filtering by supplier would be preferred
-   An endpoint for a dashboard, supplying a breakdown of paid/unpaid expenses broken down by supplier

### Before you begin

-   Scope the project and estimate the tasks. This is to demonstrate that you’re able to set a realistic scope for your solution. Cut it into smaller tasks and finally put a realistic estimate on the tasks for how long you think it will take to implement each task.
    This should be submitted before you start coding.

### Things we would like to see implemented / done as part of your solution:

-   Create a postgres database with models.
-   Create a server in Nodejs + Typescript
-   Relations between tables.
-   Use git to commit and track changes. Project should be submitted as a link to a git repo. If you prefer using a private git repo please let us know. Then we will provide you with GitHub handles to invite.

### Things we value.

-   Automated Tests for the endpoints.
-   Your understanding of database structure
-   Clean code
-   Readable git history/commit messages so we can evaluate the evolution of the codebase
-   Documentation

### Note

We’re aware of and understand that you have a full-time job already and assume that you will have to invest some of your free time, which likely will affect the scope of the task. We do not expect a fully polished ready-to-publish application. Rather - we recommend using this task to demonstrate and show off how you think and work with a task from beginning to end.

---

1. Project idea
   Decide on a small project which could possibly be made in a few days.
   Ideas could be things like a to-do app, calculator, time tracker or similar. Doing something silly and/or fun is encouraged!

2. Scope & Estimate
   Break the project down into component parts and detail the scope of features.
   Estimate the project components. Please submit the estimate and scope before starting work on the prototype.

3. MVP
   Build a prototype. Don't worry about building a complete project - but try and stick to your initial scope.
   Please keep track of how much time you end up spending on each component part. It does not matter if this is close to the estimated time - this is just to have a close-to-real experience of a project.

---

## This repository

This repository contains a bit of boilerplate to get you going quicker.
Feel free to change anything.

There is a docker-compose file which sets up a postgres database on port 5432.
You can use this connectionstring to connect to it: `postgresql://test:test@:5432/test`

Steps to run this project:

1. Run `npm install` command
2. Run `docker-compose up` command
3. Run `npm run dev` command

The project uses node v16.
