const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
    {
        type: 'input',
        message:'Team manager name:',
        name:'MngrNm'

    },
    {
        type:'input',
        message:'Team manager employee ID:',
        name:'MngrID'
    },
    {
        type:'input',
        message:'Team manager email address:',
        name:'MngrEmail'
    },
    {
        type:'input',
        message:'Team manager office number:',
        name:'MngrOff'
    },
])