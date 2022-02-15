<p align="center">
  <img src="uml.png?raw=true" alt="assignment-backend"></a>
</p>

<h1 align="center">Assignment Backend</h1>

<div align="center">

This is a backend assignment for a job application!

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/captain-fatbeard/assignment-backend/LICENSE.md)

</div>

### Scope

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