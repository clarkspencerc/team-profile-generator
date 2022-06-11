const inquirer = require('inquirer');
const Manager = require('./Manager')
const Engineer = require('./Manager'); 
const Intern = require('./Intern'); 


function App(){
    this.team = []; 
    this.growteam = true; 
}

App.prototype.buildTeam = function(){
    // if building team 
    if(this.growteam){
        inquirer
        // prompt user for managers info 
        .prompt([
        {
            type: 'text', 
            name: 'name',
            message: 'What is the name of your manager?',
            validate: nameInput => {
                if (nameInput){
                    return true; 
                } else {
                    console.log("Please enter your manger's name")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's Id."
        },
         {
            type: 'input',
            name: 'email',
            message:  "Please enter the manager's email."
        },
        {
            type: 'input',
            name: 'officeNumber',
            message:  "Please enter the manager's office number."
        
        }

    ])
    .then(answers =>{
        this.manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(this.manager);
    })
    }
}

new App().buildTeam(); 
