# Project Starter for Software Technologies 2020


###### Tech Stack

https://expressjs.com/en/4x/api.html

https://graphql.org/learn/

https://mongoosejs.com/docs/index.html

https://www.mongodb.com/cloud/atlas/register

###### Project prepared for deploy at 

https://www.heroku.com/


To start the server locally use
```
npm install
npm run server
```

## Creating a Database in mongoDB

![Creating a cluster](https://raw.githubusercontent.com/AlexanderPPetrov/st-js-be-2020/master/docs/creating_cluster.jpg
)

## Setting up connection method

![Creating a cluster](https://raw.githubusercontent.com/AlexanderPPetrov/st-js-be-2020/master/docs/connect.jpg)

Press [CONNECT] and add your IP to whitelist and create MongoDB User with username and password then Choose a connection method

![Creating a connection](https://raw.githubusercontent.com/AlexanderPPetrov/st-js-be-2020/master/docs/atlas.jpg
)

It will take a while for your cluster to be active. Reload the page if you are impatient and check.
You will be ready when the buttons in gray [METRICS] [COLLECTIONS] become active

Then from [COLLECTIONS] you will be able to create Database with name and a name for the collection you need.

![Creating a database](https://raw.githubusercontent.com/AlexanderPPetrov/st-js-be-2020/master/docs/create_db.jpg
)

If you need more than one collection for your project create them.


You need to add .env file manually to your project as it's not shared in github.

Add .env file to the root of the project and add in it:

MONGODB_URL="YOU_NEED_TO_PASTE_HERE_THE_URL_FROM_YOUR_DB";

Make sure that you replace \/test at the end with the name of your Database

and replace the field \<password\> with your actual password

If you get the following error: Error while saving data in MongoDB atlas with mongoose

Make sure that you remove ";" at the end as it will cause the error.

## Test your local server

```
npm run server
```

Open http://localhost:3000/graphql to test your queries and mutations

Example for mutation:

```
mutation{addUser(
  username:"MyFirstUser", 
  email:"test@abv.bg",
  password: "123"
){
  _id
  email
}}
```

Example for query:

```
query{users{
  _id
  username
  email
}}
```

## Deploy the project on heroku

Create a new app on heroku and add the following config vars

![Config variables](https://raw.githubusercontent.com/AlexanderPPetrov/st-js-be-2020/master/docs/config_vars_heroku.jpg
)

