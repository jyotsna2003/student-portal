This is a basic portal created using HTML,CSS,js for frontend and node js express for backend with MYSQL connectivity.
The website obtains student information and stores it in the database.
The file structure:
student-portal->
               |->> backend
               |         |- index.js
               |         |- node modules
               |         |- package.json
               |         |- package lock
               |        
               |
               |->> frontend
               |          |- apps.js
               |          |- index.html
               |          |- styles.css
               |

The package can be added into the files by "npm install" command in your desired directory.
To start the frontend server type "npm start" in command prompt frontend directory.
To start the backend server type "node index.js" in command prompt backend director.y
Mysql table creation should be as follows:
CREATE DATABASE student_portal;
CREATE TABLE IF NOT EXISTS students (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(100),
         age INT,
         attendance INT,
         cgpa FLOAT
     );
Access your appllication at http://localhost:8080

Here's the demonstration of its working
Page display:
<img width="959" alt="image" src="https://github.com/jyotsna2003/student-portal/assets/94167110/c0de3157-25a5-4a0f-8dfb-eb9c2834cc8d">


Add data:
<img width="959" alt="image" src="https://github.com/jyotsna2003/student-portal/assets/94167110/d366f78b-f151-4e28-8333-8a56b2a0f925">



View data:
<img width="959" alt="image" src="https://github.com/jyotsna2003/student-portal/assets/94167110/3cf38e81-0882-48b2-b0f6-6015eef9d9fd">



Database will be updated:
<img width="471" alt="image" src="https://github.com/jyotsna2003/student-portal/assets/94167110/d5380928-7724-485e-a093-2b372f1f3928">



