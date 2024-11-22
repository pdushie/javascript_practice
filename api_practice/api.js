import express from 'express';
import Database from 'better-sqlite3';
import Joi from 'joi';

// Create instance of express function
const app = new express();

// Declare port number on which express would listen for incomming connections
const port = 8080;

// Connect to database using better-sqlite3
const db = Database('./database/chinook.sqlite', { fileMustExist: true });

// Define Joi validation schema for employee table
const employeeSchema = Joi.object({
    // List fields of table to be validated with Joi
})

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
    if (isNaN(req.params.id)){
        return res.status(404).send({
            error: "id must be an integer"
        });
    }
    
    const statement = db.prepare(`SELECT * FROM employees WHERE EmployeeId=${req.params.id};`);
    const result = statement.get();
    if(!result) {
        return res.send({
            message: "No record found"
        });
    }
    res.send(result);
});

// Create endpoint to add records to the employee table
app.post('/api/employee', (req, res) => {
    // Perform validation using Joi schema
})



// Configure express to listen on port 8080
app.listen(port, () => {
    console.log("Server listening on port", port);
});