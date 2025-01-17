<p align="center">
  <img src="uml.png?raw=true" alt="assignment-backend"></a>
</p>

<h1 align="center">Assignment Backend</h1>

<div align="center">

This is a backend assignment for a job application!

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/captain-fatbeard/assignment-backend/blob/main/LICENSE.md)

</div>

## Summary

As this was my first real Typescript and fastify assignment, i started out scoping the tasks. The [brief](https://github.com/captain-fatbeard/assignment-backend/blob/main/brief.md) asked for a relational model structure so after the scope, I created a simple uml to visualize the models. 

My plan was then to start writting test stories, but first i couldn't resist checking out how to use Typescript and fastify. I ended up using 4-5 hours on just building the API, and at that time i had no more time for writting the test.

Hope i did ok ?


## Scope

-   general setup (est 1 sp)
-   Suplier Model
    -   test
        -   can crud Suplier (est 4sp)
        -   resource has 1-many Expenses (est 1sp)
        -   deleting Suplier deletes related Expenses (est 1sp)
    -   schema/migration (est 2sp)
    -   seeder (est 1sp)
-   Expenses Model
    -   test
        -   can crud Expenses (est 4sp)
        -   has paid/unpaid expenses status value (est 1sp)
        -   resource has belongsTo-1 Suplier (est 1sp)
    -   schema/migration (est 2sp)
    -   seeder (est 1sp)
-   pagination middleware  (est 4 sp)
-   filtering middleware  (est 3 sp)

Total 24 storypoints

## This repository

This repository contains a bit of boilerplate to get you going quicker.
Feel free to change anything.

There is a docker-compose file which sets up a postgres database on port 5432.
You can use this connectionstring to connect to it: `postgresql://test:test@:5432/test`

Steps to run this project:

1. Run `npm install` command
2. Run `docker-compose up` command
3. Run `cp .env.sample .env` command
4. Run `npm run migrate:fresh` command
5. Run `npm run dev` command

The project uses node v16.
