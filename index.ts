#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos = [ ];
let userChoice = true;

console.log(chalk.blue.bold("\t Maintain your to do list")); // for heading

    while(userChoice){
// add and update in todos list
    const addTask = await inquirer.prompt([
        {
            name: "todo"  ,
            type: "input" ,
            message: chalk.green.bold("What do you want to do in youre todos?")
        },
        {
            name: "addTodo"  ,
            type: "confirm" ,
            message: chalk.green.bold("Do you want to add more...? "),
            default: false         
        } 
    ]);

        todos.push(addTask.todo);
        userChoice = addTask.addTodo;
        console.log(todos);
     
}// for delete in todos list
    const delTask = await inquirer.prompt(
            {
                name: "delTodo"  ,
                type: "confirm" ,
                message: chalk.blue.bold("Do you want to delete in todos"),
                default: true
            }); 
        if (delTask.delTodo === true){
         todos.pop(); 
         console.log(todos);
        }else {

            console.log(todos);
        }


