const inquirer = require('inquirer');
const fs = require('fs');
const { json } = require('stream/consumers');

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
.then((response) => {
    const mngrString = JSON.stringify(response);
    const mngrAnswer = JSON.parse(mngrString);
    console.log(mngrAnswer);
    const { MngrNm, MngrID, MngrEmail, MngrOff } = mngrAnswer;
    console.log(MngrNm);
    return(mngrAnswer);
})
.then((tManager) =>{
    if (tManager != ('')){
        inquirer
        .prompt([
            {
                type:'checkbox',
                message:'Would you like to add an engineer, intern, or end the team bulding process?',
                choices:['engineer', 'intern', 'end'],
                name:'Choose'

            }
        ])
    }
    else {
        console.log('Please enter Team Manager information!');
    }
})
