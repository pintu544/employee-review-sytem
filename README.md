
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome file</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h1>Employee Review System</h1>

Fullstack app with Nodejs &amp; Ejs.
This application that allow to submit feedback toward each other's performance. Any employee register and login this application after that views performance rating and review their peformance for gives some feedbacks.
<p>Features<br>
Register and login employee as well as admin.<br>
Admin views all employee and edit some date.<br>
Admin adds new employee.<br>
Admin makes an employee as an admin.<br>
Admin assign an employee to participate in another employee’s performance review.<br>
1 page for admin and employee login.<br>
After login an employee, can see list of performanec review requiring feedback.<br>
Employee submit feedback.<br>
Routes<br>
SignUp: /user/signUp<br>
SignIn: /user/signIn<br>
Admin dashboard: /user/dashboard<br>
Employee dashboard: /user/employeeView<br>
Add employee: /user/addEmployee<br>
Edit employee: /user/editEmployee/:id<br>
Delete employee: /user//deleteEmployee/:id<br>
Add feedback: /feedback/createFeedback/:id</p>

<h1 id="employee-review-system">Employee-Review-System</h1>
<p>A full stack, app used for reviewing employee.<br>
Hoisted Link :</p>
<h3 id="description">Description</h3>
<p>A full stack app, in which the admin, can assign the employees, to review each other on the basic of there work. The admin has special power, to make any other employee<br>
as the new admin. Admin can also make the new employee, and they can also assing, the reviewer and revieweee. The admin can see the current employee, and according to the<br>
review, the admin can remove the employee. The review given to the employee, is always going to be store in the database.</p>
<h3 id="tech-stack">Tech Stack</h3>
<p>Node , Express, Mongodb , EJS , javaScript , html, css</p>
<h3 id="how-to-setup-the-project-on-local-system">How to setup the project on local system</h3>
<ol>
<li>Clone this project</li>
<li>Start by installing npm if you don’t have it already.</li>
<li>Navigate to Project Directory.</li>
</ol>
<p>After reaching the project directory you have to run the following the command.</p>
<pre><code>     npm install 
     npm start || nodemon index.js
</code></pre>
<h4 id="if-you-want-to-make-an-employee-as-admin-then-use-the-secret-key--happy.">If you want to make an employee as admin then use the secret key : happy.</h4>
<h3 id="features">Features</h3>
<p>You can review the employees. The admin has the special power to assing, the task to employee, remove the employee, add new admin, and also employee;</p>
<h1 id="homepage--admin-view">HomePage / Admin View</h1>
<h1 id="home-page--employee-view">Home page / Employee view</h1>
<h1 id="sign-up">Sign-Up</h1>
<h1 id="sign-in">Sign-In</h1>
<h1 id="forget-password">Forget Password</h1>
<h1 id="assign-task">Assign Task</h1>
<h1 id="employee-list">Employee List</h1>
</div>
</body>

</html>
