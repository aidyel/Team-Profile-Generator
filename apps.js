const inquirer = require('inquirer');
const  Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const generateSite = require('./src/generate-site');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/Employee');
const OUTPUUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUUT_DIR, "team.html");
const teamMembers = [];


const prompManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true
                }else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter your employee ID (Required)",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter your employee ID');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your mail address (Required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please eneter your email address');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter your office number (Required)",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please eneter your office number');
                    return false
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        prompMenu();
    })
}

const prompMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: "Please select which option you would like to continue with:",
            choices: ['add an Engineer', 'add an Intern', 'finish building my team']
        }
    ]).then(userChoice => {
        switch (userChoice.menu) {
            case "add an Engineer":
                prompEngineer();
                break;
            case "add an Intern":
                prompIntern();
                break;
            default:
                buildTeam();
        }
    });
};

const prompEngineer = () => {
    console.log(`
        =================
        Add a New Engineer
        ==================`
    );

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the engineer? (Required)",
            validate: engineerName => {
                if (engineerName) {
                    return true;
                }else {
                    console.log("Please enter the name of engineer")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter your employee ID? (Required)",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                }else {
                    console.log("Please enter your employee ID!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your mail address (Required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your GitHub username? (Required)",
            validate: githubUserName => {
                if (githubUserName) {
                    return true;
                }else {
                    console.log("Please enter your GitHub username!")
                    return false
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUserName);
        teamMembers.push(engineer);
        prompMenu();
    })
}


const prompIntern = () => {
    console.log(`
        =================
         Add a New Intern
        ==================`
    );

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the intern? (Required)",
            validate: internName => {
                if (internName) {
                    return true;
                }else {
                    console.log("Please enter the name of your intern")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter your employee ID? (Required)",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                }else {
                    console.log("Please enter your employee ID!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your mail address (Required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please eneter your email address!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter your school name? (Required)",
            validate: schoolName => {
                if (schoolName) {
                    return true;
                }else {
                    console.log("Please enter your school name!")
                    return false
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.schoolName);
        teamMembers.push(intern);
        prompMenu();
    })
};

const buildTeam = ()  => {
    console.log(`
    ===========================
     Finished building my team!
    ===========================
    `
    )

    // create the output directory if the output doesn't exist
    if (!fs.existsSync(OUTPUUT_DIR)) {
        fs.mkdirSync(OUTPUUT_DIR)
    } fs.writeFileSync(outputPath, generateSite(teamMembers), 'utf-8')
}

prompManager();
