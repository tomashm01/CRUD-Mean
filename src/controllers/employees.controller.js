const Employee = require('../models/Employee');

const employeeController={
    getEmployees:(req,res)=>{
        const employees = Employee.find();
        res.json(employees);
    },
    createEmployee:(req,res)=>{
        const employee = new Employee(req.body);
        employee.save();
        res.json({
            'status':'Employee Saved',
            "req":employee
        });
    },
    getEmployee:(req,res)=>{

    },
    updateEmployee:(req,res)=>{

    },
    deleteEmployee:(req,res)=>{

    }
}


module.exports =employeeController;