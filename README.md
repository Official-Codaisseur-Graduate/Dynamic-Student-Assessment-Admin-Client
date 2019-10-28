ADMIN PANEL

Intro
    The admin panel of the Student Assessment Web-app will be used by teachers and other Codaisseur's staff. It is meant to provide functionalities like:
    Possibility to add, remove and modify questions & answers
    Overview of the existing questions and answers and how well they are being answered 
    Overview of the applicants who undertook the test 

Contributors
    Gerson Lynch: https:///www.github.com/gersly
    Andrea Cogo: https://www.github.com/anderara

How to set up

    Clone this repository with “git clone git@github.com:Official-Codaisseur-Graduate/Dynamic-Student-Assessment-Admin-Client.git”
    Cd into the folder you just cloned
    Run “npm install” (or “npm i”)
    Run “npm run start”

    Before launching the app (step 4), please make sure that the server side is up and running.

What is working:

    “Sign up”: new users are able to sign up. A new user will be created on the user’s table on     the back end. Please note that newly created users should sign in after signing up (see      “Sign In” point for more info).

    “Sign In”: users are able to sign in. If the request to the server is handled successfully,     a json web token will be sent back to the client side and stored on Redux state. Please     see “User” state in Redux: it has a “jwt” property which is set to “null” if nobody logged    in or will display the actual json web token after a successful attempt to sign in.

    “Logout”: clicking the logout button will dispatch an action that resets the “User” state in    Redux. After being clicked, the jwt will be dropped and its value will go back to “null”. 

    “Add question”: new questions can be added in this section of the app.
        This will trigger a POST request to the /question router. The data sent to the back end comprehends the content of the question and category id (from the drop down menu). If the request is successful, the server will send back the id of the newly added question which is saved in the redux state “idNewQuestion”. The id of the newly added question will be needed  when uploading the answers of the question, see “TO DO” section for more info.

    “Questions”: List of all questions for the test stored in the database.
        *This is done by making a GET request to the database on the /question router.*
        - Render a list with expandable panels with information about the question
        - Category of the question
        - Percentage of students that answered correctly ( hard-coded )
        - List of all possible answers for that question ( both correct and wrong answers ).

    “Students”: List of all students registered for the test or possible candidates
        *This is done by making a GET request to the database on the `/user` router.*
        - Render a table of entries that are both sortable, exportable and filterable
        - Ability to update data in the table is possible ( ONLY in local state atm).
        - Search function in table 
        - Export table to CSV
        - Adjust the view of the table ( 5, 10 or 20 rows in view )


To do:

    “Add a question” section:
        In this section the possibility to add answers is missing. The idea is to create a new child component with multiple forms in which the different answers can be uploaded. Beside adding the actual content of the answers, there should be a true/false dropdown option for each answer to set it as right or wrong. The “idNewQuestion” state of Redux is needed to link the answers to the right question in the backend. A good idea would be to make the answers’ form visible to the users only if “idNewQuestion” is present (and not “null”).

    “Students” section:
        Any update in database should trigger a PUT request to the database for the user based on his/her id 


Known issues:

    “Students” section:
        Pagination in table is not working properly. ( Setting the offset of the entries results in a ‘bug’ )
