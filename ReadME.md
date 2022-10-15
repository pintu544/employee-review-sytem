# Employee Review System

## _Fullstack app with Nodejs & Ejs._

This application that allow to submit feedback toward each other's performance. Any employee register and login this application after that views performance rating and review their performance for gives some feedbacks.

## Features
- Register and login employee as well as admin.
- Admin views all employee and edit some date.
- Admin adds new employee.
- Admin makes an employee as an admin.
- Admin assign an employee to participate in another employee's performance review.
- 1 page for admin and employee login.
- After login an employee, can see list of performance review requiring feedback.
- Employee submit feedback.

## Routes
- SignUp: /user/signUp
- SignIn: /user/signIn
- Admin dashboard: /user/dashboard
- Employee dashboard: /user/employeeView
- Add employee: /user/addEmployee
- Edit employee: /user/editEmployee/:id
- Delete employee: /user//deleteEmployee/:id
- Add feedback: /feedback/createFeedback/:id

# Tech
- Nodejs
- Express js
- Ejs
- MongoDB

<!-- *Features (No need for extra features, just make the listed features)
?Admin view
!Add/remove/update/view employees
TODO Add/update/view performance reviews
Assign employees to participate in another employee's performance review
*Employee view
?List of performance review requiring feedback
!Submit feedback
todo Make 1 login for admin and employee
An employee can register, only admin can make an employee an admin -->


## Deployment
- Heroku (nodejs server)
- MongoDB Atlas (for database)

## Hosted Url

