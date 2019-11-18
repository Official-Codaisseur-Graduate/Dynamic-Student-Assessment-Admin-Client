# ADMIN PANEL

### Intro

The admin panel of the Student Assessment Web-app will be used by teachers and other Codaisseur's staff. It is meant to provide functionalities like:

- Possibility to add, remove and modify questions & answers
- Overview of the existing questions and answers and how well they are being answered 
- Overview of the applicants who undertook the test 

### Contributors

Class 30:

- [Gerson Lynch](https://www.github.com/gersly)
- [Andrea Cogo](https://www.github.com/anderara)

Class 31: 
- **[KumKum Singh](https://github.com/kumkumsingh)**
- **[Yu Qi](https://github.com/qiyu1987)**
- **[Stijn Blokker](https://github.com/stijnblokker)**
- **[Evelina Wahlström](https://github.com/evelinawahlstrom)**
- **[Sushmita BS](https://github.com/sushmitha-b-s)**

### Related repos

- [Server](https://github.com/Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Server)
- [Admin](https://github.com/Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Admin-Client)

### How to set up

Clone this repository with 

```
git clone git@github.com:Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Admin-Client.git
```

Cd into the folder you just cloned

```
cd Dynamic-Student-Assessment-Admin-Client

```

Install dependencies and run the app

```
npm install
npm run start
```

Before launching the app (step 4), please make sure that the server side is up and running.

### What is working:

**Sign up**: A new user (admin) is able to sign up. A new user will be created on the admin’s table on     the back end, with the password being encrypted (with the help of bcrypt) Please note that newly created admin should login after signing up, after successfull signup the user will be redirected automatically to login (see      “Login” point for more info).

**Login**: For easy login you can use one of the seeded admins **(email=middletonhicks@assistix.com, password=Brainclip)**
Admin users are able to login. If the request to the server is handled successfully,     a json web token will be sent back to the client side and stored on Redux state. Please     see “User” state in Redux: it has a “jwt” property which is set to “null” if nobody logged    in or will display the actual json web token after a successful attempt to sign in.

**Logout**: clicking the logout button will dispatch an action that resets the “User” state in    Redux. After being clicked, the jwt will be dropped and its value will go back to “null”. 

**Add question**: new questions can be added in this section of the app, at the endpoint: /add-question
- An admin can add a new question, choose a category and a difficulty level
- After adding the question, it will automatically (on the same endpoint /add-question) update to give the admin the Add Answers form, where the admin can add four different answer options and choose the option of either correct or incorrect.
- After submitting the answers, the app will redirect to /questions endpoint where you can see the newly added question inside the questions list. 

**Questions**: List of all questions for the test stored in the database.
 *This is done by making a GET request to the database on the /question router.*
- Render a list with expandable panels with information about the question
- Category of the question
- Percentage of students that answered correctly ( hard-coded )
- List of all possible answers for that question ( both correct and wrong answers ).
- Delete button (working!)
- Edit button (not working, just a visible button)

**Students**: List of all students (named interviewees in a table) registered for the test or possible candidates
        *This is done by making a GET request to the database on the `/interviewee` router.*
- List of students (aka interviewees) with an email and their id
- Adjust the view of the table ( 5, 10 or 20 rows in view )
- Pagination is working
-  **GENERATE CODE**
        - At the /students endpoint, you can generate a code by adding the id of the interviewee (= students id) which is             listed together with the email in the students list that can later be used to login to the TEST CLIENT 
        (the site where interviewees will take the test)
 - **TABLE used for listing all the students(aka interviewees)**
       - Refer to https://material-ui.com/components/tables/ document. A "Fixed Header" table is used here for listing all the students.
### To do: 

**Questions**
- Fix so that the edit button is working (action, reducer). put request is already added in the backend.
- Percentage of students that answered correctly is only hard-coded at the moment.
- After generating code for an interviewee on Admin-client, we use that code to login on Test-client side, but that is not authenticated.Fix it.

**Students**
- Implement score?

### Known issues:

