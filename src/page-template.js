const fs = require('fs');
const Employee = require('../lib/Employee');
const team = require('../App');
const Engineer = require('../lib/Engineer');


const generatePage = function(team){
console.log(team); 
const teamArray = []
const managerCard = function(employee){
    return `
    <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employee.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `
};
// make engineer card function as manager card above 
const engineerCard = function(employee){
    return `
       <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employee.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `
}

// make intern card function as maanger fucntion above 



teamArray.push(team.filter(employee => employee.getRole() === "Manager")
.map(employee => managerCard(employee)));
console.log(teamArray);

// push engineer to teamArray
teamArray.push(team.filter(employee => employee.getRole() === "Engineer")
.map(employee => engineerCard(employee)));
console.log(teamArray);

// push intern to teamArray


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
            
            <title>The Team</title>
        </head>

        <body>
            <header> 
                <h1> The Team </h1>
            </header>
            <section>
            ${generatePage(team)}
            </section>
        </body>
    </html>
    

    `
};
