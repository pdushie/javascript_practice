import express from 'express';
import Database from 'better-sqlite3';
import Joi from 'joi';

// Create instance of express function
const app = new express();

// Declare port number on which express would listen for incomming connections
const port = 8080;

//Middleware section
app.use(express.json());

// Connect to database using better-sqlite3
const db = Database('./database/chinook.sqlite', { fileMustExist: true });

// Define Joi validation schema for employee table
const employeeSchema = Joi.object({
    // List fields of table to be validated with Joi
    LastName: Joi.string().required().max(20),
    FirstName: Joi.string().required().max(20),
    Title: Joi.string().max(30)
});

// Serve static files using express
app.use(express.static("public"));

// Create endpoint to get all employees from DB
app.get('/api/employees', (req, res) => {
    try {
        const statement = db.prepare("SELECT * FROM employees")
        const result = statement.all();

        // Send result of select
        res.send(result);
    } catch (err) {
        //Log error to console
        console.log(err);

        // Send error response to user
        res.status(500).send({
            "Message": "Try again later",
            "error": err.code
        });
    }
});

// Create endpoint to get an employee with a specific ID
app.get('/api/employees/:id', (req, res) => {
    // Validate id to ensure it is a number
    if (isNaN(req.params.id)) {
        return res.status(404).send({
            error: "id must be an integer"
        });
    }

    try {
        const statement = db.prepare(`SELECT * FROM employeees WHERE EmployeeId=${req.params.id};`);
        const result = statement.get();
        if (!result) {
            return res.send({
                message: "No record found"
            });
        }
        res.send(result);
    } catch (err) {
        res.status(404).send({
            message: `There was a problem connecting to the database. Try again later`,
            error: err.code
        });
    }
});

// Create endpoint to add records to the employee table
app.post('/api/employees', (req, res) => {
    // Perform validation using Joi schema
    const validationResult = employeeSchema.validate(req.body);
    // Once validationResult contains the error object, it means a a validation error occured
    if (validationResult.error) {
        console.log(req.body, validationResult);
        return res.status(422).send({
            Error: validationResult.error.details
        });
    }

    // SQL Statement to dynamicall insert data into database
    // Create a function to dynamically prepare insert statement when called (Function Name: prepareInsertStatement)
    // prepareInsertStatement takes two parameters: table name and payload or req.body
    const {sql, values} = prepareInsertStatement('employees', req.body);

    const statement = db.prepare(sql);
    const result = statement.run(values);
    
    res.send(result);


})
// Configure express to listen on port 8080
app.listen(port, () => {
    console.log("Server listening on port", port);
});

function prepareInsertStatement(tableName, payload){
    const insertFields = Object.keys(payload);
    const insertValues = Object.values(payload);
    const statement = `INSERT INTO ${tableName} (${insertFields.join(', ')}) VALUES(${insertValues.map(() => '?').join(', ')});`;
    return {
        sql: statement,
        values: insertValues
    };
}