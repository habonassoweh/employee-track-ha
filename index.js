// TODO: Include packages needed for this application
const { response } = require("express");
const inquirer = require("inquirer");
const db = require("./server");

// TODO: Create an array of questions for user input
const questions = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "Option",
        message: "What would you like to do",
        choices: [
          {
            name: "View all Employees",
            value: "view_employees",
          },
          {
            name: "Add Employee",
            value: "add_employee",
          },
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      if (response.Option === "view_employees") {
        viewEmployees();
      } else {
        addEmployee();
      }
    });

  const viewEmployees = () => {
    console.log("test");
    db.query("select * from employee", (err, data) => {
      if (err) {
        throw err;
      }
      console.table(data);
    });
  };
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "first_name",
        message: "What is employee's first name?",
      },
      {
        name: "last_name",
        message: "What is employee's last name?",
      },
      {
        name: "role_id",
        message: "what is employee's role id?",
      },
    ])
    .then((response) => {
      let firstname = response.first_name;
      let lastname = response.last_name;
      let roleid = response.role_id;

      //insert values into employee table, make object of options

      
      // const insertEmployee= {
      //   let employeeArray = [firstname, lastname, roleid];
      //   db.query("insert into employeeArray[]", (err, data) => {
      //     if (err) {
      //       throw err;
      //     }
      //     console.table(data);
      //   })
      // }
    });
    const insertEmployee = () => {(
      let employeeArray = [firstname, lastname, roleid];
      db.query("insert into employee", (employeeArray)
       ) }
};
questions();
