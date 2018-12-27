'use strict';

class EmployeeRouter {
    constructor(express, employeeController) {
        this.express = express;
        this.employeeController = employeeController;
        return this.registerEmployeeRoutes();
    }

    registerEmployeeRoutes() {
        const employeeRouter = this.express.Router();
        employeeRouter.route('/')
            .post((req, res) => this.employeeController.addEmployee(req, res))
            .get((req, res) => this.employeeController.getEmployee(req, res));

        return employeeRouter;
    }
}

module.exports = EmployeeRouter;
