# COOL KIDS Project - RANKMATH TEST

## by Mihir Sharma

## The problem

According to the user story, we need to develop a user management and data system with full Create and Read functionality for the users and Read and Update functionality for the Maintainers.
The Maintainer can access the user data through email or first and last names;
The users have 3 possible roles:

1. coolkid - A basic user with access to their own data
2. coolerkid - An elevated user with access to limited data of all users
3. coolestkid - An elevated user with access to all user data (non-maintainer)

The maintainer - A superuser with the ability to elevate other users.

## Technical Specification

### 1. Frontend

-   Framework - Next.js
-   Style - Tailwind
-   Interface elements - Material UI
-   API calls - Axios

### 2. Backend

-   Node.js
-   Express
-   Authentication - jsonwebtoken
-   API calls - Axios
-   DB Integration - Sequelize

### 3. Database

-   PostgreSQL
-   database name : coolkidsdb
-   all database specifications can be updated in the db.config.js file in the folder ./coolkids_backend/config

## Technical Decisions

The primary technical decision made was to isolate the user and maintainer endpoints on the backend and functions and pages on the frontend. This allowed for more security in the application and the ability to update user and maintainer functionality in the future without affecting the other.

Additionally, the decision to use Axios instead of fetch to get data from throughout the application was made for the convinience offered by Axios in parsing, its easier syntax when handling more complex MIME types and the ability to create instances for use with config files.

## How the solution achieves the admin’s desired outcome per the user story.

All maintainer APIs are isolated from the user APIs, and are the only ones which require a strict login to access. **(default maintainer data : {email: admin@admin.com, password : admin})**

Additionally, user role may be updated through a column in the table showing all user data, eliminating the need for multiple page jumps.

The user roles have been capped on the Database side using an ENUM type.

Coolerkid and Coolestkid data limitations are baked into the backend, only providing the user with authorized data through a DB query.
