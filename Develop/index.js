// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const license = require("../Develop/utils/generateMarkdown");
const chalk = require("chalk");
// TODO: Create an array of questions for user input
const error = chalk.underline.red.bold;
const questions = [
        {
            type: 'input',
            name: 'title',
            message: "What is the project title?(Required)",
            validate: title => {
              if(title){
                return true;
              }else{
                console.log(error('Please enter project title!'));
                return false;}
                
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'What is the project description?(Required)',
            validate: description => {
              if(description){
                return true;
              }else{
                console.log(error('Please enter description!'));
                return false;}
            }
          },
          {
            type: 'confirm',
            name: 'isInstallation',
            message: 'Can you provide Installation instructions?',
          },
          {
            type: "input",
            name: "installation",
            message: "What are the steps required to install any dependecies your project?",
            when: ({isInstallation}) => {
                return (isInstallation ? true : false)
            }
        },
          {
            type: 'input',
            name: 'usageInformation',
            message: 'Can you provide Usage information?',
          },
          {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Can you provide Contributor guidelines?',
          },
          {
            type: 'input',
            name: 'testInstructions',
            message: 'Can you provide Testing Instructions?',
          },
          {
            type:'list',
            name: 'license',
            message: 'Which license is covered by the application?',
            choices:['Apache-2.0','0BSD','EPL-2.0','GPL-3.0','ECL-2.0','IPL-1.0','MIT','MPL-2.0','OSL-3.0','W3C'],
          },
          {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
          }     
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

let readmeData = license.generateMarkdown(data);


    fs.writeFile(`./${fileName}.md`,readmeData,err =>{
        if (err) throw new Error(err);
        console.log("Readme file created");
      })
}

// TODO: Create a function to initialize app
function init() {
 
    console.log("Answer the following questions to create your very own README file");
    inquirer.prompt(questions)
    .then(
        (data)=>{
            console.log(data);
            writeToFile("Readme-2",data);
        }
    );
    ;

}

// Function call to initialize app
init();

