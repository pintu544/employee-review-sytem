<h1>Employee Review System</h1>
<body>
Fullstack app with Nodejs & Ejs.
This application that allow to submit feedback toward each other's performance. Any employee register and login this application after that views performance rating and review their peformance for gives some feedbacks.

Features
Register and login employee as well as admin.
Admin views all employee and edit some date.
Admin adds new employee.
Admin makes an employee as an admin.
Admin assign an employee to participate in another employee's performance review.
1 page for admin and employee login.
After login an employee, can see list of performanec review requiring feedback.
Employee submit feedback.
Routes
SignUp: /user/signUp
SignIn: /user/signIn
Admin dashboard: /user/dashboard
Employee dashboard: /user/employeeView
Add employee: /user/addEmployee
Edit employee: /user/editEmployee/:id
Delete employee: /user//deleteEmployee/:id
Add feedback: /feedback/createFeedback/:id
</body>


# Employee-Review-System
A full stack, app used for reviewing employee.
Hoisted Link :


### Description

A full stack app, in which the admin, can assign the employees, to review each other on the basic of there work. The admin has special power, to make any other employee
as the new admin. Admin can also make the new employee, and they can also assing, the reviewer and revieweee. The admin can see the current employee, and according to the
review, the admin can remove the employee. The review given to the employee, is always going to be store in the database.


### Tech Stack

Node , Express, Mongodb , EJS , javaScript , html, css

### How to setup the project on local system

  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory.

After reaching the project directory you have to run the following the command.
   ```` 
        npm install 
        npm start || nodemon index.js
   ````

#### If you want to make an employee as admin then use the secret key : happy.

### Features

  You can review the employees. The admin has the special power to assing, the task to employee, remove the employee, add new admin, and also employee;
  
  
  # HomePage / Admin View

  # Home page / Employee view

  
  # Sign-Up


  # Sign-In

  # Forget Password
  
  # Assign Task

  # Employee List
