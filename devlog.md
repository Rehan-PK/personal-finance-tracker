21-Dec-25 (sunday)
- created project directory (git init -b main), also github repo (new repo @ github w/o readme/license)
- connected local repo to github (git remote add origin url-of-repo & git branch -M main & git push -u origin main)

22-Dec-25 (Monday)
PLAN:
    1- create a react app 
        done 23-Dec-25
        also checked for shaihulud worm with npm audit
    2- create a main page with income & expense tables/divs
        done 24-dec-25
    3- create a tag option (dropdown menu type) that tags any given income/expense to the specified category
        done 24-dec-25
    4- create a monthly summary tab also, that summarizes income/expense into category & then totals the income expenses
        4(A) here i need to create a proper react app that must have:
            i- function to add income, expense
            
            *** 12-Feb-26: (revision) need to make income/expense & amount & date field -all editable, with a submit button
            - created a drop-down in react, with submit button, now need to fetch submitted data in express and use it, detail opened in browser....

            ii- store income, exp data in a database
            iii- retrieve data from database and show in monthly summary    
        1-Jan-26:
        4(B) To do this, need to:
         i- setup a separate express app (done 1-Jan-26)
            - also installed nodemon (17-jan-26)
         ii- then hit api from within react app using axios which hits api endpoint from within app (17-jan-26)
            - also (18-jan-26)
         iii- also need cors on server app, (18-jan) 
         iv- useeffect to load data upon page open and (18-jan)  
         v- usestate to display data on page (18-jan) 
    


    5- create a database and connect it with the app, use local database
    
    6- create simple chart for display on the website



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
