#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos: any[] = [];
let userChoice = true;
let updated = true;
let deleted = true;

console.log(chalk.blue.bold("\t Maintain your to do list ")); // for heading

// add in todos list

while(userChoice){

const addTask = await inquirer.prompt([
        {
            name: "todo"  ,
            type: "input" ,
            message: chalk.green.bold("What do you want to do in youre todos?"),
            validate:(ans)=>{
                if (!ans){
                return "Please Enter your answer"
            }
            return true;
        }
        },
        {
            name: "addTodo"  ,
            type: "confirm" ,
            message: chalk.green.bold("Do you want to add more...? "),
            default: false,          
        } 
    ]);

        todos.push(addTask.todo);
        userChoice = addTask.addTodo;
        console.log(todos);  
}

// update in todo list

while(updated){
const updateTask = await inquirer.prompt(
    {
        name: "updateTodo"  ,
        type: "confirm" ,
        message: chalk.blue.bold("Do you want to update in todos"),
        default: false
    });
    
    if (updateTask.updateTodo === true){

        const update = await inquirer.prompt([
        {
            name: "updateItem"  ,
            type: "input" ,
            message: chalk.blue.bold("Name the existing item you want to replace ? "),
            validate:(ans)=>{
                if (!ans){
                return "Please Enter your answer"
            }
            return true;
        }
            
        },
        {
            name:"replaceItem",
            type: "input",
            message: chalk.blue.bold("name the item you want to replace with existing item"),
            validate:(ans)=>{
                if (!ans){
                return "Please Enter your answer"
            }
            return true;
        }
        }]); 
         
            let index = todos.indexOf(update.updateItem)
            todos.splice(index,1,update.replaceItem);
            updated = updateTask.updateTodo; 
            console.log(chalk.bgBlue.bold("\n successfully updated \n")); 

            console.log(chalk.bgGreen.bold(" \t\n Todos list with Index Number \n"));

            todos.forEach(function(itemName,indexNumber){
                console.log(indexNumber + "  " + itemName);
            })
           
        }else{updated = updateTask.updateTodo; }
    }

// for delete in todos list

while(deleted){
const delTask = await inquirer.prompt(
            {
                name: "delTodo"  ,
                type: "confirm" ,
                message: chalk.red.bold("Do you want to delete in todos"),
                default: false
            });
            
        if (delTask.delTodo === true){

                const deleteItem = await inquirer.prompt(
                    {
                        name:"deleteTodo",
                        type: "input",
                        message: chalk.red.bold( "name the item you want to delete ?"),
                        validate:(ans)=>{
                            if (!ans){
                            return "Please Enter your answer"
                        }
                        return true;
                    }
                    }); 
        
                        let delIndex = todos.indexOf(deleteItem.deleteTodo);
                        todos.splice(delIndex,1);
                        console.log (chalk.bgBlue("\n successfully Deleted \n"));

                        console.log(chalk.bgGreen.bold(" \t\n Todos list with Index Number \n"));

                        todos.forEach(function(itemName,indexNumber){
                            console.log(indexNumber + "  " + itemName);
                        })
        
                }else {deleted = delTask.delTodo;}
            }

            console.log(chalk.bgGreen.bold(" \t\n Todos list with Index Number \n"));

            todos.forEach(function(itemName,indexNumber){
                console.log(chalk.red.bold(indexNumber + "  " + itemName));
            })
        





