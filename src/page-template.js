const fs = require('fs');
const Employee = require('../lib/Employee');
const team = require('../App');
const Engineer = require('../lib/Engineer');


const generatePage = function(team){
console.log(team); 
const teamArray = []
const managerCard = function(employee){
    return `
    <div class="card" style="width: 18rem">
        <div class="card employee-card">
            <div class="card-header text-bg-primary mb-3">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employee.getRole()}</h3>
            </div>
            <div class="card-body text-bg-light p-3">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    </div>
    `
};
// make engineer card function as manager card above 
const engineerCard = function(employee){
    return `
    <div class="card" style="width: 18rem">
        <div class="card employee-card">
            <div class="card-header text-bg-primary mb-3">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employee.getRole()}</h3>
            </div>
            <div class="card-body text-bg-light p-3">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>
                </ul>
            </div>
        </div>
    </div>
    `
}

// make intern card function as maanger fucntion above 
    const internCard = function (employee) {
        return `
       <div class="card" style="width: 18rem">
        <div class="card employee-card">
            <div class="card-header text-bg-primary mb-3">
                <h2 class="card-title">${employee.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employee.getRole()}</h3>
            </div>
            <div class="card-body text-bg-light p-3">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">School: ${employee.getSchool()}</li>
                </ul>
            </div>
        </div>
        </div>
    `
    }


teamArray.push(team.filter(employee => employee.getRole() === "Manager")
.map(employee => managerCard(employee)));
console.log(teamArray);

// push engineer to teamArray
teamArray.push(team.filter(employee => employee.getRole() === "Engineer")
.map(employee => engineerCard(employee)));
console.log(teamArray);

// push intern to teamArray

teamArray.push(team.filter(employee => employee.getRole() === "Intern")
.map(employee => internCard(employee))); 
console.log(teamArray);


return teamArray.join('');




}
module.exports = team => {
// add in bootstrap on line 56 and CSS 
    return `
         <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <title>The Team</title>
        </head>

        <body>
            <header class="text-center text-bg-success p-3"> 
                <h1> The Team </h1>
            </header>
            <div class="container">
            <section class="row p-3 justify-content-around m-3">
            ${generatePage(team)}
            </section>
            </div>
        </body>
    </html>
    

    `
};
