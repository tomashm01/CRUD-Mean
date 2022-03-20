const {Router}=require("express");
const employeesController = require("../controllers/employees.controller");
const router=Router();

router.get("/employees",employeesController.getEmployees);
router.get("/employees/:id",employeesController.getEmployee);
router.post("/create",employeesController.createEmployee);
router.put("/update/:id",employeesController.updateEmployee);
router.delete("/delete/:id",employeesController.deleteEmployee);

module.exports = router;