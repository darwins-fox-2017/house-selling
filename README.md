# House Selling

House selling is e-commerce for real estate.

# Database

## House Schema

  **Field**  |  **Data Type**  |              **Description**
-------------|-----------------|------------------------------------------------
| _id        | Object_ID       | User ID (auto create)
| title      | STRING          | Display title
| price      | NUMBER          | Price house
| detail     | STRING          | Detail of house
| image      | STRING          | Link image
| latitude   | NUMBER          | Latitude location
| longitude  | NUMBER          | Longitude location
| createdAt  | DATE            | (auto: timestamps) Date time user created
| updatedAt  | DATE            | (auto: timestamps) Date time user updated

# Routes

## House

    **Route**   |  **HTTP**  |              **Description**
----------------|------------|------------------------------------------
| /house        | GET        | Get all data house
| /house/:id    | GET        | Get one data house
| /house        | POST       | Create new house
| /house/:id    | PUT        | Update data house
| /house/:id    | DELETE     | Delete data house
| /seed         | POST       | Seed data (faker) house

# **USAGE**
#### With only npm:

To install all dependencies:
> npm i <br>

I'm using:
>npm install express nodemon cors mongodb mongoose <br>

>npm start <br>
>npm run dev <br>

#### Running mongod:
> sudo service mongod start <br>
> check connection @robomongo <br>

Access the website (live-server) via http://localhost:3000/
