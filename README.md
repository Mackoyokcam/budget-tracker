![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Code-401-Javascript Lab 31-34
===
This is day 31-34 of lab with Code Fellows. The purpose of the lab is to teach students the basics of react as well as modularize each component correctly. Throughout the 4 days, students will learn key skills to develop fluid react apps:
* Day 1 - Redux
* Day 2 - Combining reducers
* Day 3 - Redux middleware
* Day 4 - Drag and drop

# Budget Tracker App

Allows users to create, update and delete categories and expenses to help plan a budget. User can also drag and drop expenses to different categories.

### main.js

Entry point for the app.

### Components

#### Structure:
```
BrowserRouter
  Provider
    App
      Route /Landing
      Route /Dashboard
        Dashboard
          CategoryForm
          [Category Item]
             Dropzone
               CategoryForm
               ExpenseForm
               [ExpenseItem]
                  Draggable
                    ExpenseForm
```
  * ##### BrowserRouter
    * Manages the frontend routes
  * ##### Provider
    * Holds / manages all application state
  * ##### App
    * Holds the links to access the routes in the navbar
    * the `/` route displays the Landing component
    * the `/dashboard` route displays the Dashboard component
  * ##### Landing
    * Displays a brief description of the Budget Tracker app
  * ##### Dashboard
    * Uses react-redux's connect to map state and dispatchable methods to props
    * Displays a CategoryForm for adding categories to the app state
    * Displays a CategoryItem for each category in the app state
  * ##### CategoryForm
    * Expects an onComplete prop to be a function
    * Function is invoked with the CategoryForm's State when the form is submitted
    * Supports an optional category prop that will initialize the state of the form
  * ##### CategoryItem
    * Contains the following properties:
      * `id` a uuid
      * `timestamp` a date from when the category was created
      * `name` a string that is the name of the category
      * `amount` a number that is the total amount of $ in the category
    * Displays the category's name and budget
    * Receives a category prop from Dashboard
    * Displays a delete button, onClick the category is removed from the application state
    * Displays a CategoryForm, onComplete the form should update the component in the application state
    * Displays an ExpenseForm to the category item that enables the user to create expenses on the app state
    * Displays a list of all the ExpenseItems belonging to the category
  * ##### ExpenseForm
    * Has an onComplete prop that will be invoked with the form state on submit
    * Support create and update
  * ##### ExpenseItem component
    * Contains the following properties:
    id a uuid
      * `categoryID` an id that corresponds to an existing category
      * `timestamp` a date from when the category was created
      * `name` a string that is the name of the expense
      * `price` a number that is the price of the expense
    * Has a button that will delete the expense from the app state onClick
    * Displays the name and price of the component
    * Displays an ExpenseForm that will enable the user to update the expense in the app state

* ##### Draggable
  * Creates a component that enable users to drag its children
  * Stores data passed into its dataTransferItem prop on the event handler for onDragStart
  * Data is stored as json under the MIME 'application/json'
* ##### Dropzone
  * Create a component that enables users to drop a Draggable component
  * onDrop it should invoke a callback with the data passed using the events dataTransferObject
