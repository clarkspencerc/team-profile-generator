const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer'); 
const Intern = require('./Intern'); 


function App(){
    this.team = []; 
    this.growteam = true; 
}

App.prototype.addEngineer = function(){

inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the name of your Engineer?',
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Engineer's Id"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Engineer's email"
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter your Engineer's github username"
        }
    ])
    .then( answers => {
        this.engineer = new Engineer(answers.name, answers.id, answers.email, answers.github); 
        console.log(this.engineer); 
        this.getMenu();
    });

    
}; 

App.prototype.addIntern = function(){
    console.log('you are about to add an intern');
    // name, id, email, school 
    inquirer 
        .prompt([
            {
                type: 'text',
                name: 'name', 
                message: "What is the name of your Intern?",
            },
            {
                type: 'input', 
                name: 'id', 
                message: "Please enter the Intern's Id"
            }, 
            {
                type: 'input', 
                name: 'email', 
                message: "Please enter your Intern's email"
            }, 
            {
                type: 'input', 
                name: 'school', 
                message: "Please enter your Intern's school name"
            }
        ])
        .then( answers => {
            this.intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            console.log(this.intern); 
            this.getMenu(); 
        })
}; 

App.prototype.buildSite = function(){
    console.log('you are about to build your site');
};

App.prototype.getMenu = function(){
    inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do next?',
            name: 'action', 
            choices: ['Add an Engineer','Add an Intern',"I'm finished building my team"]
        })
        .then(({ action }) =>{
            console.log(`You selected ${action}`);

            if (action === 'Add an Engineer'){
               this.addEngineer(); 
            } else if (action === 'Add an Intern'){
                this.addIntern(); 
            }else{
                return this.buildSite(); 
            }
        });
}; 

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
            message: "Please enter the manager's Id"
        },
         {
            type: 'input',
            name: 'email',
            message:  "Please enter the manager's email"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message:  "Please enter the manager's office number"
        
        }

    ])
    .then(answers =>{
        this.manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(this.manager);
        this.getMenu(); 
    })
    }
}

new App().buildTeam(); 
