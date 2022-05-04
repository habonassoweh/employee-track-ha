// TODO: Include packages needed for this application
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
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      if (response.Option === "view_employees") {
        viewEmployees();
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

const questionsAddEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "Option",
        message: "What would you like to do",
        choices: [
          {
            name: "Add all Employees",
            value: "add_employees",
          },
        ],
      },
    ])
    .then((response) => {
      console.log(response);
      if (response.Option === "add_employees") {
        addEmployees();
      }
    });

  const addEmployees = () => {
    console.log("test");
    db.query("select * from employee", (err, data) => {
      if (err) {
        throw err;
      }
      console.table(data);
    });
  };
};

questions();
questionsAddEmployee();
