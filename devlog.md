PROJECT DESCRIPTION AS PER GPT:
Features
•	Add income/expense
•	Category tagging
•	Monthly summary
•	Data stored in DB
•	Simple charts
Stack
•	React + Express + MongoDB
•	No login initially


Created project --- 21-Dec-25 
    (sunday) created project directory (git init -b main), also github repo (new repo @ github w/o readme/license)
Connected local repo to github --- 21-Dec-25
    (git remote add origin url-of-repo & git branch -M main & git push -u origin main)

Planned for app --- 22-Dec-25 (Monday)
    1- react app --- 23-Dec-25 (also checked for shaihulud worm with npm audit)
    2- main page with income & expense tables/divs --- 24-dec-25
    3- tag option (dropdown menu) for income/expense --- 24-dec-25
    4- monthly summary tab, that summarizes income/expense into category & then totals the income expenses
        Basic-setup:
            -   Express app setup --- 1-Jan-26
            -   installed nodemon --- 17-jan-26
            -   hit api endpoint from react using axios --- 17-jan-26, 18-jan-26
            -   needed cors on server app --- 18-jan-26
            -   useEffect to load data on page open & useEffect to display it --- 18-jan-26
        Need to create a proper react app that must have:
            i- function to add income, expense --- 22-Feb-26
            ii- refactor React components to send data to server & fetch response from server in real time in the background, created ExpenseApp2.jsx for this --- 24-Feb-26
            iii- show the detail of data submitted at server on page also w/o refreshing --- 24-Feb-26



            iv- store income, exp data in a database 
                
                (24-Feb-26 installed dotenv, searched "need to create postgresql on an express app" on google) & modified db.js as well as app.js to connect to database personal_finance_tracker & fetch table "expenses" from this database (5-Mar-26) - also searched google "how to ues psql for postgresql databse" in desktop1 chrome

                7-mar-26: successfully connected to database from express server (app.js) and fetched data on api endpoint (url) at "http://localhost:8080/expenses" (also committed to github)
            


            v- retrieve data from database and show in monthly summary
    6- create simple chart for display on the website




