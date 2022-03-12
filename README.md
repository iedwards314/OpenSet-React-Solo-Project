# OpenSet React Solo Project

This is a clone of *AirBNB*. Access the MVP at [OpenSet MVP](https://openset-ice.herokuapp.com/)

*OpenSet*  is a place to go for film/TV production companies to find locations for unique sets for their various projects.

## Index

[MVP Feature List ](https://github.com/iedwards314/OpenSet-React-Solo-Project/wiki/MVP-List) | [ Database Schema ](https://github.com/iedwards314/OpenSet-React-Solo-Project/wiki/OpenSet---db-Schema)

## Technologies Used
1. Front End
   - React, Redux, CSS, HTML
2. Backend
   - Express, Sequelize

## Getting started

1. Clone this repository

    - `git clone git@github.com:iedwards314/OpenSet-React-Solo-Project.git`

2. Install dependencies from the root directory

    - `npm install`

3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.

    - `CREATE USER <name> WITH CREATEDB PASSWORD <'password'>`

4. Create a `.env` file in the backend directory based on the `.env.example`

5. Enter your username and password info into your `.env` file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferably 5000)

6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match the PORT configuration found in your `.env` file.
   - `"proxy": "http://localhost:5000"`

7. Create Database, Migrate, and Seed models.
   - `npx dotenv sequelize-cli db:create`
   - `npx dotenv sequelize-cli db:migrate`
   - `npx dotenv sequelize db:seed:all`

8. Start the services in the backend directory.
   - `npm start`

9. Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to [http://localhost:3000](http://localhost:3000)
   - `npm start`

10. You can use the Demo User or create an account to begin using *OpenSet*

## Features
Logged in users can perform the following actions:
   - Add/View/Edit/Delete Spots
   - Add/View/Delete Reviews

## Spots
To View a spot or the spots list:
   - Click the `Spots` button at the top of the homepage to view the spots list
   - Click the `image` of the spot to navigate to the individual spot details
   - Details include:
      1. Name of the Spot
      2. Price
      3. Address
      4. List of reviews (if there are any)

To Add a spot:
   - Click the `Spots` button at the top of the homepage
   - Click the `Add Spot` button at the top left of the Spots page
   - Fill out the added form:
      1. Name (required with max length is 100 characters)
      2. Price (required and the price will be rounded to the nearest $0.01)
      3. Image URL (required to insert a link)
      4. Address (required with a max length of 255 characters)
      5. City (required with a max length of 40 characters)
      6. Country (required with a max length of 80 characters)

To Edit a Spot
   - (Option 1) Click the `image` button of the spot that the user created to navigate to the individual spot details
      - Spots the user did not create will not allow editing
      - Click the `Edit` button to navigate to the edit form
   - (Option 2) Click the `Edit` button on the spots list page
   - Update fields that need editing (data is prepopulated with existing values)
   - Form fields include:
      1. `Name` (required with max length is 100 characters)
      2. `Price` (required and the price will be rounded to the nearest $0.01)
      3. `Image URL` (required to insert a link)
      4. `Address` (required with a max length of 255 characters)
      5. `City` (required with a max length of 40 characters)
      6. `Country` (required with a max length of 80 characters)

To Delete a Spot
   - Click the `image` of the spot that the user created to navigate to the individual spot details
      - Spots the user did not create will not allow delete
   - Click the `Delete` button
      1. `Confirm Delete` will delete the listing
      2. `Cancel Delete` will return back to the spot details

## Reviews
To View a spot or the spots list:
   - Click the `Spots` button at the top of the homepage to view the spots list
   - Click the `image` of the spot to navigate to the individual spot details
   - Details include:
      1. Name of the Spot
      2. Price
      3. Address
      4. List of reviews (if there are any)

To Add a review:
   - Click on the `Add review` button on the spot details page
      - A user can only write 1 review per spot
      - A user cannot write a review on a spot they posted
   - Fill out the form details to create the review:
      1. `Rating` (required between 1 - 10)
      2. `Review` text field (required input)
   - Click the `Submit` button
   - User should see their new review posted in the review details list

To Delete a review:
   - Click on the `Delete My review` button on the spot details page
      - Click `Confirm Delete` button will delete the user's review
      - Click `Cancel Delete` button that will return the back to the spot details page
